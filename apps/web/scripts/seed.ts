import mongoose from "mongoose";
import { Perfume } from "../models/Perfume";
import dbConnect from "../lib/db";

async function seed() {
  await dbConnect();

  await Perfume.deleteMany();

  await Perfume.insertMany([
    {
      id: "f1a2b3c4d5e6f7g8h9i0",
      name: "La Vie Est Belle",
      brand: "Lancôme",
      image:
        "https://res.cloudinary.com/domqlergg/image/upload/v1760876661/lavieestbelle.jpg",
      description: "Un parfum floral fruité aux notes de poire et de praline.",
      notes: ["floral", "fruité", "vanille"],
      prices: [
        {
          site: "Sephora",
          url: "https://sephora.fr/p/lavieestbelle",
          price: 95,
        },
        {
          site: "Nocibé",
          url: "https://nocibe.fr/p/lavieestbelle",
          price: 92,
        },
      ],
    },
    {
      id: "a1b2c3d4e5f6g7h8i9j0",
      name: "Coco Mademoiselle",
      brand: "Chanel",
      image:
        "https://res.cloudinary.com/domqlergg/image/upload/v1760876661/coco.jpg",
      description:
        "Un parfum oriental frais aux notes d’orange et de patchouli.",
      notes: ["oriental", "frais", "patchouli"],
      prices: [
        {
          site: "Sephora",
          url: "https://sephora.fr/p/coco",
          price: 110,
        },
        {
          site: "Nocibé",
          url: "https://nocibe.fr/p/coco",
          price: 108,
        },
      ],
    },
    {
      id: "b2c3d4e5f6g7h8i9j0k1",
      name: "J'adore",
      brand: "Dior",
      image:
        "https://res.cloudinary.com/domqlergg/image/upload/v1760876661/jadore.jpg",
      description: "Un parfum floral lumineux aux notes de jasmin et de rose.",
      notes: ["floral", "jasmin", "rose"],
      prices: [
        {
          site: "Sephora",
          url: "https://sephora.fr/p/jadore",
          price: 105,
        },
        {
          site: "Nocibé",
          url: "https://nocibe.fr/p/jadore",
          price: 102,
        },
      ],
    },
    {
      id: "c3d4e5f6g7h8i9j0k1l2",
      name: "Flowerbomb",
      brand: "Viktor & Rolf",
      image:
        "https://res.cloudinary.com/domqlergg/image/upload/v1760876661/flowerbomb.jpg",
      description:
        "Un parfum explosif floral et gourmand aux notes de patchouli et de jasmin.",
      notes: ["floral", "gourmand", "patchouli"],
      prices: [
        {
          site: "Sephora",
          url: "https://sephora.fr/p/flowerbomb",
          price: 120,
        },
        {
          site: "Nocibé",
          url: "https://nocibe.fr/p/flowerbomb",
          price: 118,
        },
      ],
    },
    {
      id: "d4e5f6g7h8i9j0k1l2m3",
      name: "Black Opium",
      brand: "Yves Saint Laurent",
      image:
        "https://res.cloudinary.com/domqlergg/image/upload/v1760876661/blackopium.jpg",
      description:
        "Un parfum oriental vanillé aux notes de café et de vanille.",
      notes: ["oriental", "vanillé", "café"],
      prices: [
        {
          site: "Sephora",
          url: "https://sephora.fr/p/blackopium",
          price: 98,
        },
        {
          site: "Nocibé",
          url: "https://nocibe.fr/p/blackopium",
          price: 95,
        },
      ],
    },
  ]);

  console.log("✅ Base de données seedée !");
  mongoose.connection.close();
}

seed();
