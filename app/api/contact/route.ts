import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, subject, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.TEAMS_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("TEAMS_WEBHOOK_URL is not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Power Automate expects an Adaptive Card at the root level
    // for the "Post card in a chat or channel" action
    const payload = {
      type: "AdaptiveCard",
      $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
      version: "1.4",
      body: [
        {
          type: "TextBlock",
          size: "Large",
          weight: "Bolder",
          text: "New Contact Form Submission",
          wrap: true,
          style: "heading",
        },
        {
          type: "FactSet",
          facts: [
            { title: "Name", value: `${firstName} ${lastName}` },
            { title: "Email", value: email },
            { title: "Subject", value: subject },
            { title: "Submitted", value: new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" }) },
          ],
        },
        {
          type: "TextBlock",
          text: "Message:",
          weight: "Bolder",
          spacing: "Medium",
          wrap: true,
        },
        {
          type: "TextBlock",
          text: message,
          wrap: true,
        },
      ],
      actions: [
        {
          type: "Action.OpenUrl",
          title: "Reply via Email",
          url: `mailto:${email}?subject=Re: ${encodeURIComponent(subject)}`,
        },
      ],
    };

    const teamsResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!teamsResponse.ok) {
      console.error(
        "Teams webhook failed:",
        teamsResponse.status,
        await teamsResponse.text()
      );
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
