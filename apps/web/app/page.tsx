"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ingredients } from "../models/assets";
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
      <div className="relative w-full h-screen overflow-hidden">
        <iframe
          title="video-banner"
          id="vimeoPlayer"
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

      <section
        id="featured"
        className="h-screen py-16 px-6 bg-white text-center"
      >
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
      <div className="w-full mx-auto my-20 md:my-40">
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-12 gap-x-3 sm:gap-x-5">
          <div className="col-span-full md:col-span-6 md:col-start-4 flex flex-col items-center gap-3 text-center">
            <h2 className="text-h2Mobile md:text-h2 font-secondary max-w-[300px] sm:max-w-none">
              Ingrédients
            </h2>
            <p className="text-18 font-light mx-6 md:mx-0">
              Consultez les caractéristiques de plus de 1544 ingrédients et
              découvrez les parfums dans lesquels ils sont présents.
            </p>
          </div>

          <div className="col-span-full lg:pt-12 lg:pb-10 px-8 lg:px-0">
            <div
              className="flex gap-6 overflow-x-auto overflow-y-hidden hide-scrollbar"
              style={{ justifyContent: "center" }}
            >
              {ingredients.map((ing, index) => (
                <a
                  key={index}
                  href={`/fr/ingredients/${ing.name}`}
                  className="flex flex-col items-center min-w-[6rem] hover:cursor-pointer"
                >
                  <div className="aspect-square w-24 h-24 overflow-hidden rounded-full border border-gray-500 mb-2 bg-[#f7f5f4]">
                    <picture>
                      <img
                        src={ing.image}
                        alt={ing.name}
                        className="w-full h-full object-cover rounded-full"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <span className="text-base text-black text-center truncate w-24">
                    {ing.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Lien "Explorer le catalogue" centré */}
            <div className="col-span-full md:col-span-6 md:col-start-4 flex flex-col items-center gap-3 text-center mt-6">
              <a
                href="/fr/ingredients/"
                className="text-gold800 hover:text-gold600 underline underline-offset-[0.2rem] text-hrefLarge uppercase"
              >
                Explorer le catalogue
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="h-screen relative bg-white overflow-hidden py-20">
        {/* Image gauche */}
        <div className="hidden lg:block lg:absolute -bottom-10 left-0 w-[300px]">
          <div className="h-[55vh] xl:h-[70vh] overflow-hidden">
            <img
              src="https://assets-v3.wikiparfum.com/api-assets/images/LSXg8drqxqBOaUIhLuiieFNZwW2OHXvdLL2mFZLh-w2000-q85.png"
              alt="Image parfum gauche"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="hidden lg:block lg:absolute -bottom-10 right-0 w-[300px]">
          <div className="h-[55vh] xl:h-[70vh] overflow-hidden">
            <img
              src="https://assets-v3.wikiparfum.com/api-assets/images/LSXg8drqxqBOaUIhLuiieFNZwW2OHXvdLL2mFZLh-w2000-q85.png"
              alt="Image parfum droite"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <p className="text-gray-700 text-lg">
            Nous vous rendons accessible l'univers des parfums
          </p>
          <div className="flex justify-center gap-12 text-3xl font-semibold mt-6">
            <div>
              <p>+ 30.441</p>
              <span className="block text-sm text-gray-500">PARFUMS</span>
            </div>
            <div>
              <p>+ 1.542</p>
              <span className="block text-sm text-gray-500">INGRÉDIENTS</span>
            </div>
            <div>
              <p>+ 1.406</p>
              <span className="block text-sm text-gray-500">MARQUES</span>
            </div>
          </div>
          <button className="mt-8 bg-black text-white px-8 py-3">
            EN SAVOIR PLUS
          </button>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500 bg-white border-t">
        © {new Date().getFullYear()} Parfuméo — All rights reserved.
      </footer>
    </main>
  );
}
