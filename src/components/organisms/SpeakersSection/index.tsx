import type { Document } from '@contentful/rich-text-types';
import type { Entry } from 'contentful';
import type { Speaker } from '../../../types';
import { ContentSection } from '../../molecules/ContentSection';
import { SpeakerList } from '../../molecules/SpeakerList';

export const SpeakersSection = (props: SpeakersSectionProps) => {
  return (
    <ContentSection
      id="speakers"
      subtitle={props.subtitle}
      size="medium"
      title="Speakers"
    >
      <SpeakerList
        moreSpeakersComing={props.moreSpeakersComing}
        speakers={props.speakers}
      />
    </ContentSection>
  );
};

export interface SpeakersSectionProps {
  moreSpeakersComing?: boolean;
  speakers: Entry<Speaker>[];
  subtitle: Document;
}
