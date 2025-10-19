"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { advantage } from "../models/assets";
import { PerfumeType } from "@/types/Perfume";

export default function HomePage() {
  const router = useRouter();
  const [perfumes, setPerfumes] = useState<PerfumeType[]>([]);

  useEffect(() => {
    fetch("/api/perfumes")
      .then((res) => res.json())
      .then((data) => {
        setPerfumes(data);
      });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        {/* Video en arrière-plan pleine largeur */}
        <iframe
          title="video-banner"
          id="vimeoPlayer"
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://player.vimeo.com/video/935815682?autoplay=1&controls=0&muted=1&loop=1&title=0&portrait=0&pip=0&byline=0&background=1"
          allow="autoplay; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Overlay sombre + contenu centré */}
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
      </section>

      {/* Featured Section */}
      <section id="featured" className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold text-rose-700 mb-2">
          Nos parfums en vedette
        </h2>
        <p className="text-gray-500 mb-10">
          Top 5 Bestsellers and Trending This Month!
        </p>

        <div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          style={{ display: "flex" }}
        >
          {perfumes.map((p, i) => {
            if (!p.prices || p.prices.length === 0) return null;

            const lowestPrice = p.prices.reduce((min, curr) =>
              curr.price < min.price ? curr : min,
            );

            return (
              <motion.div
                key={i}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition bg-rose-50"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="font-medium text-lg">{p.name}</p>
                  <p className="text-gray-600 text-sm mt-1">
                    lowest Price:{" "}
                    <span className="text-rose-600 font-semibold">
                      ${lowestPrice.price} ({lowestPrice.site})
                    </span>
                    <br />
                    {p.notes?.map((note: string, idx: number) => (
                      <span
                        key={idx}
                        className="text-xs mr-2 px-2 py-1 bg-rose-200 rounded-full"
                      >
                        {note}
                      </span>
                    ))}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Icons / Features Section */}
      <section className="py-20 bg-rose-100 text-center">
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {advantage.map((f, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition"
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-rose-700 mb-2">
                {f.number}
              </h3>
              <p className="text-gray-600">{f.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 bg-white border-t">
        © {new Date().getFullYear()} Parfuméo — All rights reserved.
      </footer>
    </main>
  );
}
