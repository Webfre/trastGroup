import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const normalizeBase = (base: string) => {
  const normalized = base.trim();
  if (!normalized || normalized === "/") {
    return "/";
  }

  const withLeadingSlash = normalized.startsWith("/")
    ? normalized
    : `/${normalized}`;

  return withLeadingSlash.endsWith("/")
    ? withLeadingSlash
    : `${withLeadingSlash}/`;
};

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPagesRepository = repositoryName.endsWith(".github.io");
const githubPagesBase =
  repositoryName && !isUserOrOrgPagesRepository ? `/${repositoryName}/` : "/";

export default defineConfig({
  base: normalizeBase(
    process.env.VITE_BASE_PATH ||
      (process.env.GITHUB_ACTIONS ? githubPagesBase : "/"),
  ),
  plugins: [react()],
  envPrefix: ["VITE_", "NEXT_PUBLIC_"],
});
