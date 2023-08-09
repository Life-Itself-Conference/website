import type { Entry } from 'contentful';
import type { PropsWithChildren } from 'react';
import type { Event } from '../../../types';
import { AnnouncementBanner } from '../../atoms/AnnouncementBanner';
import { HealthAndSafetyModal } from '../../molecules/HealthAndSafetyModal';
import { NewsletterModal } from '../../molecules/NewsletterModal';
import { RegistrationModal } from '../../molecules/RegistrationModal';
import { Footer } from '../../organisms/Footer';
import { Header } from '../../organisms/Header';

export const RootLayout = (props: PropsWithChildren<RootLayoutProps>) => {
  return (
    <>
      <AnnouncementBanner event={props.event} />
      <Header event={props.event} pastEvents={props.pastEvents} />
      {props.children}
      <Footer event={props.event} />
      <HealthAndSafetyModal event={props.event} />
      <NewsletterModal />
      <RegistrationModal event={props.event} />
    </>
  );
};

export interface RootLayoutProps {
  event: Entry<Event>;
  pastEvents: Entry<Event>[];
}
