import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";

export async function GET() {
  try {
    const mongoose = await dbConnect();
    const readyState = mongoose.connection.readyState;

    return NextResponse.json({
      connected: readyState === 1,
      state: readyState,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Connection failed" }, { status: 500 });
  }
}
