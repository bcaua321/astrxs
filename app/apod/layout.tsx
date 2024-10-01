import { Suspense } from "react";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="mt-5 max-w-[1980px]">
        {children}
      </section>
    );
  }