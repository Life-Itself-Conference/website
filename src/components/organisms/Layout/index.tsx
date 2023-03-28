import type { Entry } from 'contentful';
import { Component, createSignal, onMount } from 'solid-js';
import { getEvent } from '../../../services/contentful';
import type { Event } from '../../../types';
import { NewsletterModal } from '../../molecules/NewsletterModal';
import { AboutUsSection } from '../AboutUsSection';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { HeroSection } from '../HeroSection';
import { LocationSection } from '../LocationSection';
import { PartnersSection } from '../PartnersSection';
import { SpeakersSection } from '../SpeakersSection';

export const Layout: Component<LayoutProps> = (props) => {
  const [event, setEvent] = createSignal(props.event);

  onMount(async () => {
    const params = new URLSearchParams(window.location.search);
    if (params.has('preview')) {
      document.body.classList.add('preview');
      setEvent(await getEvent(true));
      document.body.classList.remove('preview');
    }
  });

  return (
    <>
      <Header event={event()} />
      <main>
        <HeroSection event={event()} />
        <SpeakersSection speakers={event().fields.speakers} />
        <LocationSection location={event().fields.hotel} />
        <PartnersSection partners={event().fields.partners} />
        <AboutUsSection aboutUs={event().fields.aboutUs} />
      </main>
      <Footer event={props.event} />
      <NewsletterModal />
    </>
  );
};

export interface LayoutProps {
  event: Entry<Event>;
}
