import type { Entry } from 'contentful';
import type { Event } from '../../../types';
import * as styles from './MediaHeroSection.css';

export const MediaHeroSection = (props: MediaHeroSectionProps) => (
  <section className={styles.container}>
    <h1>{props.event.fields.year} Event</h1>
  </section>
);

export interface MediaHeroSectionProps {
  event: Entry<Event>;
}
