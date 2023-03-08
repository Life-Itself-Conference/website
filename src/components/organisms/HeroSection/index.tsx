import type { Entry } from 'contentful';
import type { Component } from 'solid-js';
import type { Event } from '../../../types';
import { formatDate } from '../../../utils/format';
import { ButtonLink } from '../../atoms/Button';
import { Container } from '../../atoms/Container';
import * as styles from './HeroSection.css';

export const HeroSection: Component<HeroSectionProps> = (props) => (
  <section class={styles.container}>
    <Container size="large">
      <div class={styles.content}>
        <small class={styles.meta}>
          <time
            dateTime={`${props.event.fields.startDate}/${props.event.fields.endDate}`}
          >
            <b>
              {[
                formatDate(props.event.fields.startDate),
                formatDate(props.event.fields.endDate),
              ].join(' - ')}
            </b>
          </time>
        </small>
        <h1 class={styles.title}>
          <span>LIFE ITSELF</span>
        </h1>
        <p>{props.event.fields.tagline}</p>
        <div class={styles.buttons}>
          <ButtonLink>Sold Out</ButtonLink>
          <ButtonLink variant="secondary">Speakers</ButtonLink>
          <ButtonLink variant="secondary">Join Newsletter</ButtonLink>
        </div>
      </div>
    </Container>
  </section>
);

export interface HeroSectionProps {
  event: Entry<Event>;
}
