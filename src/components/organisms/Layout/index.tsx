import type { Entry } from 'contentful';
import { useEffect, useState } from 'react';
import { getEvent } from '../../../services/contentful';
import type { Event } from '../../../types';
import { HealthAndSafetyModal } from '../../molecules/HealthAndSafetyModal';
import { NewsletterModal } from '../../molecules/NewsletterModal';
import { RegistrationModal } from '../../molecules/RegistrationModal';
import { AboutUsSection } from '../AboutUsSection';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { HeroSection } from '../HeroSection';
import { LocationSection } from '../LocationSection';
import { PartnersSection } from '../PartnersSection';
import { SpeakersSection } from '../SpeakersSection';

export const Layout = (props: LayoutProps) => {
  const [previewEvent, setPreviewEvent] = useState<Entry<Event>>();
  const event = previewEvent || props.event;

  useEffect(() => {
    (async () => {
      const params = new URLSearchParams(window.location.search);
      if (params.has('preview')) {
        document.body.classList.add('preview');
        setPreviewEvent(
          await getEvent({ isPreview: true, year: props.event.fields.year }),
        );
        document.body.classList.remove('preview');
      }
    })();
  }, [props.event]);

  return (
    <>
      <Header event={event} />
      <main>
        <HeroSection event={event} />
        <SpeakersSection event={props.event} />
        <LocationSection event={event} />
        <PartnersSection event={event} />
        <AboutUsSection event={event} />
      </main>
      <Footer event={event} />
      <HealthAndSafetyModal event={event} />
      <NewsletterModal />
      <RegistrationModal event={event} />
    </>
  );
};

export interface LayoutProps {
  event: Entry<Event>;
}
