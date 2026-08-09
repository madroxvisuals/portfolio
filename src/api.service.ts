import { Resend } from "resend";
import { config } from "@dotenvx/dotenvx";
import { ContactFormState } from "@/types/app.types";

config();

export const resend = new Resend(process.env.RESEND_API_KEY);
export const mailFrom = process.env.MAIL_FROM as string;
export const mailTo = process.env.MAIL_TO as string;

export const sendEmail = async (payload: ContactFormState) => {
    await send({
        subject: `${payload.subject}`,
        html: `
        <h2>New Portfolio Request!!</h2>
        <p><strong>Name: </strong> ${payload.name}</p>
        <p><strong>Email: </strong> ${payload.email}</p>
        <p><strong>Message:</strong></p>
        <p>${payload.message}</p>
      `,
    });
}

export async function send(params: { subject: string; html: string }) {
    const { data, error } = await resend.emails.send({
        from: mailFrom,
        to: mailTo,
        subject: params.subject,
        html: params.html,
    });

    if (error) {
        console.error('Resend error:', error);
        throw new Error('Failed to send email');
    }

    return data;
}