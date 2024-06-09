import Image from "next/image";
import { ReactNode } from "react";
import { Modal as ModalType } from "@/src/types";
import { Modal } from "../../atoms/Modal";
import { RichText } from "../../atoms/RichText";
import * as styles from "./GenericModal.css";

export interface GenericModalProps {
  modal: ModalType;
  trigger?: ReactNode;
}

export const GenericModal = (props: GenericModalProps) => {
  const { image } = props.modal.fields;

  return (
    <Modal
      ariaLabel="Generic Modal"
      contentClassName={styles.container}
      trigger={props.trigger}
    >
      <div className={styles.grid}>
        <div>
          {image?.fields.file && (
            <Image
              alt=""
              className={styles.image}
              height={image.fields.file.details.image?.height}
              src={`${image.fields.file.url}?fm=webp`}
              width={image.fields.file.details.image?.width}
            />
          )}
        </div>
        <div className={styles.content}>
          <h2>{props.modal.fields.title}</h2>
          <RichText field={props.modal.fields.description} />
        </div>
      </div>
    </Modal>
  );
};
