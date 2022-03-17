import type { NextApiRequest, NextApiResponse } from "next";
import { getCategories } from "../../../helpers/posts-util";

interface Data {
  categories: string[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const categories = getCategories();
    res.status(200).json({ categories });
  }
}
