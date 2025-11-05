"use client";
import { motion } from "framer-motion";
import { navItems } from "@/models/assets";
import { useRouter } from "next/navigation";

export function Home() {
  const router = useRouter();
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-rose-100 shadow-sm"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <a
            href="/"
            className="text-2xl font-bold text-rose-600 hover:text-rose-700"
          >
            Parfuméo
          </a>

          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>
      <div className="relative w-full h-screen overflow-hidden">
        <iframe
          title="video-banner"
          id="accueil"
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://player.vimeo.com/video/935815682?autoplay=1&controls=0&muted=1&loop=1&title=0&portrait=0&pip=0&byline=0&background=1"
          allow="autoplay; picture-in-picture"
          allowFullScreen
        ></iframe>

        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Découvrez Parfuméo
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            Comparez, économisez et trouvez votre essence parfaite.
          </p>
          <button
            onClick={() => router.push("/perfumes")}
            className="px-6 py-3 bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition-all shadow-md"
          >
            Explorer les parfums
          </button>
        </div>
      </div>
    </section>
  );
}
