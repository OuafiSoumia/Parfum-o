import dbConnect from "@/lib/db";
import { Perfume } from "@/models/Perfume";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const perfumes = await Perfume.find();
  return NextResponse.json(perfumes);
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const perfume = await Perfume.create(body);
    return NextResponse.json(perfume, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create perfume" },
      { status: 500 },
    );
  }
}
