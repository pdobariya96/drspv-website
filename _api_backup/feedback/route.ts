import { NextResponse } from "next/server";
import { z } from "zod";
import { supabaseAdmin } from "@/lib/supabase";

const feedbackSchema = z.object({
  slug: z.string().min(1),
  vote: z.enum(["yes", "no"]),
  type: z.enum(["blog", "knowledge"]),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = feedbackSchema.safeParse(body);

    if (!parsed.success) {
      // Silent — still return success to client
      return NextResponse.json({ success: true });
    }

    const { slug, vote, type } = parsed.data;

    const isConfigured = process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder");
    if (isConfigured) {
      await supabaseAdmin
        .from("article_feedback")
        .insert({ slug, vote, type });
    } else {
      console.log(`[Dev mode] Feedback: ${slug} → ${vote} (${type})`);
    }

    return NextResponse.json({ success: true });
  } catch {
    // Silent on any error — still return success to client
    return NextResponse.json({ success: true });
  }
}
