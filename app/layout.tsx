import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0c0a09",
};
import "./globals.css";
import Header from "./components/header";
import ActiveSessionContextProvider from "@/context/active-session-context";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/react";
import { GridBackground } from "./components/grid-background";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "./components/theme-switch";
import SplashScreen from "./components/splash-screen";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://iamsharad.in"),
  title: "Sharad Bhadait",
  description: "Sharad is Full Stack Developer",
  icons: {
    icon: "/sharad_fav.png",
  },
  verification: {
    google: ["fjfT-n1xIl3UgMjielWkqtL3rAOEoZJGPbSFF0635WY", "T6-2SxCm2PXVl1wmX9Y0FzZtGk6C1mid3TDMwQIAz54"],
  },
  openGraph: {
    title: "Sharad Bhadait",
    description: "I like to learn new technologies to make something useful.",
    type: "website",
    url: "https://iamsharad.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth overflow-x-hidden">
      <body
        className={`${outfit.className} bg-stone-100 text-stone-950 relative dark:bg-stone-950 dark:text-stone-50 dark:text-opacity-100 mx-auto overflow-x-hidden`}
      >
        {/* <div className="bg-[#b9afff]  fixed opacity-40 top-[12rem] -z-08 right-[5rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.7rem] dark:bg-[#946263]"></div> */}
        {/* <div className="bg-[#fbb183b9]  fixed opacity-40 top-[1rem] -z-08 right-[9rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[14rem] sm:w-[68.7rem] dark:bg-[#ffc1b0]"></div> */}
        <ThemeContextProvider>
          <ActiveSessionContextProvider>
            <div className="relative w-full max-w-[100vw] overflow-x-hidden">
              <SplashScreen />
              <Header />
              <GridBackground>
                {children}
              </GridBackground>
              <Footer />
              <Analytics />
              <ThemeSwitch />
            </div>
          </ActiveSessionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
