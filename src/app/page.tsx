import { headers } from "next/headers";
import { EventStructure } from "../components/organisms/EventStructure";
import { getApp, getPastEvents } from "../services/contentful";

export default async function CurrentEventPage() {
  const isPreview = process.env.IS_PREVIEW === "true";
  if (isPreview) headers(); // This forces the page to be dynamic for preview mode.

  const app = await getApp({ isPreview });
  const pastEvents = await getPastEvents(app, { isPreview });
  return <EventStructure app={app} pastEvents={pastEvents} />;
}
