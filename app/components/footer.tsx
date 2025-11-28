import React from "react";

function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 bg-stone-100 dark:bg-stone-950 dark:text-white/80">
      <small className="text-center block text-gray-500 text-sm">
        Made with ❤️ by Sharad
      </small>
      <small className="my-2 text-xs block">&copy; {new Date().getFullYear()} Sharad. Alll rights reserved.</small>
      <p className="text-xs ">
        <span className="font-semibold">About this website: </span> build with React & Nextjs (App Router
        & Server Actions),TypeScript, Tailwind CSS, Framer Motion, Vercel
        hosting.
      </p>
    </footer>
  );
}

export default Footer;
