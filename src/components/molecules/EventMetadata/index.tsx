import type { Entry } from 'contentful';
import { useMemo } from 'react';
import type { Event } from '../../../types';
import { formatDate } from '../../../utils/format';
import { GlowingCharacters } from '../../atoms/GlowingCharacters';
import * as styles from './EventMetadata.css';

export const EventMetadata = (props: EventMetadataProps) => {
  const dateText = useMemo(
    () =>
      [
        formatDate(props.event.fields.startDate),
        formatDate(props.event.fields.endDate),
      ].join(' - '),
    [props.event],
  );

  const separatorText = ' / ';

  const locationText = useMemo(
    () => props.event.fields.hotel.fields.location,
    [props.event],
  );

  return (
    <time
      className={props.className}
      dateTime={`${props.event.fields.startDate}/${props.event.fields.endDate}`}
    >
      <GlowingCharacters text={dateText} />
      <span className={styles.separator}>{separatorText}</span>
      <GlowingCharacters
        characterDelay={dateText.length + separatorText.length}
        text={locationText}
      />
    </time>
  );
};

export interface EventMetadataProps {
  className?: string;
  event: Entry<Event>;
}
