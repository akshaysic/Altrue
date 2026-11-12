import type { ButtonHTMLAttributes } from "react";
import { LoaderCircle } from "lucide-react";
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
    "inline-flex min-h-ds-button min-w-ds-touch max-w-full items-center justify-center gap-ds-sm rounded-full border py-ds-sm font-ds text-ds-row",
    variant === "quiet" ? "px-ds-sm" : "px-ds-lg",
    "transition-opacity motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus",
    "disabled:cursor-not-allowed disabled:bg-ds-ground disabled:text-ds-ink-2",
    variant !== "quiet" && "disabled:border-ds-ink-2",
    block && "w-full",
    variant === "primary" && "border-transparent bg-ds-accent text-ds-on-accent enabled:hover:opacity-90",
    variant === "secondary" && "border-ds-ink text-ds-ink enabled:hover:bg-ds-rule",
    variant === "quiet" && "border-transparent text-ds-ink underline decoration-1 underline-offset-4 enabled:hover:decoration-2"
  );
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonStyle & {
  /** Keeps the visible label and accessible name, exposes busy state, and prevents repeat activation. */
  loading?: boolean;
};

export function Button({
  variant = "primary",
  block = false,
  loading = false,
  disabled = false,
  children,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || props["aria-busy"]}
      className={clsx(buttonClassName({ variant, block }), className)}
    >
      {loading ? <LoaderCircle aria-hidden size={18} className="shrink-0 motion-safe:animate-spin" /> : null}
      <span className="min-w-0 break-words">{children}</span>
    </button>
  );
}
