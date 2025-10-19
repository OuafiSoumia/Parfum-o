import mongoose, { Schema, model, models } from "mongoose";

export interface IPerfume extends Document {
  name: string;
  brand: string;
  description?: string;
  image: string; // URL Cloudinary
  prices: { site: string; price: number; url: string }[];
}

const priceSchema = new Schema({
  site: { type: String, required: true },
  url: { type: String, required: true }, // Lien affilié
  price: { type: Number, required: true },
});

const perfumeSchema = new Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    notes: [{ type: String }],
    prices: [priceSchema],
  },
  { timestamps: true },
);

export const Perfume = models.Perfume || model("Perfume", perfumeSchema);
