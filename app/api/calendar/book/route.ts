import { NextRequest, NextResponse } from "next/server";

const CRM_API = "https://crm.dmtn.com.br/api/calendar/book";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const res = await fetch(CRM_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json(
      { error: "Erro ao agendar" },
      { status: 502 }
    );
  }
}
