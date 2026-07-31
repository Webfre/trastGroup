import type { ReactNode } from "react";
import { Link } from "../../router/Router";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  to?: string;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  full?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
};

export function Button({
  children,
  className = "",
  href,
  to,
  type = "button",
  variant = "primary",
  full = false,
  icon,
  onClick,
}: ButtonProps) {
  const classNames = [
    "button",
    `button--${variant}`,
    full ? "button--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>
      {icon}
    </>
  );

  if (to) {
    return (
      <Link className={classNames} to={to} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classNames} href={href} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button className={classNames} type={type} onClick={onClick}>
      {content}
    </button>
  );
}
