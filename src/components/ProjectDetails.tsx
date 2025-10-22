import { PortableText } from "next-sanity";
import { BlockContent } from "@/sanity/types/sanity.types";

export default function ProjectDetails(props: BlockContent) {
  const { content } = props;
  return <div className="space-y-7 md:columns-2 md:gap-x-8">{content && <PortableText value={content} />}</div>;
}
