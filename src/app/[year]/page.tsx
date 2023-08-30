import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { EventStructure } from "@/src/components/organisms/EventStructure";
import { getApp, getEvent, getPastEvents } from "@/src/services/contentful";

export const generateMetadata = ({ params }: { params: any }) => ({
  title: `${params["year"]} Event`,
});

export const generateStaticParams =
  process.env.IS_PREVIEW === "true"
    ? undefined // This forces the page to be dynamic for preview mode.
    : async () => {
        const app = await getApp();
        const pastEvents = await getPastEvents(app);
        return pastEvents.map((event) => ({ year: event.fields.year }));
      };

export default async function YearEventPage({ params }: { params: any }) {
  const isPreview = process.env.IS_PREVIEW === "true";
  const [app, event] = await Promise.all([
    getApp({ isPreview }),
    getEvent(params["year"] as string, { isPreview }),
  ]);
  const pastEvents = await getPastEvents(app, { isPreview });

  if (!event || event.fields.year === app.fields.currentEvent?.fields.year) {
    return redirect("/404");
  }

  return <EventStructure app={app} event={event} pastEvents={pastEvents} />;
}
