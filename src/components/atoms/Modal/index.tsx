import type { Document } from '@contentful/rich-text-types';
import type { Asset } from 'contentful';
import { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa/index.js';
import { Image } from '../Image';
import { RichText } from '../RichText';
import * as styles from './Modal.css';

export interface ModalProps {
  description: Document;
  image: Asset;
  onClose: () => void;
  title: string;
}

export const Modal = ({ description, image, onClose, title }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (
        e.target === modalRef ||
        modalRef.current?.contains(e.target as Node)
      ) {
        return;
      }

      onClose?.();
    };

    document.addEventListener('pointerdown', handleClick);

    return () => {
      document.removeEventListener('pointerdown', handleClick);
    };
  }, [onClose]);

  return (
    <dialog className={styles.wrapper} open>
      <div className={styles.dialog} ref={modalRef}>
        <header className={styles.header}>
          <button className={styles.close} onClick={onClose} type="button">
            <FaTimes />
          </button>
        </header>
        <Image alt="" className={styles.image} src={image.fields.file.url} />
        <div className={styles.content}>
          <h2>{title}</h2>
          <RichText field={description} />
        </div>
      </div>
    </dialog>
  );
};
