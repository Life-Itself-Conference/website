import type { Entry } from 'contentful';
import { Component, Show } from 'solid-js';
import type { Speaker } from '../../../types';
import * as styles from './SpeakerThumbnail.css';

export const SpeakerThumbnail: Component<SpeakerThumbnailProps> = (props) => {
  const image = props.speaker.fields.headshot?.find(
    (image) => image.fields.title === 'thumbnail',
  );

  return (
    <div
      class={styles.container}
      // onClick={() => props.onClick?.(props.speaker.fields.id)}
    >
      <Show when={image}>
        <img
          alt={`${props.speaker.fields.name} headshot`}
          class={styles.image}
          src={image?.fields.file.url}
        />
      </Show>
      <Show when={!image}>
        <img
          alt={`${props.speaker.fields.name} headshot`}
          class={styles.placeholderImage}
          src="/more-to-come.png"
        />
      </Show>
      <div class={styles.content}>
        <span class={styles.name}>
          <b>{props.speaker.fields.name}</b>
        </span>
        <div class={styles.details}>
          <Show when={props.speaker.fields.title?.[0]?.fields.organization}>
            <b>
              {props.speaker.fields.title[0].fields.organization}
              <br />
            </b>
          </Show>
          {props.speaker.fields.title?.[0]?.fields.title}
        </div>
      </div>
    </div>
  );
};

export interface SpeakerThumbnailProps {
  // eslint-disable-next-line
  onClick?: (id: number) => void;
  speaker: Entry<Speaker>;
}
