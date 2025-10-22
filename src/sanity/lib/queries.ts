import { defineQuery } from "next-sanity";

// Query for intro content
export const INTRO_QUERY = defineQuery(`*[_type == "settings"][0].intro`);

// Query for projects, order set in settings singleton document
export const PROJECTS_QUERY = defineQuery(`*[_type == "settings"][0].projectOrder[]->{
  ...,
  assets[]{
    ...,
    _type == "projectImage" =>{
      asset->{
        _id,
        url,
        metadata{
          dimensions{
            aspectRatio,
            height,
            width
          },
          lqip
        }
      }
    }
  }
}`);
