import type { Entry } from 'contentful';
import { Component, For } from 'solid-js';
import type { Partner } from '../../../types';
import { ContentSection } from '../../molecules/ContentSection';
import * as styles from './PartnersSection.css';

export const PartnersSection: Component<PartnersSectionProps> = (props) => (
  <ContentSection id="partners" title="Partners" size="medium">
    <ul class={styles.list}>
      <For each={props.partners}>
        {(item) => {
          const darkVersion = item.fields.logo.find(
            (item) => item.fields.title === 'dark',
          );

          const lightVersion = item.fields.logo.find(
            (item) => item.fields.title === 'light',
          );

          return (
            <li>
              <a
                aria-label={item.fields.partner}
                href={item.fields.url}
                rel="nofollow noreferrer noopener"
                target="_blank"
              >
                <img
                  alt={`${item.fields.partner} logo`}
                  class={styles.image}
                  src={
                    lightVersion?.fields.file.url ||
                    darkVersion?.fields.file.url
                  }
                />
              </a>
            </li>
          );
        }}
      </For>
    </ul>
  </ContentSection>
);

export interface PartnersSectionProps {
  partners: Entry<Partner>[];
}
