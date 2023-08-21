import { NextApiRequest, NextApiResponse } from "next";
import { getEvents } from "@/src/services/contentful";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await res.revalidate("/");

  const events = await getEvents();
  events.forEach(async (event) => {
    await res.revalidate(`/${event.fields.year}`);
  });

  return res.json({ revalidated: true, now: Date.now(), from: "pages" });
}
