import { NextResponse } from "next/server";
import { z } from "zod";
import { supabaseAdmin } from "@/lib/supabase";
import { sendDownloadEmail } from "@/lib/newsletter";

const downloadSchema = z.object({
  email: z.string().email("Invalid email address"),
  firstName: z.string().min(1, "First name is required"),
  downloadId: z.string().min(1, "Download ID is required"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = downloadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues[0]?.message || "Invalid input" },
        { status: 400 }
      );
    }

    const { email, firstName, downloadId } = parsed.data;

    const isConfigured = process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder");

    if (!isConfigured) {
      console.log(`[Dev mode] Download gate: ${email} → ${downloadId}`);
      return NextResponse.json({ success: true });
    }

    // Save download record
    const { error: dlError } = await supabaseAdmin
      .from("downloads")
      .insert({ email, first_name: firstName, download_id: downloadId });

    if (dlError) {
      console.error("Supabase downloads insert error:", dlError);
      return NextResponse.json(
        { success: false, error: "Failed to process download. Please try again." },
        { status: 500 }
      );
    }

    // Upsert into subscribers (ignore if already exists)
    await supabaseAdmin
      .from("subscribers")
      .upsert(
        { email, first_name: firstName },
        { onConflict: "email", ignoreDuplicates: true }
      );

    // Construct download URL and send email
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drspv.in";
    const downloadUrl = `${siteUrl}/downloads/${downloadId}`;
    const downloadTitle = downloadId
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    try {
      await sendDownloadEmail(email, firstName, downloadTitle, downloadUrl);
    } catch (emailErr) {
      console.error("Download email failed:", emailErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Download gate API error:", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
