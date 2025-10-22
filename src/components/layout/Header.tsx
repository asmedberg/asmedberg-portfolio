import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { RESUME_QUERY } from "@/sanity/lib/queries";
import { RESUME_QUERYResult } from "@/sanity/types/sanity.types";
import { urlForFile } from "@/sanity/lib/video";
import ThemeToggler from "@/components/ThemeToggler";

const getResume = async () => {
  try {
    const resume = await client.fetch<RESUME_QUERYResult>(RESUME_QUERY);
    if (!resume?.asset) {
      throw new Error("Asset not returned");
    }
    return resume.asset;
  } catch (error) {
    console.error(`Something went wrong: ${error}`);
    return null;
  }
};

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

export default async function Header() {
  const resumeAsset = await getResume();
  const resumeUrl = resumeAsset ? urlForFile(resumeAsset) : "";

  return (
    <header className="absolute top-0 w-full p-4 flex flex-row flex-nowrap items-start justify-end gap-x-2">
      <StyledLink href="https://github.com/asmedberg">Github</StyledLink>
      <StyledLink href={resumeUrl}>Resume</StyledLink>
      <ThemeToggler />
    </header>
  );
}
