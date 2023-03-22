import type { Entry } from 'contentful';
import { Component, For } from 'solid-js';
import type { Partner } from '../../../types';
import { PartnerLogo } from '../../atoms/PartnerLogo';
import { ContentSection } from '../../molecules/ContentSection';
import * as styles from './PartnersSection.css';

export const PartnersSection: Component<PartnersSectionProps> = (props) => (
  <ContentSection id="partners" title="Partners" size="medium">
    <ul class={styles.list}>
      <For each={props.partners}>
        {(partner) => (
          <li>
            <a
              aria-label={partner.fields.partner}
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
  </ContentSection>
);

export interface PartnersSectionProps {
  partners: Entry<Partner>[];
}
