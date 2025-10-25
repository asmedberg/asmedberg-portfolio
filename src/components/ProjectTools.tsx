export default function ProjectTools({ tools }: { tools: string[] }) {
  if (!tools) return null;

  return (
    <div className="flex flex-row flex-wrap gap-2">
      {tools?.map(item => (
        <span
          key={item}
          className="px-3 py-1 text-sm font-bold border border-(--blue) text-(--blue) dark:border-[#859ECF] dark:text-[#859ECF] rounded-full"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
