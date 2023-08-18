import * as contentful from "contentful";
import { TypeAppSkeleton, TypeEventSkeleton } from "../types";

const CONTENTFUL_ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const CONTENTFUL_PREVIEW_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN;
const CONTENTFUL_SPACE = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE;

if (!CONTENTFUL_ACCESS_TOKEN)
  throw new Error(
    "The CONTENTFUL_ACCESS_TOKEN variable must be set in a .env file."
  );

if (!CONTENTFUL_PREVIEW_ACCESS_TOKEN)
  throw new Error(
    "The CONTENTFUL_PREVIEW_ACCESS_TOKEN variable must be set in a .env file."
  );

if (!CONTENTFUL_SPACE)
  throw new Error("The CONTENTFUL_SPACE variable must be set in a .env file.");

export const getContentfulClient = (isPreview = false) => {
  return contentful.createClient({
    ...(isPreview
      ? {
          accessToken: CONTENTFUL_PREVIEW_ACCESS_TOKEN,
          host: "preview.contentful.com",
        }
      : { accessToken: CONTENTFUL_ACCESS_TOKEN }),
    space: CONTENTFUL_SPACE,
    retryOnError: false,
  }).withoutUnresolvableLinks;
};

export const getApp = async ({ isPreview }: { isPreview?: boolean } = {}) => {
  const client = getContentfulClient(isPreview);
  const data = await client.getEntries<TypeAppSkeleton>({
    content_type: "app",
    include: 3,
  });
  return data.items[0];
};

export const getPastEvents = async ({
  isPreview,
}: { isPreview?: boolean } = {}) => {
  const client = getContentfulClient(isPreview);
  const [data, app] = await Promise.all([
    client.getEntries<TypeEventSkeleton>({
      content_type: "event",
      include: 3,
    }),
    getApp({ isPreview }),
  ]);

  const currentEvent = app.fields.currentEvent;
  let pastEvents = data.items;

  if (currentEvent) {
    pastEvents = pastEvents.filter((event) => {
      if (!event.fields.year || !currentEvent.fields.year) return false;
      return Number(event.fields.year) < Number(currentEvent.fields.year);
    });
  }

  return pastEvents;
};

export const getEvent = async (
  year: string,
  { isPreview }: { isPreview?: boolean } = {}
) => {
  const client = getContentfulClient(isPreview);
  const data = await client.getEntries<TypeEventSkeleton>({
    content_type: "event",
    include: 3,
    "fields.year": year,
  });
  return data.items[0];
};
