import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import ActiveSessionContextProvider from "@/context/active-session-context";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/react";
import { GridBackground } from "./components/grid-background";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "./components/theme-switch";

const outfit = Outfit({ subsets: ["latin"] });

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
        <meta name="google-site-verification" content="fjfT-n1xIl3UgMjielWkqtL3rAOEoZJGPbSFF0635WY" />
        <meta name="google-site-verification" content="T6-2SxCm2PXVl1wmX9Y0FzZtGk6C1mid3TDMwQIAz54" />
        <meta property="og:title" content="Sharad Bhadait" />
        <meta property="og:description" content="I like to learn new technologies to make something useful. " />
        <meta property="og:image" content="https://media.licdn.com/dms/image/v2/D5603AQHbGy1vvHy3hQ/profile-displayphoto-shrink_200_200/B56ZUkJJNCHsAc-/0/1740068132260?e=1746057600&v=beta&t=s5PLX4_mv-WB4r5dpS01qvSis8QVN3NrrZBHPAiFKTE" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sharad31.vercel.app" />

      </head>
      <body
        className={`${outfit.className} bg-stone-100 text-stone-950 relative dark:bg-stone-950 dark:text-stone-50 dark:text-opacity-100 mx-auto `}
      >
        {/* <div className="bg-[#b9afff]  fixed opacity-40 top-[12rem] -z-08 right-[5rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.7rem] dark:bg-[#946263]"></div> */}
        {/* <div className="bg-[#fbb183b9]  fixed opacity-40 top-[1rem] -z-08 right-[9rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[14rem] sm:w-[68.7rem] dark:bg-[#ffc1b0]"></div> */}
        <ThemeContextProvider>
          <ActiveSessionContextProvider>
            <Header />
            <GridBackground>
              {children}
            </GridBackground>
            <Footer />
            <Analytics />
            <ThemeSwitch />
          </ActiveSessionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
