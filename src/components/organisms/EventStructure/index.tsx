"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getEvent, getEvents } from "@/src/services/contentful";
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
  events: Event[];
}

export const EventStructure = (props: EventStructureProps) => {
  const [event, setEvent] = useState(props.event);
  const [events, setEvents] = useState(props.events);
  const searchParams = useSearchParams();

  // If preview mode is enabled, fetch preview content.
  useEffect(() => {
    const param = searchParams.get("preview");

    if (param === "true") {
      sessionStorage.setItem("preview", "true");
    } else if (param === "false") {
      sessionStorage.removeItem("preview");
    }

    const isPreview = sessionStorage.getItem("preview") === "true";

    console.log("isPreview", searchParams.get("preview"), isPreview);

    if (props.event && isPreview) {
      document.body.classList.add("preview");
      document.body.classList.add("preview--loading");

      Promise.all([
        getEvent(props.event.fields.year as string, { isPreview: true }),
        getEvents({ isPreview: true }),
      ]).then(([previewEvent, previewEvents]) => {
        document.body.classList.remove("preview--loading");
        setEvent(previewEvent);
        setEvents(previewEvents);
      });
    }
  }, [searchParams, props.event]);

  if (!event) return <p>Oops...</p>;

  return (
    <>
      <Header events={events} />
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
