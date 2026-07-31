import {
  type MouseEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { normalizePath, RouterContext, useRouter } from "./routerContext";

type LinkProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  to: string;
};

type NavLinkProps = Omit<LinkProps, "className"> & {
  className?: string | ((state: { isActive: boolean }) => string);
  end?: boolean;
};

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = useCallback((to: string) => {
    const nextPath = normalizePath(to);
    if (nextPath !== normalizePath(window.location.pathname)) {
      window.history.pushState({}, "", nextPath);
      setPath(nextPath);
    }
  }, []);

  const value = useMemo(() => ({ path, navigate }), [navigate, path]);

  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
}

export function Link({ children, className, onClick, to }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate(to);
    onClick?.();
  };

  return (
    <a className={className} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export function NavLink({
  children,
  className,
  end = false,
  onClick,
  to,
}: NavLinkProps) {
  const { path } = useRouter();
  const target = normalizePath(to);
  const isActive = end ? path === target : path === target || path.startsWith(`${target}/`);
  const resolvedClassName =
    typeof className === "function" ? className({ isActive }) : className;

  return (
    <Link className={resolvedClassName} to={to} onClick={onClick}>
      {children}
    </Link>
  );
}
