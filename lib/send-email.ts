"use server";
import nodemailer from "nodemailer";
import { ContactSchema } from "./../schema/index";
import * as z from "zod";

export const sendEmail = async (values: z.infer<typeof ContactSchema>) => {
  const validateFields = ContactSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { firstname, lastname, email, service, message, phone } = values;
  const fullName = `${firstname} ${lastname ? lastname : ""}`.trim();

  // Konfigurasi Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_SERVER_USERNAME,
      pass: process.env.SMTP_SERVER_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_SERVER_USERNAME,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\nService: ${service}\nMessage:\n${message}\nPhone:\n${phone}`,
    });

    await transporter.sendMail({
      from: process.env.SMTP_SERVER_USERNAME,
      to: email,
      subject: "Thank You for Contacting Us!",
      text: `Hi ${fullName},  

      Thank you for getting in touch! We truly appreciate your message and will respond as soon as possible.  
      
      ✨ Here’s a copy of your message:  
      "${message}"  
      
      If you have any urgent inquiries, feel free to reach out again. We’re happy to assist you!  
      
      Looking forward to connecting with you.  
      
      Best regards,  
      Ahnaf`,
    });

    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error(error);
    return { error: "Failed to send email. Please try again later." };
  }
};
