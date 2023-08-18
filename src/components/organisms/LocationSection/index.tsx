import { MouseEvent } from "react";
import { Event } from "@/src/types";
import { createAndDownloadICalendarEvent } from "@/src/utils/calendar";
import { formatDate } from "@/src/utils/format";
import { Button, ButtonLink } from "../../atoms/Button";
import { RichText } from "../../atoms/RichText";
import { ContentSection } from "../../molecules/ContentSection";
import * as styles from "./LocationSection.css";

export interface LocationSectionProps {
  event: Event;
  isPastEvent?: boolean;
}

export const LocationSection = ({
  event,
  isPastEvent,
}: LocationSectionProps) => {
  const handleDownload = (e: MouseEvent) => {
    e.preventDefault();
    createAndDownloadICalendarEvent(event);
  };

  return (
    <ContentSection
      className={styles.container}
      contentClassName={styles.content}
      id="location"
      title={isPastEvent ? `${event.fields.year} Location` : "Location"}
    >
      <header className={styles.header}>
        {event.fields.location?.fields.video && (
          <video
            autoPlay
            className={styles.video}
            loop
            muted
            poster={event.fields.location.fields.videoPoster?.fields?.file?.url}
            playsInline
          >
            <source
              src={event.fields.location.fields.video.fields.file?.url}
              type={event.fields.location.fields.video.fields.file?.contentType}
            />
          </video>
        )}
        <h2>
          <sub>{event.fields.location?.fields.label}</sub>
          {event.fields.location?.fields.name}
        </h2>
        {/* <p>{event.fields.location?.fields.location}</p> */}
        <p className={styles.address}>
          {event.fields.location?.fields.name}
          <br />
          {event.fields.location?.fields.address}
        </p>
      </header>
      <aside className={styles.aside}>
        <div className={styles.overview}>
          {event.fields.location?.fields.description && (
            <RichText field={event.fields.location?.fields.description} />
          )}
        </div>
        <footer className={styles.footer}>
          <p>
            <b>{event.fields.location?.fields.name}</b>
            <br />
            {event.fields.location?.fields.address}
            <br />
            <a className={styles.dates} onClick={handleDownload} href="#">
              <time
                dateTime={`${event.fields.startDate}/${event.fields.endDate}`}
              >
                {formatDate(event.fields.startDate, false)} -{" "}
                {formatDate(event.fields.endDate)}
              </time>
            </a>
          </p>
          <ul className={styles.buttons}>
            <li>
              <Button
                onClick={handleDownload}
                size="xsmall"
                variant="secondary"
              >
                Add to Calendar
              </Button>
            </li>
            <li>
              <ButtonLink
                href={event.fields.location?.fields.url as string}
                rel="nofollow noreferrer noopener"
                size="xsmall"
                target="_blank"
                variant="secondary"
              >
                Visit Website
              </ButtonLink>
            </li>
            <li>
              <ButtonLink
                href="https://g.page/DelCoronado?share"
                target="hotel_directions"
                size="xsmall"
                variant="secondary"
              >
                Get Directions
              </ButtonLink>
            </li>
          </ul>
        </footer>
      </aside>
    </ContentSection>
  );
};
