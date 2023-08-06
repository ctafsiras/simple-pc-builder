// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "@/data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const shuffledData = data.sort(() => Math.random() - 0.5);
    const randomData = shuffledData.slice(0, 6);
    res.status(200).json(randomData);
  } catch (error) {
    console.error("Error reading data file:", error);
    res.status(500).json({ error: "Failed to read data file" });
  }
}
