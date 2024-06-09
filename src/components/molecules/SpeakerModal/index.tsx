"use client";

import Image from "next/image";
import { useSpeakerModalStore } from "@/src/store";
import { Modal } from "../../atoms/Modal";
import { RichText } from "../../atoms/RichText";
import * as styles from "./SpeakerModal.css";

export const SpeakerModal = () => {
  const { isOpen, speaker, closeSpeakerModal } = useSpeakerModalStore(
    (state) => ({
      isOpen: state.isOpen,
      speaker: state.speaker,
      closeSpeakerModal: state.closeSpeakerModal,
    })
  );

  const headshot = speaker?.fields.headshot?.find(
    (image) => image?.fields.title === "modal"
  );

  return (
    <Modal
      ariaLabel="Speaker"
      contentClassName={styles.container}
      isOpen={isOpen}
      onClose={closeSpeakerModal}
    >
      {speaker && (
        <>
          <header className={styles.header}>
            <h2 className={styles.name}>
              {speaker.fields.alternateName || speaker.fields.name}
            </h2>
            {speaker.fields.titles && speaker.fields.titles.length > 0 && (
              <ul className={styles.details}>
                {speaker?.fields.titles?.map((title, index) => {
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
            {speaker.fields.topic && (
              <p className={styles.topic}>{speaker.fields.topic}</p>
            )}
            <RichText field={speaker.fields.description} />
          </div>
          <div className={styles.image}>
            <Image
              alt=""
              height={headshot?.fields.file?.details?.image?.height}
              src={`${headshot?.fields.file?.url}?fm=webp`}
              width={headshot?.fields.file?.details?.image?.width}
            />
          </div>
        </>
      )}
    </Modal>
  );
};
