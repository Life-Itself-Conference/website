import type { Document } from '@contentful/rich-text-types';
import type { Asset, Entry, EntryFields } from 'contentful';

export interface AboutUs {
  id: number;
  image: Asset;
  marc: string;
  marcTitle: string;
  marcBio: Document;
  overview: Document;
  sanjay: string;
  sanjayTitle: string;
  sanjayBio: Document;
  year: string;
}

export interface Event {
  aboutUs: Entry<AboutUs>;
  endDate: string;
  hero: Asset;
  hotel: Entry<Location>;
  id: number;
  invitation: string;
  partners: Entry<Partner>[];
  registrationClosedText: Document;
  registrationConfirmationText: Document;
  registrationPaymentText: Document;
  registrationRefundText: Document;
  schedule: Asset;
  speakers: Entry<Speaker>[];
  startDate: string;
  tagline: string;
  ticketStatus: 'Coming Soon' | 'On Sale' | 'Sold Out';
  videoDetails: Document;
  year: string;
}

export interface Location {
  address: string;
  altLocation: EntryFields.Location;
  id: number;
  hotel: string;
  hotelLabel: string;
  hotelOverview: string;
  hotelUrl: string;
  location: string;
  video: Asset;
  videoPoster: Asset;
  year: string;
}

export interface Partner {
  id: number;
  logo: Asset[];
  partner: string;
  year: string;
  url: string;
}

export interface Speaker {
  bio: Document;
  headshot: Asset[];
  id: number;
  name: string;
  title: Entry<Title>[];
  topic: string;
  year: string;
}

export interface Title {
  id: number;
  organization: string;
  title: string;
}
