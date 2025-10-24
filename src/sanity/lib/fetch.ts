import { sanityFetch } from "@/sanity/lib/live";
import { INTRO_QUERY, PROJECTS_QUERY, RESUME_QUERY } from "@/sanity/lib/queries";
import { INTRO_QUERYResult, PROJECTS_QUERYResult, RESUME_QUERYResult } from "@/sanity/types/sanity.types";

export const fetchResume = async (): Promise<RESUME_QUERYResult> => {
  const { data } = await sanityFetch({ query: RESUME_QUERY });

  return data;
};

export const fetchIntro = async (): Promise<INTRO_QUERYResult> => {
  const { data } = await sanityFetch({ query: INTRO_QUERY });

  return data;
};

export const fetchProjects = async (): Promise<PROJECTS_QUERYResult> => {
  const { data } = await sanityFetch({ query: PROJECTS_QUERY });

  return data;
};
