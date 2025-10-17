"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/20/solid";

interface ThemeButtonProps {
  active: boolean;
  clickHandler: () => void;
  children: React.ReactNode;
}

const ThemeButton = ({ active, clickHandler, children }: ThemeButtonProps) => {
  return (
    <button
      type="button"
      onClick={() => clickHandler()}
      className={`${
        active ? "hidden" : "block"
      } p-2 aspect-square rounded-full bg-dark dark:bg-light text-light dark:text-dark cursor-pointer disabled:cursor-default`}
      disabled={active}
      aria-selected={active}
      role="option"
    >
      {children}
    </button>
  );
};

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleModeClick = (mode: string) => {
    setOpen(false);
    setTheme(mode);
  };

  useEffect(() => {
    const handleOpen = () => {
      if (open) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleOpen);
    return () => document.removeEventListener("click", handleOpen);
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="rounded-full bg-dark dark:bg-light">
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className="block p-2 rounded-full capitalize cursor-pointer"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls="themeList"
        role="combobox"
      >
        {theme === "dark" ? (
          <MoonIcon className="w-4 h-4 text-light dark:text-dark" />
        ) : theme === "light" ? (
          <SunIcon className="w-4 h-4 text-light dark:text-dark" />
        ) : (
          <ComputerDesktopIcon className="w-4 h-4 text-light dark:text-dark" />
        )}
      </button>
      <div
        className={`${!open ? "hidden" : "block"}`}
        aria-hidden={!open}
        aria-labelledby="themeList"
        tabIndex={-1}
        role="listbox"
      >
        <ThemeButton active={theme === "dark"} clickHandler={() => handleModeClick("dark")}>
          <MoonIcon className="w-4 h-4" />
          <span className="sr-only">Dark</span>
        </ThemeButton>
        <ThemeButton active={theme === "light"} clickHandler={() => handleModeClick("light")}>
          <SunIcon className="w-4 h-4" />
          <span className="sr-only">Light</span>
        </ThemeButton>
        <ThemeButton active={theme === "system"} clickHandler={() => handleModeClick("system")}>
          <ComputerDesktopIcon className="w-4 h-4" />
          <span className="sr-only">System</span>
        </ThemeButton>
      </div>
    </div>
  );
}
