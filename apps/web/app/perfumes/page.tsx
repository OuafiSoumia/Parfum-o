"use client";
import { PerfumeType } from "@/types/Perfume";
import { useEffect, useState } from "react";

export default function PerfumesPage() {
const [perfumes, setPerfumes] = useState<PerfumeType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/perfumes")
      .then((res) => res.json())
      .then((data) => {
        setPerfumes(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Chargement...</div>;

  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {perfumes.map((p) => (
        <div key={p._id} className="border rounded-2xl p-4 shadow-sm">
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-48 object-cover rounded-xl"
          />
          <h2 className="text-lg font-semibold mt-2">{p.name}</h2>
          <p className="text-sm text-gray-600">{p.brand}</p>
        </div>
      ))}
    </div>
  );
}
