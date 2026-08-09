import { tryCatch } from "@/utils";
import { sendEmail } from "@/api.service";
import { ContactFormState } from "@/types/app.types";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ message: "Hello World !!" })
}

export async function POST(request: NextRequest) {
    const [body, parseError] = await tryCatch<ContactFormState>(
        () => request.json()
    );

    if (parseError) {
        console.error("Parsing error", parseError);
        return NextResponse.json(
            { error: "Invalid request body" },
            { status: 400 }
        );
    }

    if (!body || !body.name || !body.email || !body.subject || !body.message) {
        return NextResponse.json(
            { error: "Missing required fields: name, email, subject, message" },
            { status: 400 }
        );
    }

    const [, sendError] = await tryCatch(
        () => sendEmail(body),
        (err) => console.error("Email send failed:", err)
    );

    if (sendError) {
        console.error("Failed to send email:", sendError);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }

    return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
    );
}