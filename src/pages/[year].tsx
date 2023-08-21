import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { EventStructure } from "../components/organisms/EventStructure";
import {
  getApp,
  getEvent,
  getEvents,
  getPastEvents,
} from "../services/contentful";
import { App, Event } from "../types";

export const getStaticPaths: GetStaticPaths = async () => {
  const events = await getEvents();
  return {
    fallback: false,
    paths: events.map((event) => ({ params: { year: event.fields.year } })),
  };
};

export const getStaticProps: GetStaticProps<{
  app: App;
  event: Event;
  pastEvents: Event[];
}> = async ({ params }) => {
  const app = await getApp();
  const event = await getEvent(params?.year as string);
  const pastEvents = await getPastEvents(app);
  return { props: { app, event, pastEvents }, revalidate: 60 };
};

export default function HomePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <EventStructure
      app={props.app}
      event={props.event}
      pastEvents={props.pastEvents}
    />
  );
}
