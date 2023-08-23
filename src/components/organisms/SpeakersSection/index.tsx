import { Event } from "@/src/types";
import { RichText } from "../../atoms/RichText";
import { ContentSection } from "../../molecules/ContentSection";
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
              <li key={index}>
                <SpeakerThumbnail speaker={speaker} />
              </li>
            )
        )}
      </ul>
    </ContentSection>
  );
};
