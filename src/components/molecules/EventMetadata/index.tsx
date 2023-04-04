import type { Entry } from 'contentful';
import { Component, createMemo } from 'solid-js';
import type { Event } from '../../../types';
import { formatDate } from '../../../utils/format';
import { GlowingCharacters } from '../../atoms/GlowingCharacters';
import * as styles from './EventMetadata.css';

export const EventMetadata: Component<DateTimeProps> = (props) => {
  const dateText = createMemo(() =>
    [
      formatDate(props.event.fields.startDate),
      formatDate(props.event.fields.endDate),
    ].join(' - '),
  );

  const separatorText = ' / ';

  const locationText = createMemo(
    () => props.event.fields.hotel.fields.location,
  );

  return (
    <time
      class={props.class}
      dateTime={`${props.event.fields.startDate}/${props.event.fields.endDate}`}
    >
      <GlowingCharacters text={dateText()} />
      <span class={styles.separator}>{separatorText}</span>
      <GlowingCharacters
        characterDelay={dateText().length + separatorText.length}
        text={locationText()}
      />
    </time>
  );
};

export interface DateTimeProps {
  class?: string;
  event: Entry<Event>;
}
