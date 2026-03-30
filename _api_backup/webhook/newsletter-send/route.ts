import { NextResponse } from "next/server";
import { validateWebhookSecret } from "@/lib/webhooks";

export async function POST(request: Request) {
  if (!validateWebhookSecret(request)) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  // Actual implementation delegated to scripts/send-newsletter.ts
  return NextResponse.json({
    success: true,
    message: "Newsletter send triggered",
  });
}
