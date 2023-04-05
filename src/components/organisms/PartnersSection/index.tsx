import type { Entry } from 'contentful';
import type { Partner } from '../../../types';
import { ButtonLink } from '../../atoms/Button';
import { PartnerLogo } from '../../atoms/PartnerLogo';
import { ContentSection } from '../../molecules/ContentSection';
import * as styles from './PartnersSection.css';

export const PartnersSection = (props: PartnersSectionProps) => (
  <ContentSection
    contentClassName={styles.container}
    id="partners"
    title="Partners"
    size="medium"
  >
    <ul className={styles.list}>
      {props.partners.map((partner) => (
        <li key={partner.fields.id}>
          <a
            aria-label={partner.fields.partner}
            className={styles.link}
            href={partner.fields.url}
            rel="nofollow noreferrer noopener"
            target="_blank"
          >
            <PartnerLogo
              className={styles.image}
              partner={partner}
              variant="light"
            />
          </a>
        </li>
      ))}
    </ul>
    <ButtonLink
      className={styles.button}
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
