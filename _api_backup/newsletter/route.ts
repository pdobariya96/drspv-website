import { NextResponse } from "next/server";
import { z } from "zod";
import { supabaseAdmin } from "@/lib/supabase";
import { sendWelcomeEmail } from "@/lib/newsletter";
import { fireWebhook } from "@/lib/webhooks";

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
  firstName: z.string().optional(),
});

const isConfigured = process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = newsletterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues[0]?.message || "Invalid input" },
        { status: 400 }
      );
    }

    const { email, firstName } = parsed.data;

    // If Supabase is not configured, return success for demo/dev
    if (!isConfigured) {
      console.log(`[Dev mode] Newsletter signup: ${email}`);
      return NextResponse.json({ success: true });
    }

    // Check for duplicate subscriber
    const { data: existing } = await supabaseAdmin
      .from("subscribers")
      .select("id")
      .eq("email", email)
      .single();

    if (existing) {
      return NextResponse.json(
        { success: false, error: "Already subscribed" },
        { status: 400 }
      );
    }

    const { error: dbError } = await supabaseAdmin
      .from("subscribers")
      .insert({ email, first_name: firstName });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json(
        { success: false, error: "Failed to subscribe. Please try again." },
        { status: 500 }
      );
    }

    // Send welcome email — don't fail the request if email fails
    try {
      await sendWelcomeEmail(email, firstName);
    } catch (emailErr) {
      console.error("Welcome email failed:", emailErr);
    }

    await fireWebhook(process.env.WEBHOOK_NEWSLETTER_URL, {
      type: "newsletter_signup",
      email,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter API error:", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
