"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getApp, getEvent, getPastEvents } from "@/src/services/contentful";
import { Event } from "@/src/types";
import { AboutUsSection } from "../AboutUsSection";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { HeroSection } from "../HeroSection";
import { LocationSection } from "../LocationSection";
import { PartnersSection } from "../PartnersSection";
import { SpeakersSection } from "../SpeakersSection";

export interface EventStructureProps {
  event?: Event;
  pastEvents: Event[];
}

export const EventStructure = (props: EventStructureProps) => {
  const [event, setEvent] = useState(props.event);
  const [pastEvents, setPastEvents] = useState(props.pastEvents);
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
          getEvent(params.year as string, { isPreview: true }),
          getPastEvents({ isPreview: true }),
        ]).then(([previewEvent, previewPastEvents]) => {
          document.body.classList.remove("preview--loading");
          setEvent(previewEvent);
          setPastEvents(previewPastEvents);
        });
      } else {
        Promise.all([
          getApp({ isPreview: true }),
          getPastEvents({ isPreview: true }),
        ]).then(([previewApp, previewPastEvents]) => {
          document.body.classList.remove("preview--loading");
          setEvent(previewApp.fields.currentEvent);
          setPastEvents(previewPastEvents);
        });
      }
    }
  }, [param, params.year, props.event]);

  if (!event) return <p>Oops...</p>;

  return (
    <>
      <Header pastEvents={pastEvents} />
      <main>
        <HeroSection event={event} />
        <SpeakersSection event={event} />
        <LocationSection event={event} />
        <PartnersSection event={event} />
        <AboutUsSection event={event} />
      </main>
      <Footer event={event} />
    </>
  );
};
