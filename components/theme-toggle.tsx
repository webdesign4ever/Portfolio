"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "@/components/icons";
export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => { const saved = localStorage.getItem("theme"); const next = saved ? saved === "dark" : matchMedia("(prefers-color-scheme: dark)").matches; document.documentElement.classList.toggle("dark", next); const frame = requestAnimationFrame(() => setDark(next)); return () => cancelAnimationFrame(frame); }, []);
  const toggle = () => { const next = !dark; setDark(next); localStorage.setItem("theme", next ? "dark" : "light"); document.documentElement.classList.toggle("dark", next); };
  return <button onClick={toggle} className="focus-ring grid size-9 place-items-center rounded-full border border-[var(--line)] text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]" aria-label={dark ? "Use light theme" : "Use dark theme"}>{dark ? <Sun className="size-4" /> : <Moon className="size-4" />}</button>;
}
