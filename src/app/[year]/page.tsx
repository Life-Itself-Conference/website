import { EventStructure } from "@/src/components/organisms/EventStructure";
import { getEvent, getEvents } from "@/src/services/contentful";

export const generateMetadata = ({ params }: { params: any }) => ({
  title: `${params["year"]} Event`,
});

export const generateStaticParams = async ({ params }: { params: any }) => {
  const events = await getEvents();
  return events.map((event) => ({ year: event.fields.year }));
};

export default async function YearEventPage({ params }: { params: any }) {
  const event = await getEvent(params["year"] as string);
  const events = await getEvents();

  return <EventStructure event={event} events={events} />;
}
