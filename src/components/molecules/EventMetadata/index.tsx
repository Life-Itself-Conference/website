import { useMemo } from "react";
import { Event } from "@/src/types";
import { formatDate } from "../../../utils/format";
import { GlowingCharacters } from "../../atoms/GlowingCharacters";
import * as styles from "./EventMetadata.css";

export interface EventMetadataProps {
  className?: string;
  event: Event;
}

export const EventMetadata = ({ className, event }: EventMetadataProps) => {
  const dateText = useMemo(
    () =>
      [
        formatDate(event.fields.startDate, false),
        formatDate(event.fields.endDate),
      ]
        .filter(Boolean)
        .join(" - "),
    [event]
  );

  const separatorText = " / ";

  const locationText = useMemo(
    () => event.fields.location?.fields.location,
    [event]
  );

  return (
    <time
      className={className}
      key={`${dateText}${separatorText}${locationText}`}
      dateTime={`${event.fields.startDate}/${event.fields.endDate}`}
    >
      <GlowingCharacters text={dateText} />
      <span className={styles.separator}>{separatorText}</span>
      <GlowingCharacters
        characterDelay={dateText.length + separatorText.length}
        text={locationText}
      />
    </time>
  );
};
