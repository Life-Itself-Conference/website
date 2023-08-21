import { EventStructure } from "../components/organisms/EventStructure";
import { getApp, getPastEvents } from "../services/contentful";

export const metadata = {
  title: "Home",
};

export default async function CurrentEventPage() {
  const app = await getApp();
  const pastEvents = await getPastEvents(app);

  return <EventStructure app={app} pastEvents={pastEvents} />;
}
