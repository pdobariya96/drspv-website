import { NextResponse } from "next/server";
import { z } from "zod";
import { supabaseAdmin } from "@/lib/supabase";
import { fireWebhook } from "@/lib/webhooks";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1, "Service is required"),
  message: z.string().min(1, "Message is required"),
});

const isConfigured = process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues[0]?.message || "Invalid input" },
        { status: 400 }
      );
    }

    const { name, phone, email, service, message } = parsed.data;

    if (!isConfigured) {
      console.log(`[Dev mode] Contact form: ${name} (${email}) - ${service}`);
      return NextResponse.json({ success: true, message: "We'll be in touch within 48 hours" });
    }

    const { error: dbError } = await supabaseAdmin
      .from("leads")
      .insert({ name, phone, email, service, message });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json(
        { success: false, error: "Failed to save your enquiry. Please try again." },
        { status: 500 }
      );
    }

    await fireWebhook(process.env.WEBHOOK_CONTACT_URL, {
      type: "contact_form",
      name,
      email,
      service,
    });

    return NextResponse.json({
      success: true,
      message: "We'll be in touch within 48 hours",
    });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
