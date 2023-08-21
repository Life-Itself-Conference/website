"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getApp, getEvent, getPastEvents } from "@/src/services/contentful";
import { App, Event } from "@/src/types";
import { Banner } from "../../atoms/Banner";
import { AboutUsSection } from "../AboutUsSection";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { HeroSection } from "../HeroSection";
import { LocationSection } from "../LocationSection";
import { PartnersSection } from "../PartnersSection";
import { SpeakersSection } from "../SpeakersSection";

export interface EventStructureProps {
  app: App;
  event?: Event;
  pastEvents: Event[];
}

export const EventStructure = (props: EventStructureProps) => {
  const [app, setApp] = useState(props.app);
  const [event, setEvent] = useState(props.event);
  const [pastEvents, setPastEvents] = useState(props.pastEvents);
  const currentEvent = event || app?.fields.currentEvent;
  const params = useParams();
  const searchParams = useSearchParams();
  const param = searchParams.get("preview");

  // If preview mode is enabled, fetch preview content.
  useEffect(() => {
    if (param === "true") {
      sessionStorage.setItem("preview", "true");
    } else if (param === "false") {
      sessionStorage.removeItem("preview");
    }

    const isPreview = sessionStorage.getItem("preview") === "true";

    if (isPreview) {
      document.body.classList.add("preview");
      document.body.classList.add("preview--loading");

      if (params.year) {
        Promise.all([
          getApp({ isPreview: true }),
          getEvent(params.year as string, { isPreview: true }),
          getPastEvents({ isPreview: true }),
        ]).then(([previewApp, previewEvent, previewPastEvents]) => {
          document.body.classList.remove("preview--loading");
          setApp(previewApp);
          setEvent(previewEvent);
          setPastEvents(previewPastEvents);
        });
      } else {
        Promise.all([
          getApp({ isPreview: true }),
          getPastEvents({ isPreview: true }),
        ]).then(([previewApp, previewPastEvents]) => {
          document.body.classList.remove("preview--loading");
          setApp(previewApp);
          setPastEvents(previewPastEvents);
        });
      }
    }
  }, [param, params.year, props.event]);

  if (!currentEvent) return <p>Oops...</p>;

  return (
    <>
      {app.fields.announcementModal && (
        <Banner modal={app.fields.announcementModal} />
      )}
      <Header event={currentEvent} pastEvents={pastEvents} />
      <main>
        <HeroSection event={currentEvent} />
        <SpeakersSection event={currentEvent} />
        <LocationSection event={currentEvent} />
        <PartnersSection event={currentEvent} />
        <AboutUsSection event={currentEvent} />
      </main>
      <Footer event={currentEvent} />
    </>
  );
};
