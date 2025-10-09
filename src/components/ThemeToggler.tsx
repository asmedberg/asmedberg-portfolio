"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute top-12 right-12 z-10 flex flex-col gap-2">
      <button onClick={() => setTheme("dark")} className="cursor-pointer" disabled={theme === "dark"}>
        Dark
      </button>
      <button onClick={() => setTheme("light")} className="cursor-pointer" disabled={theme === "light"}>
        Light
      </button>
      <button onClick={() => setTheme("system")} className="cursor-pointer" disabled={theme === "system"}>
        System
      </button>
    </div>
  );
}
