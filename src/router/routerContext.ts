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

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used inside RouterProvider");
  }
  return context;
}
