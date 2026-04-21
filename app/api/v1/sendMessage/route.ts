import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';
import { ConfirmTemplate, ForwardTemplate } from "@/components/template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
  const { email, name, message } = await req.json();

  if (!email || !name || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (email.length > 255 || name.length > 255 || message.length > 1000) {
    return NextResponse.json({ error: "Input exceeds maximum length" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: `${name} <contact@aungs.dev>`,
      to: ["contact@aungs.dev"],
      subject: "New portfolio contact",
      react: ForwardTemplate({email, name, message}),
    });
    await resend.emails.send({
      from: "AungS8430 <contact@aungs.dev>",
      to: [email],
      subject: "Message recieved",
      react: ConfirmTemplate({email, name, message}),
    })
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 400 });
  }
}