"use client";

import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm<ContactFormData>();
  const [token, setToken] = useState<string | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    if (!token) {
      alert("Please verify reCAPTCHA");
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, token }),
    });

    if (res.ok) {
      alert("Message sent successfully!");
      reset();
    } else {
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 lg:ml-12">
      <input {...register("name")} placeholder="Name" className="w-full border py-3 px-5" />
      <input {...register("email")} placeholder="Email" type="email" className="w-full border py-3 px-5" />
      <input {...register("phone")} placeholder="Phone" className="w-full border py-3 px-5" />
      <select {...register("service")} className="w-full border py-3 px-5 bg-white">
        <option value="">Select a Service</option>
        <option value="skylights">Skylights</option>
        <option value="waterproofing">Waterproofing</option>
        <option value="gutter-installation">Gutter Installation</option>
        <option value="roof-repair">Roof Repair</option>
        <option value="siding">Siding</option>
      </select>
      <textarea {...register("message")} placeholder="Message" rows={4} className="w-full border py-3 px-5"></textarea>

      {/* 🔹 reCAPTCHA */}
      <ReCAPTCHA sitekey="6LcxprQrAAAAAEQiy-F4mrkEkA9nIF1dY7VurfAe" onChange={setToken} />

      <button type="submit" className="bg-[#36454F] text-white py-3 px-8 hover:bg-[#2c3e50]">
        Send Message
      </button>
    </form>
  );
}
