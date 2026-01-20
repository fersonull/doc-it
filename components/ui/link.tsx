import { AnchorHTMLAttributes, ReactNode } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "nav" | "cta";
  children: ReactNode;
}

export function Link({
  variant = "nav",
  children,
  className = "",
  ...props
}: LinkProps) {
  const variantStyles = {
    nav: "text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors",
    cta: "text-base font-medium text-gray-900 hover:text-orange-600 transition-colors flex items-center gap-2",
  };

  return (
    <a className={`${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
