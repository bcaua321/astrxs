import { ubuntu } from "@/styles/fonts";
import { Head } from "./head";
import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`relative flex flex-col h-screen ${ubuntu.className}`}>
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <p>Made with &#10084;&#65039; by Breno Prestes.</p>
      </footer>
    </div>
  );
}
