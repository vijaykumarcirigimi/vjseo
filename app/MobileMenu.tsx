"use client";

// <details> keeps its open state across client-side navigation; close it when a link inside is tapped.
export function MobileMenu({ children }: { children: React.ReactNode }) {
  return (
    <details
      className="nav-mobile"
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("a")) e.currentTarget.open = false;
      }}
    >
      {children}
    </details>
  );
}
