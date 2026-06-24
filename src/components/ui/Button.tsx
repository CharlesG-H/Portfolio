import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center font-medium transition-colors duration-300";

const variantCls: Record<Variant, string> = {
  primary: "rounded bg-accent text-white hover:bg-accent-hover",
  secondary: "rounded bg-foreground text-background hover:bg-accent",
  ghost: "text-muted hover:text-accent",
};

const sizeText: Record<Size, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm",
};

// Padding applies to filled variants only; ghost stays inline-text.
const sizePad: Record<Size, string> = {
  sm: "px-3 py-1.5",
  md: "px-4 py-2.5",
  lg: "px-6 py-3",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
}: {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}) {
  const filled = variant !== "ghost";
  const cls = [base, variantCls[variant], sizeText[size], filled ? sizePad[size] : "", className]
    .filter(Boolean)
    .join(" ");

  if (href?.startsWith("/")) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cls}
      >
        {children}
      </a>
    );
  }

  return <button className={cls}>{children}</button>;
}
