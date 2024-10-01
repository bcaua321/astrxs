import "@/styles/globals.css";
import { Metadata } from "next";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { ubuntu } from "@/config/fonts";
import { Navbar } from "@/components/navBar";
import Footer from "@/components/footer";

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
        className={`min-h-screen flex flex-col bg-background antialiased ${ubuntu.className}`}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <Navbar />
          {/* Div container para o layout flexível */}
          <div className="flex flex-col flex-grow">
            <main className="container mx-auto px-3 flex-grow md:px-6">
              {children}
            </main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
