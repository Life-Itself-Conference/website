import type { Document } from '@contentful/rich-text-types';
import type { Asset } from 'contentful';
import { FaTimes } from 'react-icons/fa';
import { RichText } from '../RichText';
import * as styles from './Modal.css';

export interface ModalProps {
  description: Document;
  image: Asset;
  onClose: () => void;
  title: string;
}

export const Modal = ({ description, image, onClose, title }: ModalProps) => {
  return (
    <dialog className={styles.wrapper} open>
      <div className={styles.dialog}>
        <header className={styles.header}>
          <button className={styles.close} onClick={onClose} type="button">
            <FaTimes />
          </button>
        </header>
        <div className={styles.content}>
          <img alt="" src={image.fields.file.url} />
          <h2>{title}</h2>
          <RichText field={description} />
        </div>
      </div>
    </dialog>
  );
};
