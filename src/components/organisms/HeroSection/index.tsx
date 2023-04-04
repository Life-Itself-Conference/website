/* eslint-disable solid/no-innerhtml */
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import type { Entry } from 'contentful';
import { VsChevronDown } from 'solid-icons/vs';
import type { Component } from 'solid-js';
import { For, Show } from 'solid-js';
import { isNewsletterModalOpen } from '../../../stores/newsletter';
import type { Event } from '../../../types';
import { Button, ButtonLink } from '../../atoms/Button';
import { Container } from '../../atoms/Container';
import { PartnerLogo } from '../../atoms/PartnerLogo';
import { EventMetadata } from '../../molecules/EventMetadata';
import { RegistrationButton } from '../../molecules/RegistrationButton';
import * as styles from './HeroSection.css';

export const HeroSection: Component<HeroSectionProps> = (props) => {
  return (
    <section class={styles.container}>
      <Container size="large">
        {/* Columns */}
        <div class={styles.grid}>
          <div class={styles.content}>
            <EventMetadata class={styles.meta} event={props.event} />
            <h1 class={styles.title}>
              <span>LIFE ITSELF</span>
            </h1>
            <p class={styles.tagline}>{props.event.fields.tagline}</p>
            <div class={styles.buttons}>
              <RegistrationButton event={props.event} />
              <ButtonLink href="#speakers" variant="secondary">
                Speakers
              </ButtonLink>
              <Button
                onClick={() => isNewsletterModalOpen.set(true)}
                variant="secondary"
              >
                Join Newsletter
              </Button>
            </div>
          </div>
          <img
            class={styles.image}
            src={props.event.fields.hero?.fields.file.url}
          />
          <div class={styles.bottom}>
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
            <Show when={!!props.event.fields.partnershipLogo}>
              <img
                alt="In Partnership With CNN"
                class={styles.partnership}
                src={props.event.fields.partnershipLogo.fields.file.url}
              />
            </Show>
          </div>
        </div>

        <div
          class={styles.videoDetails}
          innerHTML={documentToHtmlString(props.event.fields.videoDetails)}
        />

        <div class={styles.arrowContainer}>
          <VsChevronDown class={styles.arrow} />
        </div>
      </Container>
    </section>
  );
};

export interface HeroSectionProps {
  event: Entry<Event>;
}
