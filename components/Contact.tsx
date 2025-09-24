"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { User, Mail, FileText, MessageSquare } from "lucide-react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string>("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const formData = new FormData(form.current);
    const data = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      // ✅ 1) Send with EmailJS
      await emailjs.sendForm(
        "service_7ktdu9o",
        "template_0zmp6z6",
        form.current,
        "wvzMkg8e394uRH1nR"
      );

      // ✅ 2) Save to Google Sheets
      await fetch(
        "https://script.google.com/macros/s/AKfycbyYeYLegSZRK5RHuFwaqme1PDKCeQjf0mHwSTkVr6vFR8D36klkrYPE2YsKcIayKEvPRw/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        }
      );

      setMessage("✅ Message sent & saved to Google Sheets!");
      form.current.reset();
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to send. Try again.");
    }
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-blue-500 font-semibold uppercase tracking-wide mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Let’s make your <span className="text-red-500">Brand</span>{" "}
            brilliant
          </h1>
          <p className="text-gray-300 text-[16px] leading-relaxed">
            Have an idea or project in mind? Let’s collaborate and bring it to
            life. Fill in the form and we’ll get back to you as soon as
            possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700">
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Your Name"
                  name="user_name"
                  className="w-full pl-10 pr-3 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  name="user_email"
                  className="w-full pl-10 pr-3 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div className="relative">
              <FileText
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                className="w-full pl-10 pr-3 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Message */}
            <div className="relative">
              <MessageSquare
                className="absolute left-3 top-4 text-gray-400"
                size={18}
              />
              <textarea
                placeholder="Message"
                name="message"
                rows={5}
                className="w-full pl-10 pr-3 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-md"
            >
              Send Message
            </button>
          </form>

          {/* Status message */}
          {message && (
            <p
              className={`mt-4 text-center font-medium ${
                message.startsWith("✅") ? "text-green-400" : "text-red-400"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
