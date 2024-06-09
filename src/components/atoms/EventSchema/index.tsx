import { CreativeWork, Event, Organization } from "schema-dts";
import { Event as EventType } from "@/types";

interface EventSchemaProps {
  event?: EventType;
}

export const EventSchema = (props: EventSchemaProps) => {
  if (!props.event) return;

  const eventSchema: Event = {
    "@type": "Event",
    name: `Life Itself Medical Health Conference ${props.event.fields.year}`,
    description: props.event.fields.tagline,
    startDate: props.event.fields.startDate?.split("T")[0],
    endDate: props.event.fields.endDate?.split("T")[0],
    location: {
      "@type": "Place",
      name: props.event.fields.location?.fields.name,
      address: props.event.fields.location?.fields.address,
    },
    organizer: [
      {
        "@type": "Person",
        name: props.event.fields.aboutUs?.fields.sanjay,
        jobTitle: props.event.fields.aboutUs?.fields.sanjayTitle,
      },
      {
        "@type": "Person",
        name: props.event.fields.aboutUs?.fields.marc,
        jobTitle: props.event.fields.aboutUs?.fields.marcTitle,
      },
    ],
    performer: props.event.fields.speakers?.map((speaker) => {
      const affiliation: Organization[] =
        speaker?.fields.titles
          ?.filter((title) => title.split("|")[1])
          .map((title) => {
            const [role, organization] = title.split("|");

            return {
              "@type": "Organization",
              name: organization?.trim(),
              role: role?.trim(),
            };
          }) || [];

      const image = speaker?.fields.headshot?.find(
        (image) => image?.fields.title === "thumbnail"
      )?.fields.file?.url;

      const presentation: CreativeWork | boolean = !!speaker?.fields.topic && {
        "@type": "CreativeWork",
        name: speaker.fields.topic,
      };

      return {
        "@type": "Person",
        name: speaker?.fields.alternateName || speaker?.fields.name,
        ...(image && { image }),
        ...(affiliation.length && { affiliation }),
        ...(presentation && { presentation }),
      };
    }),
    sponsor: props.event.fields.partners?.map((partner) => ({
      "@type": "Organization",
      name: partner?.fields.name,
    })),
  };

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      type="application/ld+json"
    />
  );
};
