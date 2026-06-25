type ClassValue = string | number | false | null | undefined;

/** Minimal class joiner — no extra deps. Filters falsy values. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
