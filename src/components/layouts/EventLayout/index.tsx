import type { Entry } from 'contentful';
import { usePreviewMode } from '../../../hooks/usePreviewMode';
import type { Event } from '../../../types';
import { AboutUsSection } from '../../organisms/AboutUsSection';
import { HeroSection } from '../../organisms/HeroSection';
import { LocationSection } from '../../organisms/LocationSection';
import { PartnersSection } from '../../organisms/PartnersSection';
import { SpeakersSection } from '../../organisms/SpeakersSection';
import { RootLayout } from '../RootLayout';

export const EventLayout = (props: LayoutProps) => {
  const [event, pastEvents] = usePreviewMode(
    props.event,
    props.pastEvents,
    props.year,
  );

  return (
    <RootLayout event={event} pastEvents={pastEvents}>
      <main>
        <HeroSection event={event} />
        <SpeakersSection event={props.event} isPastEvent={props.isPastEvent} />
        <LocationSection event={event} isPastEvent={props.isPastEvent} />
        <PartnersSection event={event} isPastEvent={props.isPastEvent} />
        <AboutUsSection event={event} />
      </main>
    </RootLayout>
  );
};

export interface LayoutProps {
  event: Entry<Event>;
  pastEvents: Entry<Event>[];
  isPastEvent?: boolean;
  year?: string;
}
