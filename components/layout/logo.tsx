import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Wordmark + compact mark. The mark is a hairline frame with an accent
 * node at its center — "a system with intelligence inside," echoing the
 * hero pipeline. The accent dot is the only color the logo spends.
 */
export function Logo({
  className,
  onDark = false,
  onClick,
}: {
  className?: string;
  onDark?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Veraft — home"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-md",
        className,
      )}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <rect
          x="1.25"
          y="1.25"
          width="19.5"
          height="19.5"
          rx="5.5"
          stroke={onDark ? "var(--color-line-dark)" : "var(--color-line)"}
          strokeWidth="1.5"
          className="transition-colors duration-200 group-hover:stroke-accent"
        />
        <circle cx="11" cy="11" r="3.25" fill="var(--color-accent)" />
      </svg>
      <span
        className={cn(
          "font-display text-[1.2rem] font-semibold tracking-[-0.02em]",
          onDark ? "text-paper" : "text-ink",
        )}
      >
        Veraft
      </span>
    </Link>
  );
}
