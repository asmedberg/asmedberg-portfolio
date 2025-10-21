import { CogIcon } from "@sanity/icons";
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = S =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .id("settings")
        .icon(CogIcon)
        .child(S.document().schemaType("settings").documentId("siteSettings")),
      S.divider(),
      ...S.documentTypeListItems().filter(listItem => {
        return !["settings"].includes(listItem.getId() as string);
      })
    ]);
