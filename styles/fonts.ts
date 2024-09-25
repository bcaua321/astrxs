import { Inter, Ubuntu }  from "next/font/google";

const ubuntu = Ubuntu({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  style: ['italic', 'normal'],
  variable: "--font-ubuntu"
}); 

const roboto = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  style: ['normal'],
  variable: "--font-inter"
}); 

export { ubuntu, roboto }