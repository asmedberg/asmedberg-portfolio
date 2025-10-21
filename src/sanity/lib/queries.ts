import { defineQuery } from "next-sanity";

export const INTRO_QUERY = defineQuery(`*[_type == "settings"][0].intro`);
