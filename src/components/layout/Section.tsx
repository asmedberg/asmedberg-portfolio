export default function Section({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="flex flex-col max-w-7xl mx-auto min-h-dvh px-6 sm:px-8 lg:px-12 py-16">{children}</section>
  );
}
