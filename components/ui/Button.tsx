import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export type ButtonVariant = "primary" | "secondary" | "quiet";

type ButtonStyle = {
  /** primary: the one main action per screen. secondary: ink outline. quiet: text-only. */
  variant?: ButtonVariant;
  /** Full width. Use for the main action pinned to the bottom on mobile. */
  block?: boolean;
};

/** Shared classes, so a Next `<Link>` can look exactly like a Button. */
export function buttonClassName({ variant = "primary", block = false }: ButtonStyle = {}) {
  return clsx(
    "inline-flex h-14 items-center justify-center gap-2 rounded-full px-7 font-ds text-ds-row",
    "transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-ink",
    "disabled:cursor-not-allowed disabled:opacity-40",
    block && "w-full",
    variant === "primary" && "bg-ds-accent text-ds-on-accent enabled:hover:opacity-90",
    variant === "secondary" && "border border-ds-ink text-ds-ink enabled:hover:bg-ds-rule",
    variant === "quiet" && "px-3 text-ds-ink underline decoration-1 underline-offset-4 enabled:hover:decoration-2"
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonStyle;

export function Button({ variant = "primary", block = false, className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={clsx(buttonClassName({ variant, block }), className)} {...props} />;
}
