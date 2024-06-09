import Image from "next/image";
import { BsChevronDown } from "react-icons/bs";
import { useNewsletterModalStore } from "@/store";
import { Event } from "@/types";
import { Button, ButtonLink } from "../../atoms/Button";
import { Container } from "../../atoms/Container";
import { PartnerLogo } from "../../atoms/PartnerLogo";
import { RichText } from "../../atoms/RichText";
import { EventMetadata } from "../../molecules/EventMetadata";
import { NewsletterModal } from "../../molecules/NewsletterModal";
import { RegistrationButton } from "../../molecules/RegistrationButton";
import * as styles from "./HeroSection.css";

export interface HeroSectionProps {
  event: Event;
}

export const HeroSection = ({ event }: HeroSectionProps) => {
  const openNewsletterModal = useNewsletterModalStore(
    (state) => state.openNewsletterModal
  );

  return (
    <section className={styles.container}>
      <Container size="large">
        {/* Columns */}
        <div className={styles.grid}>
          <div className={styles.content}>
            <EventMetadata className={styles.meta} event={event} />
            <h1 className={styles.title}>
              <span>LIFE ITSELF</span>
            </h1>
            <p className={styles.tagline}>{event.fields.tagline}</p>
            <ul className={styles.buttons}>
              <li>
                <RegistrationButton event={event} />
              </li>
              <li>
                <ButtonLink href="#speakers" variant="secondary">
                  Speakers
                </ButtonLink>
              </li>
              <li>
                <Button onClick={openNewsletterModal} variant="secondary">
                  Join Newsletter
                </Button>
              </li>
            </ul>
          </div>
          <Image
            alt=""
            className={styles.image}
            height={event.fields.hero?.fields.file?.details?.image?.height}
            priority
            src={`${event.fields.hero?.fields.file?.url}?fm=webp`}
            width={event.fields.hero?.fields.file?.details?.image?.width}
          />
          <div className={styles.bottom}>
            <div className={styles.marquee}>
              <ul>
                <li>{event.fields.invitation}</li>
                {event.fields.partners?.map((partner, index) => {
                  if (!partner) return null;

                  return (
                    <li key={index}>
                      <PartnerLogo partner={partner} />
                    </li>
                  );
                })}
              </ul>
              <ul>
                <li>{event.fields.invitation}</li>
                {event.fields.partners?.map((partner, index) => {
                  if (!partner) return null;

                  return (
                    <li key={index}>
                      <PartnerLogo partner={partner} />
                    </li>
                  );
                })}
              </ul>
            </div>
            {!!event.fields.partnershipLogo && (
              <Image
                alt="In Partnership With CNN"
                className={styles.partnership}
                height={
                  event.fields.partnershipLogo.fields.file?.details.image
                    ?.height
                }
                src={`${event.fields.partnershipLogo.fields.file?.url}?fm=webp`}
                width={
                  event.fields.partnershipLogo.fields.file?.details.image?.width
                }
              />
            )}
          </div>
        </div>
        <div className={styles.videoDetails}>
          <RichText field={event.fields.videoDetails} />
        </div>
        <div className={styles.arrowContainer}>
          <BsChevronDown className={styles.arrow} />
        </div>
      </Container>
    </section>
  );
};
