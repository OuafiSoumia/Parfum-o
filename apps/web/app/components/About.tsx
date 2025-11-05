"use client";

export function About() {
  return (
    <section
      id="apropos"
      className="h-screen relative bg-white overflow-hidden py-20"
    >
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
  );
}
