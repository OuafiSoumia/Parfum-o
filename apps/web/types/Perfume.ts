export interface PerfumeType {
  _id: string;
  name: string;
  brand: string;
  description?: string;
  image: string; // URL Cloudinary
  notes?: string[];
  prices: {
    site: string;
    price: number;
    url: string;
  }[];
}
