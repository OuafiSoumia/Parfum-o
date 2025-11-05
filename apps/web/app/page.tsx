"use client";

import { Parfums } from "./components/Parfums";
import { Home } from "./components/Home";
import { FindYourPerfumeSection } from "./components/FindYourPerfumeSection";
import { About } from "./components/About";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white text-gray-800">
      <Home />
      <Parfums />
      <FindYourPerfumeSection />
      <About />

      <footer className="py-6 text-center text-sm text-gray-500 bg-white border-t">
        © {new Date().getFullYear()} Parfuméo — All rights reserved.
      </footer>
    </main>
  );
}
