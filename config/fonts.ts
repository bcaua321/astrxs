import { Fira_Code, Inter } from "next/font/google";
import { Ubuntu } from "next/font/google";

export const ubuntu = Ubuntu({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  style: ['italic', 'normal'],
  variable: "--font-sans"
}); 

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const fontMono = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
});
