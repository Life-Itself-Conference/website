import Image from "next/image";
import { useNewsletterModalStore } from "@/store";
import { Event } from "@/types";
import { createAndDownloadICalendarEvent } from "@/utils/calendar";
import { Button } from "../../atoms/Button";
import { Container } from "../../atoms/Container";
import { EventMetadata } from "../../molecules/EventMetadata";
import { NewsletterModal } from "../../molecules/NewsletterModal";
import { RegistrationButton } from "../../molecules/RegistrationButton";
import * as styles from "./Footer.css";

export interface FooterProps {
  event: Event;
}

export const Footer = (props: FooterProps) => {
  const openNewsletterModal = useNewsletterModalStore(
    (state) => state.openNewsletterModal
  );
  const handleDownload = () => createAndDownloadICalendarEvent(props.event);

  return (
    <footer className={styles.footer}>
      <hr />

      <Container size="xsmall">
        <div className={styles.buttons}>
          <Button
            onClick={openNewsletterModal}
            size="small"
            variant="secondary"
          >
            Join Newsletter
          </Button>
          <Button onClick={handleDownload} size="small" variant="secondary">
            Add to Calendar
          </Button>
          <RegistrationButton
            className={styles.registrationButton}
            event={props.event}
          />
        </div>
      </Container>

      <hr />

      <Container size="large">
        <div className={styles.happy}>
          <Image
            alt="Logo Maze"
            className={styles.logo}
            height={100}
            src="/logo-maze.png"
            width={100}
          />
          <div className={styles.content}>
            <EventMetadata className={styles.meta} event={props.event} />
            <strong>Happy. Healthy. Human.</strong>
          </div>
        </div>
        <p>&copy; 2023 LIFE ITSELF. All rights reserved.</p>
      </Container>
    </footer>
  );
};
