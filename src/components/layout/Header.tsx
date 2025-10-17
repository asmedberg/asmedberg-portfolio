import ThemeToggler from "@/components/ThemeToggler";

export default function Header() {
  return (
    <header className="absolute top-0 w-full p-4 flex flex-row flex-nowrap items-center justify-end">
      <ThemeToggler />
    </header>
  );
}
