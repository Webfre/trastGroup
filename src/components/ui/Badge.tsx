import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "default" | "red";
};

export function Badge({ children, tone = "default" }: BadgeProps) {
  return (
    <span className={`badge ${tone === "red" ? "badge--red" : ""}`.trim()}>
      {children}
    </span>
  );
}
