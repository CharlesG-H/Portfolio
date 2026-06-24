import type { ReactNode } from "react";

export default function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`max-w-5xl mx-auto px-6 ${className}`.trim()}>{children}</div>
  );
}
