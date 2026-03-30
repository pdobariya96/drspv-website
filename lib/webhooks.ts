export async function fireWebhook(url: string | undefined, data: Record<string, unknown>) {
  if (!url) return;
  const secret = process.env.WEBHOOK_SECRET;
  try {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(secret ? { "X-Webhook-Secret": secret } : {}),
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        source: "drspv.in",
      }),
    });
  } catch {
    // Silent fail — webhooks should not block user-facing operations
  }
}

export function validateWebhookSecret(request: Request): boolean {
  const secret = process.env.WEBHOOK_SECRET;
  if (!secret) return true;
  const headerSecret = request.headers.get("X-Webhook-Secret");
  return headerSecret === secret;
}
