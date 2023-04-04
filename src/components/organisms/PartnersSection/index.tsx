import type { Entry } from 'contentful';
import { Component, For } from 'solid-js';
import type { Partner } from '../../../types';
import { ButtonLink } from '../../atoms/Button';
import { PartnerLogo } from '../../atoms/PartnerLogo';
import { ContentSection } from '../../molecules/ContentSection';
import * as styles from './PartnersSection.css';

export const PartnersSection: Component<PartnersSectionProps> = (props) => (
  <ContentSection
    contentClass={styles.container}
    id="partners"
    title="Partners"
    size="medium"
  >
    <ul class={styles.list}>
      <For each={props.partners}>
        {(partner) => (
          <li>
            <a
              aria-label={partner.fields.partner}
              class={styles.link}
              href={partner.fields.url}
              rel="nofollow noreferrer noopener"
              target="_blank"
            >
              <PartnerLogo
                class={styles.image}
                partner={partner}
                variant="light"
              />
            </a>
          </li>
        )}
      </For>
    </ul>
    <ButtonLink
      class={styles.button}
      href="mailto:info@lifeitself.health?subject=Become a Partner"
      rel="nofollow noreferrer noopener"
      target="_blank"
      variant="secondary"
    >
      Become a Partner
    </ButtonLink>
  </ContentSection>
);

export interface PartnersSectionProps {
  partners: Entry<Partner>[];
}
