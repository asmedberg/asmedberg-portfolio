import { type SchemaTypeDefinition } from "sanity";
import projects from "./documents/projects";
import blockContent from "./objects/blockContent";
import projectImage from "./objects/image";
import projectVideo from "./objects/video";
import link from "./objects/link";
import settings from "./singletons/settings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // singletons
    settings,
    // documents
    projects,
    // objects
    blockContent,
    projectImage,
    projectVideo,
    link
  ]
};
