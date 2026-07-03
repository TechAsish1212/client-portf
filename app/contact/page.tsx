"use client";

import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert("Please fill out all fields.");
      return;
    }

    setStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  const handleReset = () => {
    setFormState({ name: "", email: "", message: "" });
    setStatus("idle");
  };

  return (
    <main className="flex-grow flex items-center justify-center px-6 py-12 pb-32">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side: Visual & Socials */}
        <div className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="w-full aspect-square md:aspect-video rounded-xl neomorph-raised overflow-hidden relative group min-h-[220px]">
            <Image
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Creative workspace"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-I903FUIODLPEoGm76wOQ39KRSG21U7idICq8QnIPA9E9wewDfglKoaOTCWw_eNEvPf1-yvlQjeLvIqXe5bHWOMx0HnRTpzzcYQm1zhny8j8d7XnYOH24eQLaiU1KrSElxkKRQMYFa3XBtqFKi7HHCBsbevTzH6bjEFGaUIOoaFybwK_9AoY7VH7F1qoXMbi4j8VcqsiBrnpWFxD46f6jLqVABTV0XoBRzRpE5j_-gulehBKHL8bbzjomqFjHsHIcDwrUf7M1e5Y"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-on-surface">
              Let's build something <span className="text-primary">extraordinary</span> together.
            </h1>
            <p className="text-on-surface-variant max-w-md leading-relaxed text-lg font-medium">
              I'm currently available for freelance work and full-time positions. Reach out if you want to collaborate on your next big idea.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              className="w-14 h-14 flex items-center justify-center rounded-xl bg-surface neomorph-raised text-on-surface hover:text-primary active:shadow-neomorph-inset transition-all duration-200"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
            <a
              className="w-14 h-14 flex items-center justify-center rounded-xl bg-surface neomorph-raised text-on-surface hover:text-primary active:shadow-neomorph-inset transition-all duration-200"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
            <a
              className="w-14 h-14 flex items-center justify-center rounded-xl bg-surface neomorph-raised text-on-surface hover:text-primary active:shadow-neomorph-inset transition-all duration-200"
              href="mailto:alex@example.com"
              aria-label="Email Address"
            >
              <span className="material-symbols-outlined select-none text-2xl">mail</span>
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full bg-surface p-8 rounded-xl neomorph-raised">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center space-y-4 py-8 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full flex items-center justify-center neomorph-inset text-primary">
                <span className="material-symbols-outlined text-3xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-on-surface">Message Sent!</h3>
                <p className="text-on-surface-variant font-medium">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2 text-sm font-semibold text-primary hover:underline transition-colors cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-on-surface-variant px-1" htmlFor="name">
                  Full Name
                </label>
                <input
                  className="w-full bg-surface border-none rounded-xl p-4 text-on-surface placeholder:text-outline neomorph-inset focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all font-medium"
                  id="name"
                  placeholder="John Doe"
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  disabled={status === "sending"}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-on-surface-variant px-1" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="w-full bg-surface border-none rounded-xl p-4 text-on-surface placeholder:text-outline neomorph-inset focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all font-medium"
                  id="email"
                  placeholder="john@example.com"
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  disabled={status === "sending"}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-on-surface-variant px-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full bg-surface border-none rounded-xl p-4 text-on-surface placeholder:text-outline neomorph-inset focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all resize-none custom-scrollbar font-medium"
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  disabled={status === "sending"}
                  required
                />
              </div>
              <button
                className={`w-full py-4 bg-surface text-primary font-bold rounded-xl neomorph-raised flex items-center justify-center gap-2 group transition-all duration-200 cursor-pointer ${
                  status === "sending" ? "opacity-50 pointer-events-none" : "active:shadow-neomorph-inset active:scale-98"
                }`}
                type="submit"
                disabled={status === "sending"}
              >
                <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
                {status !== "sending" && (
                  <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1 select-none">
                    send
                  </span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
