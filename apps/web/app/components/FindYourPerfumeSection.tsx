"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ingredients } from "../../models/assets";

export function FindYourPerfumeSection() {
  const [selectedNotes, setSelectedNotes] = useState<string[]>([]);
  const [suggestion, setSuggestion] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const toggleNote = (note: string) => {
    setSelectedNotes((prev) =>
      prev.includes(note) ? prev.filter((n) => n !== note) : [...prev, note],
    );
  };

  const handleSearch = async () => {
    if (selectedNotes.length === 0) return;
    setLoading(true);
    setSuggestion(null);
    try {
      const res = await fetch(
        `/api/recommend?notes=${selectedNotes.join(",")}`,
      );
      const data = await res.json();
      setSuggestion(data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="ingrédients"
      className="relative h-screen py-20 bg-rose-50 text-center"
    >
      <h2 className="text-3xl font-semibold text-rose-700 mb-4">
        Trouvez votre parfum préféré
      </h2>
      <p className="text-gray-600 mb-8 max-w-xl mx-auto">
        Sélectionnez les ingrédients qui vous plaisent, et découvrez le parfum
        idéal pour vous !
      </p>

      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {ingredients.map((ing, index) => (
          <button
            key={index}
            onClick={() => toggleNote(ing.name)}
            className={`flex flex-col items-center transition-all hover:scale-105 ${
              selectedNotes.includes(ing.name)
                ? "opacity-100"
                : "opacity-80 hover:opacity-100"
            }`}
          >
            <div
              className={`aspect-square w-24 h-24 rounded-full overflow-hidden border-4 ${
                selectedNotes.includes(ing.name)
                  ? "border-rose-600"
                  : "border-gray-300"
              }`}
            >
              <img
                src={ing.image}
                alt={ing.name}
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
              />
            </div>
            <span
              className={`mt-2 text-sm font-medium ${
                selectedNotes.includes(ing.name)
                  ? "text-rose-700"
                  : "text-gray-800"
              }`}
            >
              {ing.name}
            </span>
          </button>
        ))}
      </div>

      <button
        onClick={handleSearch}
        disabled={loading}
        className="px-6 py-3 bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition-all shadow-md disabled:opacity-50"
      >
        {loading ? "Recherche en cours..." : "Trouver mon parfum"}
      </button>

      {suggestion && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6 mx-auto bg-white shadow-lg rounded-2xl p-4 w-full max-w-md"
          style={{
            maxHeight: "calc(100vh - 220px)",
            overflowY: "auto",
          }}
        >
          <img
            src={suggestion.image}
            alt={suggestion.name}
            className="w-full h-28 object-contain rounded-lg mb-3"
          />
          <h3 className="text-lg font-semibold">{suggestion.name}</h3>
          <p className="text-gray-500 text-sm">{suggestion.brand}</p>
          <p className="text-xs mt-1">
            Notes principales:{" "}
            <span className="text-rose-600 font-medium">
              {suggestion.notes?.join(", ")}
            </span>
          </p>
          <p className="mt-2 text-sm font-bold text-rose-700">
            Meilleur prix : {suggestion.bestOffer?.price}€ (
            {suggestion.bestOffer?.site})
          </p>
          <a
            href={`/r/${suggestion.bestOffer?.offerId}`}
            className="inline-block mt-2 underline text-rose-600 hover:text-rose-700 text-sm"
          >
            Voir l'offre
          </a>
        </motion.div>
      )}
    </section>
  );
}
