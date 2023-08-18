import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Event } from "@/src/types";
import { ContentSection } from "../../molecules/ContentSection";
import { SpeakerThumbnail } from "../../molecules/SpeakerThumbnail";
import * as styles from "./SpeakersSection.css";

export interface SpeakersSectionProps {
  event: Event;
}

export const SpeakersSection = ({ event }: SpeakersSectionProps) => {
  return (
    <ContentSection id="speakers" size="small" title="Speakers" titleLarge>
      {event.fields.speakersSubtitle &&
        documentToReactComponents(event.fields.speakersSubtitle)}
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
