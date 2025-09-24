const ProjectImage = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex-2 rounded-lg border-2 border-slate-400 overflow-hidden">{children}</div>;
};

const ProjectContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex-1 flex flex-col gap-4">{children}</div>;
};

const ProjectTitle = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-3xl font-bold text-pretty">{children}</h1>;
};

const ProjectDescription = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-balance">{children}</p>;
};

const ProjectTools = ({ list }: { list: string[] }) => {
  return (
    <div className="flex flex-row flex-wrap gap-2">
      {list.map(item => (
        <span key={item} className="px-3 py-1 text-sm font-bold border border-slate-400 text-slate-400 rounded-full">
          {item}
        </span>
      ))}
    </div>
  );
};

const ProjectLinks = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-row flex-wrap gap-2">{children}</div>;
};

export default function Project({ children }: { children: React.ReactNode }) {
  return <div className="grow flex flex-col gap-8 md:flex-row md:items-center">{children}</div>;
}

Project.Image = ProjectImage;
Project.Content = ProjectContent;
Project.Title = ProjectTitle;
Project.Description = ProjectDescription;
Project.Tools = ProjectTools;
Project.Links = ProjectLinks;
