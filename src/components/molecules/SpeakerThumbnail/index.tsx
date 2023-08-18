import Image from "next/image";
import { useMemo, useRef } from "react";
import { Speaker } from "@/src/types";
import { Button } from "../../atoms/Button";
import { SpeakerModal } from "../../modals/SpeakerModal";
import * as styles from "./SpeakerThumbnail.css";

export interface SpeakerThumbnailProps {
  speaker: Speaker;
}

export const SpeakerThumbnail = ({ speaker }: SpeakerThumbnailProps) => {
  const image = useMemo(
    () =>
      speaker.fields.headshot?.find(
        (image) => image?.fields.title === "thumbnail"
      ),
    [speaker]
  );

  return (
    <div className={styles.container}>
      {image ? (
        <Image
          alt={`${speaker?.fields.name} Headshot`}
          className={styles.image}
          fill
          src={image.fields.file?.url as string}
        />
      ) : (
        <Image
          alt={`${speaker.fields.name} headshot`}
          className={styles.placeholderImage}
          fill
          src="/more-to-come.png"
        />
      )}

      <div className={styles.content}>
        <span className={styles.name}>
          <b>{speaker.fields.name}</b>
        </span>
        <div className={styles.details}>
          <ul className={styles.list}>
            {speaker.fields.titles?.map((title, index) => {
              const [role, organization] = title.split("|");

              return (
                <li className={styles.item} key={index}>
                  {organization && <strong>{organization.trim()}</strong>}
                  <span>{role.trim()}</span>
                </li>
              );
            })}
          </ul>

          <SpeakerModal
            speaker={speaker}
            trigger={
              <Button
                className={styles.button}
                size="xsmall"
                variant="secondary"
              >
                Topic &amp; Bio
              </Button>
            }
          />
        </div>
      </div>
    </div>
  );
};
