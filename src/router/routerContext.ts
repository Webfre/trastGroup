import { createContext, useContext } from "react";

export type RouterContextValue = {
  path: string;
  navigate: (to: string) => void;
};

export const RouterContext = createContext<RouterContextValue | null>(null);

export const normalizePath = (path: string) => {
  const withoutHash = path.split("#")[0] ?? "/";
  const withoutQuery = withoutHash.split("?")[0] ?? "/";
  if (withoutQuery.length > 1) {
    return withoutQuery.replace(/\/+$/g, "");
  }
  return withoutQuery || "/";
};

const normalizeBasePath = (base: string) => {
  const withoutOrigin = base.replace(/^https?:\/\/[^/]+/i, "");
  const normalized = normalizePath(withoutOrigin);
  return normalized === "/" ? "" : normalized;
};

export const appBasePath = normalizeBasePath(import.meta.env.BASE_URL);

export const stripBasePath = (path: string) => {
  const normalized = normalizePath(path);
  if (!appBasePath) {
    return normalized;
  }

  if (normalized === appBasePath) {
    return "/";
  }

  if (normalized.startsWith(`${appBasePath}/`)) {
    return normalizePath(normalized.slice(appBasePath.length));
  }

  return normalized;
};

export const withBasePath = (path: string) => {
  const normalized = normalizePath(path);
  if (!appBasePath) {
    return normalized;
  }

  return normalized === "/" ? `${appBasePath}/` : `${appBasePath}${normalized}`;
};

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used inside RouterProvider");
  }
  return context;
}
