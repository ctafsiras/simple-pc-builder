// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "@/data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  // Validate if category is provided
  if (!id) {
    return res.status(400).json({ error: "Category Slug parameter is required" });
  }
  try {
    const product = data.find((item) => item.id === Number(id));
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Error reading data file:", error);
    res.status(500).json({ error: "Failed to read data file" });
  }
}
