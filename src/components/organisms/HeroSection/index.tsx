import type { Entry } from 'contentful';
import { VsChevronDown } from 'solid-icons/vs';
import { Component, For } from 'solid-js';
import { isNewsletterModalOpen } from '../../../stores/newsletter';
import type { Event } from '../../../types';
import { formatDate } from '../../../utils/format';
import { Button, ButtonLink } from '../../atoms/Button';
import { Container } from '../../atoms/Container';
import { PartnerLogo } from '../../atoms/PartnerLogo';
import * as styles from './HeroSection.css';

export const HeroSection: Component<HeroSectionProps> = (props) => (
  <section class={styles.container}>
    <Container size="large">
      <div class={styles.content}>
        <small class={styles.meta}>
          <b>
            <time
              dateTime={`${props.event.fields.startDate}/${props.event.fields.endDate}`}
            >
              {[
                formatDate(props.event.fields.startDate),
                formatDate(props.event.fields.endDate),
              ].join(' - ')}
            </time>{' '}
            / <span>{props.event.fields.hotel.fields.location}</span>
          </b>
        </small>
        <h1 class={styles.title}>
          <span>LIFE ITSELF</span>
        </h1>
        <p class={styles.tagline}>{props.event.fields.tagline}</p>
        <div class={styles.buttons}>
          <Button onClick={() => isNewsletterModalOpen.set(true)}>
            {props.event.fields.ticketStatus}
          </Button>
          <ButtonLink href="#speakers" variant="secondary">
            Speakers
          </ButtonLink>
          <ButtonLink variant="secondary">Join Newsletter</ButtonLink>
        </div>
      </div>
      <div class={styles.marquee}>
        <ul>
          <li>{props.event.fields.invitation}</li>
          <For each={props.event.fields.partners}>
            {(partner) => (
              <li>
                <PartnerLogo partner={partner} />
              </li>
            )}
          </For>
        </ul>
        <ul>
          <li>{props.event.fields.invitation}</li>
          <For each={props.event.fields.partners}>
            {(partner) => (
              <li>
                <PartnerLogo partner={partner} />
              </li>
            )}
          </For>
        </ul>
      </div>
      <div class={styles.arrowContainer}>
        <VsChevronDown class={styles.arrow} />
      </div>
    </Container>
  </section>
);

export interface HeroSectionProps {
  event: Entry<Event>;
}
