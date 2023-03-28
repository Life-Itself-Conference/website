import * as contentful from 'contentful';
import type { CreateClientParams, ContentfulClientApi } from 'contentful';
import type { Event } from '../types';

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

export const getEvent = async (isPreview = false) => {
  const data = await getContentfulClient(isPreview).getEntries<Event>({
    content_type: 'event',
    include: 2,
  });

  return data.items?.[0];
};
