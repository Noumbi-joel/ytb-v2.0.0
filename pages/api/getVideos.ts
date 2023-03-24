// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fetchFromAPI } from "@/utils/fetchFromAPI";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  data?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { url } = req.body;
  console.log(url)

  if (req.method !== "POST") {
    return res.status(403).json({ message: "Method not supported" });
  }

  try {
    const videos = await fetchFromAPI(url);
    return res.status(200).json({ message: "Retrieved videos", data: videos });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}
