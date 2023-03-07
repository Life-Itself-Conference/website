import contentful from 'contentful';

const CONTENTFUL_SPACE = import.meta.env.CONTENTFUL_SPACE;
const CONTENTFUL_ACCESS_TOKEN = import.meta.env.CONTENTFUL_ACCESS_TOKEN;

if (!CONTENTFUL_ACCESS_TOKEN)
  throw new Error(
    'The CONTENTFUL_ACCESS_TOKEN variable must be set in a .env file.',
  );
if (!CONTENTFUL_SPACE)
  throw new Error('The CONTENTFUL_SPACE variable must be set in a .env file.');

export const contentfulClient = contentful.createClient({
  accessToken: CONTENTFUL_ACCESS_TOKEN, // 'pQ90YH9LaHyEEMbjy34rwjmMM90diyYscu5FBWHMNs8',
  space: CONTENTFUL_SPACE, //'9v3l6i0oib55',
});
