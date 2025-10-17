import Image from "next/image";

interface PortfolioItemProps {
  title: string;
  description: string;
  images: { src: string; alt: string; width: number; height: number }[];
  technologies: string[];
  link?: string;
}

export default function PortfolioItem({ title, description, images, technologies, link }: PortfolioItemProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-pretty">{description}</p>
      </div>
      <div className="flex flex-col gap-4">
        {images.map(image => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="w-full h-auto rounded-lg shadow-md"
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {technologies.map(tech => (
          <span key={tech} className="bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">
            {tech}
          </span>
        ))}
      </div>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          Visit Project
        </a>
      )}
    </div>
  );
}
