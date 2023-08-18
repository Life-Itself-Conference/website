// import { isNewsletterModalOpen } from '../../../stores';
// import { createAndDownloadICalendarEvent } from '../../../utils/calendar';
// import { Button } from '../../atoms/Button';
import Image from "next/image";
import { Event } from "@/src/types";
import { Button } from "../../atoms/Button";
import { Container } from "../../atoms/Container";
import { EventMetadata } from "../../molecules/EventMetadata";
// import { RegistrationButton } from '../../molecules/RegistrationButton';
import * as styles from "./Footer.css";

export interface FooterProps {
  event: Event;
}

export const Footer = (props: FooterProps) => {
  // const handleDownload = () => createAndDownloadICalendarEvent(props.event);

  return (
    <footer className={styles.footer}>
      <hr />

      <Container size="xsmall">
        <div className={styles.buttons}>
          <Button
            // onClick={() => isNewsletterModalOpen.set(true)}
            size="small"
            variant="secondary"
          >
            Join Newsletter
          </Button>
          <Button
            // onClick={handleDownload}
            size="small"
            variant="secondary"
          >
            Add to Calendar
          </Button>
          <Button className={styles.ticketButton}>Sold Out</Button>
          {/* <RegistrationButton
            className={styles.ticketButton}
            event={props.event}
            size="small"
          /> */}
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
