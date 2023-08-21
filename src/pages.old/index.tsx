import { GetStaticProps, InferGetStaticPropsType } from "next";
import { EventStructure } from "../components/organisms/EventStructure";
import { getApp, getPastEvents } from "../services/contentful";
import { App, Event } from "../types";

export const getStaticProps: GetStaticProps<{
  app: App;
  pastEvents: Event[];
}> = async () => {
  const app = await getApp();
  const pastEvents = await getPastEvents(app);
  return { props: { app, pastEvents }, revalidate: 60 };
};

export default function HomePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <EventStructure app={props.app} pastEvents={props.pastEvents} />;
}
