import Link from "next/link";
import ThemeToggler from "@/components/ThemeToggler";

export default function Header() {
  return (
    <header className="absolute top-0 w-full p-4 flex flex-row flex-nowrap items-start justify-end gap-x-2">
      <Link
        href="https://github.com/asmedberg"
        target="_blank"
        rel="noopener noreferrer"
        className={[
          "text-sm px-2 py-1 rounded-full border-2 border-dark text-dark hover:bg-dark hover:text-light",
          "dark:text-light dark:border-light dark:hover:bg-light dark:hover:text-dark"
        ].join(" ")}
      >
        Github
      </Link>
      <ThemeToggler />
    </header>
  );
}
