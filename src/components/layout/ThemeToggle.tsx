"use client";

import { useEffect, useState } from "react";

function applyTheme(theme: "dark" | "light") {
  document.documentElement.classList.toggle("dark", theme === "dark");
  try { localStorage.setItem("theme", theme); } catch {}
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = dark ? "light" : "dark";
    applyTheme(next);
    setDark(next === "dark");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={dark}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative flex h-[22px] w-[44px] shrink-0 items-center rounded-full bg-white px-[3px] shadow-sm ring-1 ring-black/10 transition hover:scale-105 dark:ring-0 ${className}`}
    >
      {/* sliding knob */}
      <span
        className="absolute left-[3px] top-[3px] h-4 w-4 rounded-full bg-[#0b0e23] transition-transform duration-300 ease-out"
        style={{ transform: dark ? "translateX(0)" : "translateX(22px)" }}
      />
      {/* icon of the mode you can switch to */}
      {dark ? (
        <svg className="absolute right-[6px] h-[11px] w-[11px] text-[#0b0e23]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      ) : (
        <svg className="absolute left-[6px] h-[11px] w-[11px] text-[#0b0e23]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      )}
    </button>
  );
}
