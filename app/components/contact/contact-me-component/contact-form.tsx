"use-client";

import { FormEvent, useState } from "react";
import Success from "../../success-component/success";
import axios from "axios";

export default function Contact() {
  type FormData = {
    email: string;
    fullName: string;
    subject: string;
    message: string;
  };
  const [formData, setFormData] = useState<FormData>({
    subject: "",
    fullName: "",
    email: "",
    message: "",
  });

  //   response state
  const [response, setResponse] = useState<string>("");
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);

  // handle change
  function formChangeHandler(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  }

  //Handle Submit
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    axios
      .post("/api/contact", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response);

          // Reset the form data
          setFormData({
            email: "",
            fullName: "",
            subject: "",
            message: "",
          });

          // Show success page
          setIsSubmitSuccessful(true);
        } else {
          // Handle other scenarios
          console.error(
            "Form submission failed:",
            response.data.message,
            response.data.success
          );
        }
      })
      .catch((error) => {
        // Handle Axios errors
        console.error("Axios error:", error);
      });
  }

  return isSubmitSuccessful ? (
    <Success />
  ) : (
    <div className={`w-screen h-auto grid grid-cols-1 md:grid-cols-2 p-10 `}>
      <div className={`flex flex-col justify-center items-center p-6`}>
        <h1
          className={`text-5xl mb-10 font-bold`}
          style={{
            background: "linear-gradient(to right, #7C96AB, #AB7C96)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Contact me
        </h1>
        <div className={``}>
          <div className="text-lg">
            <span className={``}>"</span> Hello 👋, I'm here to help you turn
            your idea into industry-leading designs. Just contact me!
          </div>
          <div className={`flex flex-row justify-end`}>
            <figure className={` h-44  w-48 rounded-full`}>
              <img
                className={`w-full h-full rounded-full`}
                src="../images/david.jpg"
              />
            </figure>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="rounded-lg shadow-2xl h-auto flex flex-col px-8 py-8"
      >
        <h1
          className="text-2xl font-bold"
          style={{
            background: "linear-gradient(to right, #7C96AB, #AB7C96)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Send a message
        </h1>

        <label htmlFor="fullname" className="text-gray-500 font-light mt-8 ">
          Full name<span className="text-red-500 ">*</span>
        </label>
        <input
          required
          type="text"
          onChange={formChangeHandler}
          value={formData.fullName}
          name="fullName"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-500 font-light"
        />

        <label htmlFor="email" className="text-gray-500 font-light mt-4 ">
          E-mail<span className="text-red-500">*</span>
        </label>
        <input
          required
          value={formData.email}
          name="email"
          onChange={formChangeHandler}
          type="email"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-500 font-light"
        />

        <label htmlFor="subject" className="text-gray-500 font-light mt-4">
          Subject<span className="text-red-500">*</span>
        </label>
        <input
          required
          type="text"
          value={formData.subject}
          name="subject"
          onChange={formChangeHandler}
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-500 font-light"
        />

        <label htmlFor="message" className="text-gray-500 font-light mt-4 ">
          Message<span className="text-red-500">*</span>
        </label>
        <textarea
          required
          value={formData.message}
          name="message"
          onChange={formChangeHandler}
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-500 font-light"
        ></textarea>
        <div className="flex flex-row items-center justify-start">
          <button className="px-10 mt-8 py-2 bg-gray-600 text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
            <span
              style={{
                background: "linear-gradient(to right, #7C96AB, #AB7C96)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Send
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-gray-700 ml-2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
