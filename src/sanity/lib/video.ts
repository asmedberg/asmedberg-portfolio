import { getFileAsset, SanityFileSource } from "@sanity/asset-utils";

import { dataset, projectId } from "../env";

export const urlForFile = (asset: SanityFileSource) => {
  const fileUrl = getFileAsset(asset, { dataset, projectId }).url;
  return fileUrl;
};
