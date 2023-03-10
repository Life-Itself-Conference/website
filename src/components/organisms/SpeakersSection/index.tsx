import type { Entry } from 'contentful';
import type { Component } from 'solid-js';
import type { Speaker } from '../../../types';
import { ContentSection } from '../../molecules/ContentSection';
import { SpeakerList } from '../../molecules/SpeakerList';

export const SpeakersSection: Component<SpeakersSectionProps> = (props) => {
  return (
    <ContentSection
      id="speakers"
      subtitle="LIFE ITSELF features extraordinary thinkers intersecting health & medicine — from research, technology, government, entertainment & business."
      size="medium"
      title="Speakers"
    >
      <SpeakerList speakers={props.speakers} />
    </ContentSection>
  );
};

export interface SpeakersSectionProps {
  speakers: Entry<Speaker>[];
}
