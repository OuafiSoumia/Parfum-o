"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PerfumeType } from "@/types/Perfume";

export function Parfums() {
  const [perfumes, setPerfumes] = useState<PerfumeType[]>([]);

  useEffect(() => {
    fetch("/api/perfumes")
      .then((res) => res.json())
      .then((data) => {
        setPerfumes(data);
      });
  }, []);
  return (
    <section id="parfums" className="h-screen py-16 px-6 bg-white text-center">
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
  );
}
