"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { sendEmail } from "../api/sendEmail/sendEmail";

export default function Home() {
  const router = useRouter();
  const [inputs, setInputs] = useState({});
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    if (e.target.name === "phone") {
      const numericValue = e.target.value.replace(/[^0-9]/g, "");
      setValue(numericValue);
    }

    const { name, value } = e.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <h4 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          GET IN TOUCH
        </h4>

        <form
          action={async (formData) => {
            await sendEmail(formData);
          }}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              name="firstname"
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              required
            />

            <input
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              name="lastname"
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              required
            />

            <input
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />

            <input
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              name="phone"
              type="text"
              placeholder="Phone Number"
              value={value}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            name="message"
            placeholder="Message"
            rows={5}
            required
            onChange={handleChange}
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#1f953d] text-white font-semibold py-3 px-6 rounded-md hover:bg-green-700 transition duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
