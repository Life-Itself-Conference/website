import type { Entry } from 'contentful';
import { Component, createMemo, For, Show } from 'solid-js';
import type { Speaker } from '../../../types';
import { Button } from '../../atoms/Button';
import * as styles from './SpeakerThumbnail.css';

export const SpeakerThumbnail: Component<SpeakerThumbnailProps> = (props) => {
  const image = createMemo(() =>
    props.speaker.fields.headshot?.find(
      (image) => image.fields.title === 'thumbnail',
    ),
  );

  const handleClick = () => props.onClick?.(props.speaker.fields.id);

  return (
    <div class={styles.container}>
      <Show when={image}>
        <img
          alt={`${props.speaker.fields.name} headshot`}
          class={styles.image}
          src={image()?.fields.file.url}
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
          <For each={props.speaker.fields.title}>
            {(title) => (
              <div>
                <Show when={title.fields.organization}>
                  <small>
                    <b>{title.fields.organization}</b>
                  </small>
                  <br />
                </Show>
                <span>{title.fields.title}</span>
              </div>
            )}
          </For>
          <Button
            class={styles.button}
            onClick={handleClick}
            size="xsmall"
            variant="secondary"
          >
            Topic &amp; Bio
          </Button>
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
