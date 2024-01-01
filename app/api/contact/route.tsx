import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { renderToString } from "react-dom/server";

import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Access environment variables
const { EMAIL_USER, EMAIL_PASS } = process.env;

//handle form POST request to
export async function POST(request: Request) {
  if (request.method === "POST") {
    try {
      const data = await request.json();

      // Assuming 'data' contains fields like 'name', 'email', 'message', etc.
      const { subject, name, email, message } = data;

      // Create a Nodemailer transporter
      const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASS,
        },
        secure: true,
      });

      type MailData = {
        from: string;
        to: string;
        subject: string;
        text: string;
        html: string;
      };

      const mailData: MailData = {
        from: email,
        to: `${name}\n ${EMAIL_USER}`,
        subject: subject,
        text: message,
        html: `<div>${message}</div> Sent from: <p>${email}</p>`,
      };
      await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
          if (error) {
            console.log(error);
            reject(error);
          } else {
            console.log("Server is ready to take our messages");
            resolve(success);
          }
        });
      });

      await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailData, (err, info) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            console.log(info);
            resolve(info);
          }
        });
      });

      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error handling form submission:", error);

      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  }

  // Return a 405 Method Not Allowed response for non-POST requests
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}
