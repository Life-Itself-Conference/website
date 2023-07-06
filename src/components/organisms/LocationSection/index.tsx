import type { Entry } from 'contentful';
import type { Event } from '../../../types';
import { createAndDownloadICalendarEvent } from '../../../utils/calendar';
import { formatDate } from '../../../utils/format';
import { Button, ButtonLink } from '../../atoms/Button';
import { RichText } from '../../atoms/RichText';
import { ContentSection } from '../../molecules/ContentSection';
import * as styles from './LocationSection.css';

export const LocationSection = (props: LocationSectionProps) => {
  const handleDownload = () => createAndDownloadICalendarEvent(props.event);

  return (
    <ContentSection
      className={styles.container}
      contentClassName={styles.content}
      id="location"
      title="Location"
    >
      <header className={styles.header}>
        {props.event.fields.hotel.fields.video && (
          <video
            autoPlay
            className={styles.video}
            loop
            poster={
              props.event.fields.hotel.fields.videoPoster?.fields?.file?.url
            }
            playsInline
          >
            <source
              src={props.event.fields.hotel.fields.video.fields.file.url}
              type={
                props.event.fields.hotel.fields.video.fields.file.contentType
              }
            />
          </video>
        )}
        <h2>
          <sub>{props.event.fields.hotel.fields.hotelLabel}</sub>
          {props.event.fields.hotel.fields.hotel}
        </h2>
        <p>{props.event.fields.hotel.fields.location}</p>
        <p className={styles.address}>
          {props.event.fields.hotel.fields.hotel}
          <br />
          {props.event.fields.hotel.fields.address}
        </p>
      </header>
      <aside className={styles.aside}>
        <div className={styles.overview}>
          <RichText field={props.event.fields.hotel.fields.hotelOverview} />
        </div>
        <footer className={styles.footer}>
          <p>
            <b>{props.event.fields.hotel.fields.hotel}</b>
            <br />
            {props.event.fields.hotel.fields.address}
            <br />
            <a href="#">
              <time
                dateTime={`${props.event.fields.startDate}/${props.event.fields.endDate}`}
              >
                {formatDate(props.event.fields.startDate)} -{' '}
                {formatDate(props.event.fields.endDate)}
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
                href={props.event.fields.hotel.fields.hotelUrl}
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

export interface LocationSectionProps {
  event: Entry<Event>;
}
