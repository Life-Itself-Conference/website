import { EventStructure } from "@/src/components/organisms/EventStructure";
import { getEvent, getPastEvents } from "@/src/services/contentful";

export const generateMetadata = ({ params }: { params: any }) => ({
  title: `${params["year"]} Event`,
});

export const generateStaticParams = async () => {
  const events = await getPastEvents();
  return events.map((event) => ({ year: event.fields.year }));
};

export default async function YearEventPage({ params }: { params: any }) {
  const event = await getEvent(params["year"] as string);
  const pastEvents = await getPastEvents();

  return <EventStructure event={event} pastEvents={pastEvents} />;
}
