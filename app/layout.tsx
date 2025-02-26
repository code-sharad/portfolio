import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import ActiveSessionContextProvider from "@/context/active-session-context";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/react";
// import ThemeSwitch from "./components/theme-switch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sharad Bhadait",
  description: "Sharad is Full Stack Developer",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <link rel="icon" type="" href="/favicon.ico" sizes="any" />
      <head>
        <meta name="google-site-verification" content="OqRsdsYhSt23sQqQ5Ni7iDb_D3kR4gLsF6Faf1ujTp8" />
        <meta property="og:title" content="Sharad Bhadait" />
        <meta property="og:description" content="I like to learn new technologies to make something useful. " />
        <meta property="og:image" content="https://media.licdn.com/dms/image/v2/D5603AQHbGy1vvHy3hQ/profile-displayphoto-shrink_200_200/B56ZUkJJNCHsAc-/0/1740068132260?e=1746057600&v=beta&t=s5PLX4_mv-WB4r5dpS01qvSis8QVN3NrrZBHPAiFKTE" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sharad31.vercel.app" />

      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90 `}
      >
        <div className="bg-[#b9afff]  fixed  top-[12rem] -z-10 right-[5rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.7rem] dark:bg-[#946263]"></div>
        <div className="bg-[#ffaa75b9]  fixed  top-[1rem] -z-10 right-[9rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[14rem] sm:w-[68.7rem] dark:bg-[#ffc1b0]"></div>
        <ActiveSessionContextProvider>
          <Header />
          {children}
          <Footer />
          <Analytics />
        </ActiveSessionContextProvider>
        {/* <ThemeSwitch/> */}
      </body>
    </html>
  );
}
