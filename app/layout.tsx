import "@/styles/globals.css";
import { Metadata } from "next";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { ubuntu } from "@/config/fonts";
import { Navbar } from "@/components/navBar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={`min-h-screen bg-background antialiased ${ubuntu.className}`}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col">
            <Navbar />
            <main className="container mx-auto pt-16 px-6 flex-grow max-w-[1550px] h-full">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3 mt-10 mb-5">
              <p className="text-sm font-medium">Made with &#10084;&#65039; by Breno Prestes.</p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
