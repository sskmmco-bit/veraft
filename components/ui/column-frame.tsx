import { cn } from "@/lib/cn";

/**
 * Faint vertical hairlines at the edges of the 1200px content column — the
 * Stripe/Linear "grid frame" device. Sits just above the section background
 * and behind content (negative z), so it reads as a continuous rule down the
 * page as sections stack. Only shown when the viewport is wide enough to have
 * margin outside the column (≥1264px); otherwise it would hug the screen edge.
 *
 * Render inside a `relative` section. `onDark` switches to the dark hairline.
 */
export function ColumnFrame({ onDark = false }: { onDark?: boolean }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 hidden min-[1264px]:block"
    >
      <div className="mx-auto h-full w-full max-w-[1200px]">
        <div
          className={cn(
            "h-full border-x",
            onDark ? "border-line-dark" : "border-line",
          )}
        />
      </div>
    </div>
  );
}
