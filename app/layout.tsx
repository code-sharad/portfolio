import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import ActiveSessionContextProvider from "@/context/active-session-context";
import Footer from "./components/footer";
import { Analytics } from '@vercel/analytics/react';
// import ThemeSwitch from "./components/theme-switch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sharad | Personal Portfolio",
  description: "Sharad is Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">

    <link rel="icon" href={'./public/favicon.ico'} sizes="any"/>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90 `}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.7rem] dark:bg-[#946263"></div>
        <div className="bg-[#dbd7fb] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[50rem] -z-10 rounded-full blur-[10rem] sm:w-[68.7rem] md:left[-32rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ActiveSessionContextProvider>
          <Header />
          {children}
          <Footer/>
          <Analytics/>
        </ActiveSessionContextProvider>
        {/* <ThemeSwitch/> */}
      </body>
    </html>
  );
}
