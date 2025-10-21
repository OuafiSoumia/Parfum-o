import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error(
    "Please define the MONGO_URI environment variable inside .env.local",
  );
}

let isConnected = false;

/**
 * Connecte Mongoose à MongoDB, une seule fois.
 */
export default async function dbConnect(): Promise<typeof mongoose> {
  if (isConnected && mongoose.connection.readyState === 1) {
    // Déjà connecté
    return mongoose;
  }

  try {
    await mongoose.connect(MONGO_URI, {
      bufferCommands: false,
    });

    isConnected = mongoose.connection.readyState === 1;
    console.log("✅ MongoDB connecté");
  } catch (err) {
    console.error("❌ Erreur de connexion MongoDB :", err);
    throw err;
  }

  return mongoose;
}
