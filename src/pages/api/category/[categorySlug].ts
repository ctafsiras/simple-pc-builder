import type { NextApiRequest, NextApiResponse } from "next";
import data from "@/data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { categorySlug } = req.query;
  if (!categorySlug) {
    return res.status(400).json({ error: "Category Slug parameter is required" });
  }
  try {
    const filteredData = data.filter((item) => item['category-slug'] === categorySlug);
    res.status(200).json(filteredData);
  } catch (error) {
    console.error("Error reading data file:", error);
    res.status(500).json({ error: "Failed to read data file" });
  }
}
