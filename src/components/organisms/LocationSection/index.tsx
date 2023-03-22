import type { Entry } from 'contentful';
import { Component, Show } from 'solid-js';
import type { Location } from '../../../types';
import { ContentSection } from '../../molecules/ContentSection';
import * as styles from './LocationSection.css';

export const LocationSection: Component<LocationSectionProps> = (props) => {
  return (
    <ContentSection
      class={styles.container}
      contentClass={styles.content}
      id="location"
      title="Location"
    >
      <header class={styles.header}>
        <Show when={props.location.fields.video}>
          <video
            autoplay
            class={styles.video}
            loop
            poster={props.location.fields.videoPoster?.fields?.file?.url}
            playsinline
          >
            <source
              src={props.location.fields.video.fields.file.url}
              type={props.location.fields.video.fields.file.contentType}
            />
          </video>
        </Show>
        <h2>
          <sub>{props.location.fields.hotelLabel}</sub>
          {props.location.fields.hotel}
        </h2>
        <p>{props.location.fields.location}</p>
      </header>
      <footer class={styles.footer}>
        <p>{props.location.fields.hotelOverview}</p>
        <p>{props.location.fields.address}</p>
      </footer>
    </ContentSection>
  );
};

export interface LocationSectionProps {
  location: Entry<Location>;
}
