"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Work", href: "/work", icon: "folder_special" },
  { label: "Skills", href: "/skills", icon: "school" },
  { label: "Contact", href: "/contact", icon: "mail" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [showSettings, setShowSettings] = useState(false);
  const [accentColor, setAccentColor] = useState("indigo"); // indigo, violet, emerald

  const getAccentClass = (color: string) => {
    switch (color) {
      case "violet":
        return "text-[#7c3aed]";
      case "emerald":
        return "text-[#10b981]";
      default:
        return "text-primary";
    }
  };

  return (
    <>
      {/* Top App Bar (Desktop & Mobile header) */}
      <header className="w-full top-0 sticky z-50 bg-background flex items-center justify-between px-6 py-4 shadow-[6px_6px_12px_rgba(0,0,0,0.08),-6px_-6px_12px_rgba(255,255,255,0.6)]">
        <Link href="/" className="flex items-center gap-3 p-2 rounded-xl neomorph-raised text-primary transition-all duration-200 active:shadow-neomorph-inset active:scale-98">
          <span className="material-symbols-outlined select-none" style={{ fontVariationSettings: "'FILL' 0" }}>
            account_circle
          </span>
          <span className="text-lg font-semibold tracking-tight text-on-surface">Abhishek</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 neomorph-inset px-6 py-2 rounded-full">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#e8eaf0] text-primary shadow-neomorph-raised"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setShowSettings(!showSettings)}
          className="p-2 rounded-xl neomorph-raised text-on-surface-variant hover:text-primary active:shadow-neomorph-inset transition-all duration-200 cursor-pointer"
        >
          <span className="material-symbols-outlined select-none">settings</span>
        </button>
      </header>

      {/* Settings Modal (Theme presets selector) */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 backdrop-blur-xs">
          <div className="w-80 neomorph-raised bg-background p-6 rounded-2xl space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowSettings(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg neomorph-raised text-on-surface-variant hover:text-primary active:shadow-neomorph-inset transition-all"
            >
              <span className="material-symbols-outlined text-sm select-none">close</span>
            </button>
            <h3 className="text-lg font-bold text-on-surface">Theme Settings</h3>
            <div className="space-y-3">
              <p className="text-sm font-medium text-on-surface-variant">Accent Color</p>
              <div className="flex gap-4 justify-around">
                <button
                  onClick={() => {
                    document.documentElement.style.setProperty("--color-primary", "#6366f1");
                    setAccentColor("indigo");
                  }}
                  className={`w-10 h-10 rounded-full bg-[#6366f1] neomorph-raised flex items-center justify-center transition-all ${
                    accentColor === "indigo" ? "ring-2 ring-indigo-400 ring-offset-2 scale-105" : ""
                  }`}
                  aria-label="Indigo theme"
                />
                <button
                  onClick={() => {
                    document.documentElement.style.setProperty("--color-primary", "#7c3aed");
                    setAccentColor("violet");
                  }}
                  className={`w-10 h-10 rounded-full bg-[#7c3aed] neomorph-raised flex items-center justify-center transition-all ${
                    accentColor === "violet" ? "ring-2 ring-violet-400 ring-offset-2 scale-105" : ""
                  }`}
                  aria-label="Violet theme"
                />
                <button
                  onClick={() => {
                    document.documentElement.style.setProperty("--color-primary", "#10b981");
                    setAccentColor("emerald");
                  }}
                  className={`w-10 h-10 rounded-full bg-[#10b981] neomorph-raised flex items-center justify-center transition-all ${
                    accentColor === "emerald" ? "ring-2 ring-emerald-400 ring-offset-2 scale-105" : ""
                  }`}
                  aria-label="Emerald theme"
                />
              </div>
            </div>
            <div className="pt-2 border-t border-outline-variant/30 text-center">
              <button
                onClick={() => setShowSettings(false)}
                className="w-full py-2.5 rounded-xl neomorph-raised neomorph-btn font-semibold text-primary"
              >
                Close Settings
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom NavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 bg-background z-50 rounded-t-xl shadow-[0_-6px_12px_rgba(0,0,0,0.05),0_-6px_12px_rgba(255,255,255,0.4)]">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center p-2 w-16 transition-all duration-150 active:scale-95 ${
                isActive
                  ? "text-primary neomorph-inset rounded-xl"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              <span
                className="material-symbols-outlined select-none"
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                {item.icon}
              </span>
              <span className="font-body text-[10px] font-semibold mt-0.5">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
