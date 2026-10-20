"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

function currentTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  // Sync with the theme applied by the inline script in layout.tsx
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync with the DOM theme set before paint
    setTheme(currentTheme());
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("openroad-theme", next); } catch { /* private mode */ }
  }

  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light (white) theme" : "Switch to dark theme"}
      aria-pressed={!isDark}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-full border border-primary/15 text-primary transition hover:rotate-12 hover:border-accent hover:text-accent"
    >
      {isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  );
}
