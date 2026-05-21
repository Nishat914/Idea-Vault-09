import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { Open_Sans } from "next/font/google";
import "./globals.css";

import { Toaster } from "react-hot-toast";
import NextThemeProvider from "./providers/NextThemeProvider";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Idea Vault",
  description: "Best Idea portal in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
     suppressHydrationWarning
      className={`${openSans.variable} h-full antialiased`}
    >
      <body className=" text-foreground min-h-full flex flex-col bg-linear-to-r from-pink-100 via-mauve-200 to-mauve-300
      dark:bg-linear-to-r dark:from-mauve-800 dark:via-mauve-700 dark:to-mauve-900">
        <NextThemeProvider>
           
          {children}
        <Toaster position="top-right" />
        </NextThemeProvider>
        
      </body>
    </html>
  );
}
