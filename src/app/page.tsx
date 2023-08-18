import { EventStructure } from "../components/organisms/EventStructure";
import { getApp, getEvents } from "../services/contentful";

export const metadata = {
  title: "Home",
};

export default async function CurrentEventPage() {
  const app = await getApp();
  const events = await getEvents();

  return <EventStructure event={app.fields.currentEvent} events={events} />;
}
