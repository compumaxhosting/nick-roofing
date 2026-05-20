"use client";

import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { FaSyncAlt } from "react-icons/fa";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  appointmentDate?: string;
  service: string;
  message: string;
};

type ContactFormProps = {
  showAppointmentDate?: boolean;
};

export default function ContactForm({ showAppointmentDate = false }: ContactFormProps) {
  const { register, handleSubmit, reset } = useForm<ContactFormData>();
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [error, setError] = useState("");

  // ✅ Generate CAPTCHA only on the client (prevents hydration mismatch)
  useEffect(() => {
    refreshCaptcha();
  }, []);

  function generateCaptcha() {
    return Math.floor(1000 + Math.random() * 9000).toString(); // 4-digit
  }

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
    setError("");
  };

  const onSubmit = async (data: ContactFormData) => {
    if (captchaInput !== captcha) {
      setError("Incorrect CAPTCHA. Please try again.");
      return;
    }

    setError("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Message sent successfully!");
      reset();
      refreshCaptcha();
    } else {
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 lg:ml-12">
      <input
        {...register("name")}
        placeholder="Name"
        className="w-full border py-3 px-5"
      />
      <input
        {...register("email")}
        placeholder="Email"
        type="email"
        className="w-full border py-3 px-5"
      />
      <input
        {...register("phone")}
        placeholder="Phone"
        className="w-full border py-3 px-5"
      />
      {showAppointmentDate && (
        <input
          {...register("appointmentDate")}
          type="date"
          className="w-full border py-3 px-5"
        />
      )}
      <select
        {...register("service")}
        className="w-full border py-3 px-5 bg-white"
      >
        <option value="">Select a Service</option>
        <option value="skylights">Skylights</option>
        <option value="waterproofing">Waterproofing</option>
        <option value="gutter-installation">Gutter Installation</option>
        <option value="roof-repair">Roof Repair</option>
        <option value="siding">Siding</option>
      </select>
      <textarea
        {...register("message")}
        placeholder="Message"
        rows={4}
        className="w-full border py-3 px-5"
      ></textarea>

      {/* CAPTCHA Section */}
      <div className="flex items-center gap-4">
        <div className="bg-gray-100 border px-4 py-3 text-lg font-bold select-none">
          {captcha || "----"}
        </div>
        <button
          type="button"
          onClick={refreshCaptcha}
          aria-label="Refresh CAPTCHA"
          className="text-gray-600 hover:text-black"
        >
          <FaSyncAlt />
        </button>
      </div>

      <input
        type="text"
        placeholder="Enter CAPTCHA"
        value={captchaInput}
        onChange={(e) => setCaptchaInput(e.target.value)}
        className="w-full border py-3 px-5"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        className="bg-[#36454F] text-white py-3 px-8 hover:bg-[#2c3e50]"
      >
        Send Message
      </button>
    </form>
  );
}
