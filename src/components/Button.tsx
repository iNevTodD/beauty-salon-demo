import type { ReactNode } from "react";
import css from "./Button.module.css";
type ButtonVariant = "primary" | "outline" | "light" | "soft";

interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  variant = "primary",
  children,
  loading = false,
  type = "button",
}: ButtonProps) {
  return (
    <button
      className={`${css.button} ${css[variant]}`}
      disabled={loading}
      type={type}
    >
      {children}
    </button>
  );
}
