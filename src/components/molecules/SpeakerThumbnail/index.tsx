import type { Entry } from 'contentful';
import type { Component } from 'solid-js';
import type { Speaker } from '../../../types';
import * as styles from './SpeakerThumbnail.css';

export const SpeakerThumbnail: Component<SpeakerThumbnailProps> = (props) => (
  <div
    class={styles.container}
    // onClick={() => props.onClick?.(props.speaker.fields.id)}
  >
    <img
      alt={`${props.speaker.fields.name} headshot`}
      class={styles.image}
      src={
        props.speaker.fields.headshot?.find(
          (image) => image.fields.title === 'thumbnail',
        )?.fields.file.url || '/no-image.png'
      }
    />
    <div class={styles.content}>
      <span class={styles.name}>
        <b>{props.speaker.fields.name}</b>
      </span>
      <div class={styles.details}>
        {props.speaker.fields.title?.[0]?.fields.organization && (
          <b>
            {props.speaker.fields.title?.[0]?.fields.organization}
            <br />
          </b>
        )}
        {props.speaker.fields.title?.[0]?.fields.title}
      </div>
    </div>
  </div>
);

export interface SpeakerThumbnailProps {
  // eslint-disable-next-line
  onClick?: (id: number) => void;
  speaker: Entry<Speaker>;
}
