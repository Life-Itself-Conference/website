import type { Event } from "../../../types";
import { ButtonLink } from "../../atoms/Button";
import { PartnerLogo } from "../../atoms/PartnerLogo";
import { ContentSection } from "../../molecules/ContentSection";
import * as styles from "./PartnersSection.css";

export interface PartnersSectionProps {
  event: Event;
  isPastEvent?: boolean;
}

export const PartnersSection = ({
  event,
  isPastEvent,
}: PartnersSectionProps) => (
  <ContentSection
    contentClassName={styles.container}
    id="partners"
    title={isPastEvent ? `${event.fields.year} Partners` : "Partners"}
    size="medium"
  >
    <ul className={styles.list}>
      {event.fields.partners?.map((partner, index) => {
        if (!partner) return <></>;

        return (
          <li key={index}>
            <a
              aria-label={partner?.fields.name}
              className={styles.link}
              href={partner?.fields.url}
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
        );
      })}
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
