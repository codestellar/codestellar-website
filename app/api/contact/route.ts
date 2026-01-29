import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    // Structured Email Template
    const mailOptions = {
      from: `"Portfolio Terminal" <${process.env.EMAIL_USER}>`,
      to: "gaurav.madaan@niwi.ai",
      replyTo: email,
      subject: `New Inquiry Via Portfolio: ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            .wrapper { background-color: #f4f4f5; padding: 30px 15px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #e4e4e7; }
            .header { background: #18181b; padding: 30px; text-align: left; }
            .header h1 { color: #ffffff; margin: 0; font-size: 18px; letter-spacing: 2px; text-transform: uppercase; font-weight: 900; }
            .status-badge { display: inline-block; padding: 4px 12px; background: #10b981; color: white; border-radius: 20px; font-size: 10px; font-weight: bold; margin-top: 10px; }
            .body { padding: 20px; color: #3f3f46; }
            .label { font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: #a1a1aa; font-weight: 700; margin-bottom: 8px; }
            .value { font-size: 16px; color: #18181b; font-weight: 500; margin-bottom: 24px; }
            .message-box { background: #fafafa; border: 1px solid #f4f4f5; padding: 16px; border-radius: 12px; color: #27272a; line-height: 1.6; font-style: italic; }
            .footer { padding: 20px 30px; background: #fafafa; border-top: 1px solid #f4f4f5; text-align: center; }
            .button { display: inline-block; padding: 12px 24px; background: #18181b; color: #ffffff !important; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="container">
              <div class="header">
                <h1>New Conversation.</h1>
                <div class="status-badge">PRIORITY: HIGH</div>
              </div>
              <div class="body">
                <div class="label">Sender Identity</div>
                <div class="value">${name}</div>

                <div class="label">Response Channel</div>
                <div class="value">
                  <a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a>
                </div>

                <div class="label">Inquiry Details</div>
                <div class="message-box">
                  "${message.replace(/\n/g, '<br>')}"
                </div>

                <div style="margin-top: 32px; text-align: center;">
                  <a href="mailto:${email}" class="button">Reply to ${name}</a>
                </div>
              </div>
              <div class="footer">
                <p style="font-size: 10px; color: #d4d4d8; margin: 0;">
                  SYSTEM LOG: ${new Date().toUTCString()} | NODE: GAURAV PORTFOLIO
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Fail" }, { status: 500 });
  }
}