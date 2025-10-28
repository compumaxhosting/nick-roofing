"use client";

import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export const ContactUs = () => {
  // ---------------- FORM STATES ----------------
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    captchaInput: "",
  });
  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // ---------------- CAPTCHA ----------------
  const generateCaptcha = () => {
    const randomNum = Math.floor(10000 + Math.random() * 90000).toString();
    setCaptcha(randomNum);
    setUserCaptcha("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  // ---------------- HANDLERS ----------------
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (userCaptcha !== captcha) {
      setError("Incorrect CAPTCHA. Please try again.");
      generateCaptcha();
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
          captchaInput: "",
        });
        generateCaptcha();
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // ---------------- JSX ----------------
  return (
    <section className="py-16 px-0 md:px-0 lg:px-0">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h1 className="text-xl md:text-l font-semibold tracking-[1px] mb-5 text-[#364f4f]">
          CONTACT US
        </h1>
        <span className="block mx-auto w-10 h-0.5 bg-[#36454F] mb-7"></span>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-6 px-4 py-8 max-w-7xl mx-auto ">
        {/* LEFT: Contact Info (desktop) */}
        <div className="hidden lg:flex flex-col items-start w-64 flex-shrink-0">
          <div className="flex flex-col pb-6">
            <h2 className="text-sm font-semibold text-[#364f4f] mb-4">
              Contact Us
            </h2>
            <span className="block w-10 h-0.5 bg-[#36454F] mb-2"></span>
          </div>
          <p className="mb-8 text-sm">
            Got a roofing project? We&apos;re here to help! Whether you need
            residential, commercial, or industrial roofing services in New
            Jersey, our team is ready to assist you.
          </p>

          <div style={{ fontFamily: "'Oswald', sans-serif" }}>
            <div className="mb-4 text-[#666666]">
              <span className="font-semibold text-black">Tel: </span>
              <Link
                href="tel:19732070689"
                target="_blank"
                className="hover:underline"
              >
                (973) - 207 - 0689
              </Link>
            </div>
            <div className="mb-4 text-[#666666]">
              <span className="font-semibold text-black">Email: </span>
              <Link
                href="mailto:nickcontractorllc@gmail.com"
                target="_blank"
                className="hover:underline"
              >
                nickcontractorllc@gmail.com
              </Link>
            </div>
            <div className="mb-4 text-[#666666]">
              <span className="font-semibold text-black">Location: </span>
              <Link
                href="https://www.google.com/maps?q=525+Lafayette+Ave,+Hawthorne,+NJ+07506"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                525 Lafayette Ave, Hawthorne, NJ 07506
              </Link>
            </div>
            <div>
              <span className="font-semibold">Business Hours: </span>
              <div className="ml-2">
                <p>Mon - Sat: 7:30 AM – 8:00 PM</p>
                <p>Sunday: 10:00 AM – 3:00 PM</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-4 pb-4 text-black">
            <Link
              href="#"
              aria-label="Instagram"
              target="_blank"
              className="hover:text-[#36454f] transition-colors duration-300 border-2 border-black rounded-md p-2 flex items-center justify-center"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="#"
              aria-label="X (Twitter)"
              target="_blank"
              className="hover:text-[#36454f] transition-colors duration-300 border-2 border-black rounded-md p-2 flex items-center justify-center"
            >
              {/* X SVG */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 1200 1227"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M1199.61 0H944.726L599.805 464.344L255.274 0H0L462.982 631.246L0 1227H254.895L599.805 762.656L944.726 1227H1199.61L736.627 601.754L1199.61 0Z"
                />
              </svg>
            </Link>
            <Link
              href="https://www.facebook.com/NickroofingNJ"
              aria-label="Facebook"
              target="_blank"
              className="hover:text-[#36454f] transition-colors duration-300 border-2 border-black rounded-md p-2 flex items-center justify-center"
            >
              <FaFacebookF size={20} />
            </Link>
          </div>
        </div>

        {/* MIDDLE: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-white shadow-lg rounded-lg p-6 border border-gray-200"
        >
          <h2 className="text-lg font-semibold mb-4 text-[#364f4f]">
            Send Us a Message
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#364f4f]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#364f4f]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#364f4f]"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="border border-gray-300 rounded-md p-2 mt-4 w-full focus:outline-none focus:border-[#364f4f]"
          ></textarea>

          {/* CAPTCHA */}
          <div className="mt-4 flex items-center gap-3">
            <div
              className="select-none bg-gray-100 border border-gray-400 rounded-md px-3 py-2 font-mono tracking-widest text-lg"
              style={{
                letterSpacing: "4px",
                userSelect: "none",
                cursor: "default",
              }}
            >
              {captcha}
            </div>
            <button
              type="button"
              onClick={generateCaptcha}
              className="text-sm text-blue-600 underline hover:text-blue-800"
            >
              Refresh
            </button>
          </div>

          <input
            type="text"
            name="captchaInput"
            placeholder="Enter the number above"
            value={userCaptcha}
            onChange={(e) => setUserCaptcha(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 mt-3 w-full focus:outline-none focus:border-[#364f4f]"
          />

          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
          {success && (
            <p className="text-green-600 text-sm mt-2">
              Message sent successfully!
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`mt-4 w-full py-2 rounded-md font-semibold text-white transition-all ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#364f4f] hover:bg-[#253737]"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* RIGHT: Google Map */}
        <div className="overflow-hidden flex-shrink-0 w-full lg:w-80 h-64 lg:h-auto lg:min-h-[500px]">
          <iframe
            title="Nick Roofing Contractor Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.4189642748006!2d-74.1640458240497!3d40.94959467135309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fae2e8c6b6e9%3A0x6e0e2b8949dcd51d!2s525%20Lafayette%20Ave%2C%20Hawthorne%2C%20NJ%2007506%2C%20USA!5e0!3m2!1sen!2sus!4v1718038450000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
