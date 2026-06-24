import { NextRequest, NextResponse } from "next/server";

const CRM_API = "https://crm.dmtn.com.br/api/calendar/availability-next";

export async function GET(req: NextRequest) {
  const from = req.nextUrl.searchParams.get("from") ?? "";
  const days = req.nextUrl.searchParams.get("days") ?? "5";

  try {
    const url = new URL(CRM_API);
    if (from) url.searchParams.set("from", from);
    url.searchParams.set("days", days);

    const secret = process.env.CRM_WEBHOOK_SECRET;
    const res = await fetch(url.toString(), {
      cache: "no-store",
      headers: secret ? { "x-site-secret": secret } : {},
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json(
      { error: "Erro ao consultar agenda" },
      { status: 502 }
    );
  }
}
