import Image from "next/image";
import { ReactNode } from "react";
import { Speaker } from "@/src/types";
import { Modal } from "../../atoms/Modal";
import { RichText } from "../../atoms/RichText";
import * as styles from "./SpeakerModal.css";

export interface SpeakerModalProps {
  speaker: Speaker;
  trigger?: ReactNode;
}

export const SpeakerModal = (props: SpeakerModalProps) => {
  const headshot = props.speaker.fields.headshot?.find(
    (image) => image?.fields.title === "modal"
  );

  return (
    <Modal
      ariaLabel="Speaker"
      contentClassName={styles.container}
      trigger={props.trigger}
    >
      <header className={styles.header}>
        <h2 className={styles.name}>
          {props.speaker.fields.alternateName || props.speaker.fields.name}
        </h2>
        {props.speaker.fields.titles &&
          props.speaker.fields.titles.length > 0 && (
            <ul className={styles.details}>
              {props.speaker?.fields.titles?.map((title, index) => {
                const [role, organization] = title.split("|");

                return (
                  <li className={styles.detail} key={index}>
                    {organization && <strong>{organization.trim()}</strong>}
                    <span>{role.trim()}</span>
                  </li>
                );
              })}
            </ul>
          )}
      </header>
      <div className={styles.content}>
        {props.speaker.fields.topic && (
          <p className={styles.topic}>{props.speaker.fields.topic}</p>
        )}
        <RichText field={props.speaker.fields.description} />
      </div>
      <div className={styles.image}>
        <Image
          alt=""
          height={headshot?.fields.file?.details?.image?.height}
          src={headshot?.fields.file?.url as string}
          width={headshot?.fields.file?.details?.image?.width}
        />
      </div>
    </Modal>
  );
};
