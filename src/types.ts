import type { Asset, Entry, EntryFields } from 'contentful';

export interface AboutUs {
  id: number;
  image: Asset;
  marc: string;
  marcTitle: string;
  marcBio: EntryFields.RichText;
  overview: EntryFields.RichText;
  sanjay: string;
  sanjayTitle: string;
  sanjayBio: EntryFields.RichText;
  year: string;
}

export interface Event {
  aboutUs: Entry<AboutUs>;
  endDate: string;
  hotel: Entry<Hotel>;
  id: number;
  schedule: Asset;
  speakers: Entry<Speaker>[];
  startDate: string;
  tagline: string;
  videoDetails: string;
  year: string;
}

export interface Hotel {
  address: string;
  altLocation: EntryFields.Location;
  id: number;
  hotel: string;
  hotelLabel: string;
  hotelOverview: string;
  hotelUrl: string;
  location: string;
  videoPoster: Asset;
  year: string;
}

export interface Partner {
  id: number;
  logo: Asset[];
  partner: string;
  year: string;
  URL: string;
}

export interface Speaker {
  bio: string;
  headshot: Asset[];
  id: number;
  name: string;
  title: Entry<Title>[];
  year: string;
}

export interface Title {
  id: number;
  organization: string;
  title: string;
}
