import clsx from "clsx";
import { Event } from "@/src/types";
import { Button } from "../../atoms/Button";
import { RichText } from "../../atoms/RichText";
import { ContentSection } from "../../molecules/ContentSection";
import { NewsletterModal } from "../../molecules/NewsletterModal";
import { SpeakerThumbnail } from "../../molecules/SpeakerThumbnail";
import * as styles from "./SpeakersSection.css";

export interface SpeakersSectionProps {
  event: Event;
}

export const SpeakersSection = ({ event }: SpeakersSectionProps) => {
  return (
    <ContentSection id="speakers" size="small" title="Speakers" titleLarge>
      <div className={styles.content}>
        {event.fields.speakersSubtitle && (
          <RichText field={event.fields.speakersSubtitle} />
        )}
      </div>
      <ul className={styles.list}>
        {event.fields.speakers?.map(
          (speaker, index) =>
            speaker && (
              <li className={styles.item} key={index}>
                <SpeakerThumbnail speaker={speaker} />
              </li>
            )
        )}
        {event.fields.moreSpeakersComing && (
          <li className={clsx(styles.item, styles.last)}>
            <div className={styles.moreSpeakers}>
              <b>More Speakers to Come!</b>
              <NewsletterModal
                trigger={
                  <Button
                    className={styles.button}
                    size="small"
                    variant="secondary"
                  >
                    Join Newsletter to Stay Informed
                  </Button>
                }
              />
            </div>
          </li>
        )}
      </ul>
    </ContentSection>
  );
};
