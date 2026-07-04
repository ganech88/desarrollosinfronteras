import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json({ error: "Faltan campos" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Servicio no configurado" },
        { status: 503 }
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:
          process.env.CONTACT_FROM ?? "DSF Web <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO ?? "tolma1031@gmail.com"],
        reply_to: email.trim(),
        subject: `Nueva consulta de ${name.trim()} — desarrollosinfronteras.com`,
        text: `Nombre: ${name.trim()}\nEmail: ${email.trim()}\n\nMensaje:\n${message.trim()}`,
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "No se pudo enviar" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Error inesperado" }, { status: 500 });
  }
}
