import { NextResponse } from "next/server";
import { Perfume } from "../../../models/Perfume";

export async function GET(req: Request) {
  try {

    const { searchParams } = new URL(req.url);
    const notesParam = searchParams.get("notes") || "";
    const notes = notesParam.split(",").map(n => n.trim());

    if (notes.length === 0) {
      return NextResponse.json({ message: "Aucune note sélectionnée" }, { status: 400 });
    }

    const products = await Perfume.find({ notes: { $in: notes } }).limit(1);

    if (!products || products.length === 0) {
      return NextResponse.json({ message: "Aucun parfum trouvé" }, { status: 404 });
    }

    const product = products[0];
    const bestOffer = product.prices?.reduce((min, curr) =>
      curr.price < min.price ? curr : min
    );

    return NextResponse.json({ ...product.toObject(), bestOffer });
  } catch (err) {
    console.error("Erreur API /recommend :", err);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}
