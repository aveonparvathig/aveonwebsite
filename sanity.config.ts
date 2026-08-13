import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";

export const sanityProjectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";

export default defineConfig({
  name: "aveon",
  title: "Aveon Infotech CMS",
  basePath: "/studio",
  // Placeholder keeps the config valid before a real project is provisioned;
  // the /studio route only renders the Studio when sanityProjectId is set.
  projectId: sanityProjectId || "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
