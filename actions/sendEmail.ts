"use server";

import {Resend} from "resend";
const resend = new Resend('re_bdaF8mWA_BeD6MWRPGVwFSkvhi5DDFsc8');

export const sendEmail = async (formData: FormData) => {

    const message = formData.get("message") as string;
    const senderEmail = formData.get("senderEmail") as string;

    if (!message || !senderEmail || typeof message !== "string" || message.length > 5000 || typeof senderEmail !== "string" ||
        senderEmail.length > 100 || !senderEmail.includes("@") ||
        !senderEmail.includes(".") || !message.trim() || !senderEmail.trim()){
        return {
            status: 400,
            body: "Invalid message"
        }
    }

    try {
        await resend.emails.send({
            from: 'Contact form <onboarding@resend.dev>',
            to: "srikarummineni123@gmail.com",
            reply_to: senderEmail,
            subject: "New Message from Portfolio",
            text: `Email: ${formData.get("senderEmail")}\nMessage: ${formData.get("message")}`
        });
    } catch (err: any) {
        if (err instanceof Error) {
        return {
            error: err.message,
        } } else if (err && typeof err === 'object' && err.message) {
            return {
                error: String(err.message)
            }
        } else {
            return {
                error: "Unknown error"
            }
        }
    }




}