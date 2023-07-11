import type { Entry } from 'contentful';
import type { Event } from '../../../types';
import { ContentSection } from '../../molecules/ContentSection';
import { SpeakerList } from '../../molecules/SpeakerList';

export const SpeakersSection = (props: SpeakersSectionProps) => {
  return (
    <ContentSection
      id="speakers"
      subtitle={props.event.fields.speakersSubtitle}
      size="medium"
      title={
        props.isPastEvent ? `${props.event.fields.year} Speakers` : 'Speakers'
      }
    >
      <SpeakerList
        moreSpeakersComing={props.event.fields.moreSpeakersComing}
        speakers={props.event.fields.speakers}
      />
    </ContentSection>
  );
};

export interface SpeakersSectionProps {
  event: Entry<Event>;
  isPastEvent?: boolean;
}
