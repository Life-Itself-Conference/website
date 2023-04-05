import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import type { Entry } from 'contentful';
import { FaChevronDown } from 'react-icons/fa';
import { isNewsletterModalOpen } from '../../../stores/newsletter';
import type { Event } from '../../../types';
import { Button, ButtonLink } from '../../atoms/Button';
import { Container } from '../../atoms/Container';
import { PartnerLogo } from '../../atoms/PartnerLogo';
import { EventMetadata } from '../../molecules/EventMetadata';
import { RegistrationButton } from '../../molecules/RegistrationButton';
import * as styles from './HeroSection.css';

export const HeroSection = (props: HeroSectionProps) => {
  return (
    <section className={styles.container}>
      <Container size="large">
        {/* Columns */}
        <div className={styles.grid}>
          <div className={styles.content}>
            <EventMetadata className={styles.meta} event={props.event} />
            <h1 className={styles.title}>
              <span>LIFE ITSELF</span>
            </h1>
            <p className={styles.tagline}>{props.event.fields.tagline}</p>
            <div className={styles.buttons}>
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
            className={styles.image}
            src={props.event.fields.hero?.fields.file.url}
          />
          <div className={styles.bottom}>
            <div className={styles.marquee}>
              <ul>
                <li>{props.event.fields.invitation}</li>
                {props.event.fields.partners.map((partner) => (
                  <li key={partner.fields.id}>
                    <PartnerLogo partner={partner} />
                  </li>
                ))}
              </ul>
              <ul>
                <li>{props.event.fields.invitation}</li>
                {props.event.fields.partners.map((partner) => (
                  <li key={partner.fields.id}>
                    <PartnerLogo partner={partner} />
                  </li>
                ))}
              </ul>
            </div>
            {!!props.event.fields.partnershipLogo && (
              <img
                alt="In Partnership With CNN"
                className={styles.partnership}
                src={props.event.fields.partnershipLogo.fields.file.url}
              />
            )}
          </div>
        </div>

        <div
          className={styles.videoDetails}
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(props.event.fields.videoDetails),
          }}
        />

        <div className={styles.arrowContainer}>
          <FaChevronDown className={styles.arrow} />
        </div>
      </Container>
    </section>
  );
};

export interface HeroSectionProps {
  event: Entry<Event>;
}
