import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import clsx from "clsx";
import { MouseEvent, useMemo } from "react";
import { VideoObject } from "schema-dts";
import { Event } from "@/types";
import { createAndDownloadICalendarEvent } from "@/utils/calendar";
import { formatDate } from "@/utils/format";
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

  const videoSchema: VideoObject = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: [
        event.fields.location?.fields.label,
        event.fields.location?.fields.name,
      ]
        .filter(Boolean)
        .join(" "),
      ...(event.fields.location?.fields.description
        ? {
            description: documentToPlainTextString(
              event.fields.location?.fields.description
            ),
          }
        : {}),
      contentUrl: event.fields.location?.fields.video?.fields.file?.url,
      thumbnailUrl: `${event.fields.location?.fields.videoPoster?.fields?.file?.url}?fm=webp`,
      uploadDate: event.fields.location?.fields.video?.sys.updatedAt,
    }),
    [event]
  );

  return (
    <ContentSection
      className={styles.container}
      contentClassName={styles.content}
      id="location"
      title={isPastEvent ? `${event.fields.year} Location` : "Location"}
    >
      <header className={styles.header}>
        {event.fields.location?.fields.video && (
          <>
            <script
              dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
              type="application/ld+json"
            />
            <video
              autoPlay
              className={styles.video}
              loop
              muted
              poster={`${event.fields.location.fields.videoPoster?.fields?.file?.url}?fm=webp`}
              playsInline
            >
              <source
                src={event.fields.location.fields.video.fields.file?.url}
                type={
                  event.fields.location.fields.video.fields.file?.contentType
                }
              />
            </video>
          </>
        )}
        <h3 className={styles.title}>
          {event.fields.location?.fields.label && (
            <sub className={styles.label}>
              {event.fields.location?.fields.label}
            </sub>
          )}
          <span>{event.fields.location?.fields.name}</span>
        </h3>
        <p className={styles.location}>
          {event.fields.location?.fields.location}
        </p>
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
            <span className={styles.desktopAddress}>
              <b>{event.fields.location?.fields.name}</b>
              <br />
              {event.fields.location?.fields.address}
              <br />
            </span>
            <a className={styles.dates} onClick={handleDownload} href="#">
              <time
                dateTime={`${event.fields.startDate}/${event.fields.endDate}`}
              >
                {formatDate(event.fields.startDate, false)} -{" "}
                {formatDate(event.fields.endDate)}
              </time>
            </a>
          </p>
          <div className={styles.buttons["mobile"]}>
            <Button
              className={styles.button}
              onClick={handleDownload}
              size="small"
              variant="secondary"
            >
              Add to Calendar
            </Button>
            <ButtonLink
              className={styles.button}
              href={event.fields.location?.fields.url as string}
              rel="nofollow noreferrer noopener"
              size="small"
              target="_blank"
              variant="secondary"
            >
              Visit Website
            </ButtonLink>
            <ButtonLink
              className={clsx(styles.button, styles.registrationButton)}
              href="https://g.page/DelCoronado?share"
              target="hotel_directions"
              variant="primary"
            >
              Get Directions
            </ButtonLink>
          </div>

          <div className={styles.buttons["desktop"]}>
            <Button onClick={handleDownload} size="xsmall" variant="secondary">
              Add to Calendar
            </Button>
            <ButtonLink
              href={event.fields.location?.fields.url as string}
              rel="nofollow noreferrer noopener"
              size="xsmall"
              target="_blank"
              variant="secondary"
            >
              Visit Website
            </ButtonLink>
            <ButtonLink
              href="https://g.page/DelCoronado?share"
              target="hotel_directions"
              size="xsmall"
              variant="secondary"
            >
              Get Directions
            </ButtonLink>
          </div>
        </footer>
      </aside>
    </ContentSection>
  );
};
