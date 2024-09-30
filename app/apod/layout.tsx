import { Suspense } from "react";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="min-h-[80vh] mt-5">
        {children}
      </section>
    );
  }