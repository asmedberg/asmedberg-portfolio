import Link from "next/link";
import ThemeToggler from "@/components/ThemeToggler";

const resume_path = process.env.NEXT_PUBLIC_RESUME_PATH;

const StyledLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={[
      "text-sm px-2 py-1 rounded-full border-2 border-dark text-dark hover:bg-dark hover:text-light",
      "dark:text-light dark:border-light dark:hover:bg-light dark:hover:text-dark"
    ].join(" ")}
  >
    {children}
  </Link>
);

export default function Header() {
  return (
    <header className="absolute top-0 w-full p-4 flex flex-row flex-nowrap items-start justify-end gap-x-2">
      <StyledLink href="https://github.com/asmedberg">Github</StyledLink>
      {resume_path && <StyledLink href={resume_path}>Resume</StyledLink>}
      <ThemeToggler />
    </header>
  );
}
