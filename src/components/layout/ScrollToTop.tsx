import { useEffect } from "react";
import { useRouter } from "../../router/routerContext";

export function ScrollToTop() {
  const { path } = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [path]);

  return null;
}
