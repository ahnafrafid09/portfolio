"use server";
import { Resend } from "resend";
import { ContactSchema } from "../schema/index";
import * as z from "zod";
import EmailTemplate from "@/components/EmailTemplate";

// Inisialisasi Resend API
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (values: z.infer<typeof ContactSchema>) => {
  const validateFields = ContactSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { firstname, lastname, email, service, message, phone } = values;
  const fullname = `${firstname} ${lastname ? lastname : ""}`.trim();

  try {
    await resend.emails.send({
      from: "Ahnaf Rafid <noreply@ahnafrafid.my.id>",
      to: [`${process.env.ADMIN_EMAIL}`],
      subject: `New Contact Form Submission from ${fullname}`,
      text: `Name: ${fullname}\nEmail: ${email}\nService: ${service}\nMessage:\n${message}\nPhone:\n${phone}`,
    });

    await resend.emails.send({
      from: "Ahnaf Rafid <noreply@ahnafrafid.my.id>",
      to: [email],
      subject: "Thank You for Contacting Us!",
      react: EmailTemplate({
        fullname,
        email,
        service,
        message,
        phone,
      }),
    });

    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error(error);
    return { error: "Failed to send email. Please try again later." };
  }
};
