"use client";
import React, { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type Theme = "light" | "dark";

function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if(localTheme === 'dark'){
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <button
      onClick={toggleTheme}
      className=" fixed bottom-5 right-5 backdrop-blur-[0.5rem] borderBlack border-opacity-40 hover:scale-[1.15] active:scale-105 transition-all bg-white w-[3rem] h-[3rem] shadow-2xl rounded-full flex justify-center items-center dark:bg-gray-950 dark:border-white/10"
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}

export default ThemeSwitch;
