import * as contentful from 'contentful';
import type { Entry } from 'contentful';
import type { CreateClientParams, ContentfulClientApi } from 'contentful';
import type { App, Event } from '../types';

const CONTENTFUL_ACCESS_TOKEN = import.meta.env.PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const CONTENTFUL_PREVIEW_ACCESS_TOKEN = import.meta.env
  .PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN;
const CONTENTFUL_SPACE = import.meta.env.PUBLIC_CONTENTFUL_SPACE;

if (!CONTENTFUL_ACCESS_TOKEN)
  throw new Error(
    'The CONTENTFUL_ACCESS_TOKEN variable must be set in a .env file.',
  );

if (!CONTENTFUL_PREVIEW_ACCESS_TOKEN)
  throw new Error(
    'The CONTENTFUL_PREVIEW_ACCESS_TOKEN variable must be set in a .env file.',
  );

if (!CONTENTFUL_SPACE)
  throw new Error('The CONTENTFUL_SPACE variable must be set in a .env file.');

// https://github.com/contentful/contentful.js/issues/1233#issuecomment-1456369601
// eslint-disable-next-line no-unused-vars
const createClientFunc: (params: CreateClientParams) => ContentfulClientApi =
  contentful.createClient
    ? contentful.createClient
    : // @ts-ignore
      contentful.default.createClient;

export const getContentfulClient = (isPreview = false) => {
  return createClientFunc({
    ...(isPreview
      ? {
          accessToken: CONTENTFUL_PREVIEW_ACCESS_TOKEN,
          host: 'preview.contentful.com',
        }
      : { accessToken: CONTENTFUL_ACCESS_TOKEN }),
    space: CONTENTFUL_SPACE,
  });
};

export const getEvent = async ({
  includePastEvents,
  isPreview,
  year,
}: {
  includePastEvents?: boolean;
  isPreview?: boolean;
  year?: string;
} = {}): Promise<[Entry<Event>, Entry<Event>[]]> => {
  const client = getContentfulClient(isPreview);
  let event: Entry<Event>;

  if (year) {
    const data = await client.getEntries<Event>({
      content_type: 'event',
      include: 2,
      'fields.year': year,
    });

    event = data.items[0];
  } else {
    const data = await client.getEntries<App>({
      content_type: 'app',
      include: 3,
    });

    event = data.items[0].fields.currentEvent;
  }

  return [event, includePastEvents ? await getPastEvents({ isPreview }) : []];
};

export const getAllEvents = async ({
  isPreview,
}: { isPreview?: boolean } = {}) => {
  const data = await getContentfulClient(isPreview).getEntries<Event>({
    content_type: 'event',
    include: 2,
  });

  return data.items;
};

export const getCurrentEvent = async ({
  isPreview,
}: {
  isPreview?: boolean;
} = {}) => {
  const client = getContentfulClient(isPreview);
  const data = await client.getEntries<App>({
    content_type: 'app',
    include: 3,
  });

  return data.items[0].fields.currentEvent;
};

export const getPastEvents = async ({
  event,
  isPreview,
}: {
  event?: Entry<Event>;
  isPreview?: boolean;
} = {}) => {
  let currentEvent = event || (await getCurrentEvent({ isPreview }));
  const events = await getAllEvents({ isPreview });

  return events
    .filter(
      (instance) =>
        Number(instance.fields.year) < Number(currentEvent.fields.year),
    )
    .sort((eventA, eventB) =>
      Number(eventA.fields.year) > Number(eventB.fields.year) ? -1 : 1,
    );
};
