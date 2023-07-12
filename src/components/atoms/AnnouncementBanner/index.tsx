import type { Entry } from 'contentful';
import { useState } from 'react';
import { BsMegaphoneFill } from 'react-icons/bs/index.js';
import { FaCaretRight } from 'react-icons/fa/index.js';
import type { Event } from '../../../types';
import { Container } from '../Container';
import { Modal } from '../Modal';
import * as styles from './AnnouncementBanner.css';

export interface AnnouncementBannerProps {
  event: Entry<Event>;
}

export const AnnouncementBanner = (props: AnnouncementBannerProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!props.event.fields.announcementModal) return <></>;

  return (
    <header className={styles.banner}>
      <Container className={styles.container} size="large">
        <BsMegaphoneFill />
        <strong>{props.event.fields.announcementModal.fields.title}</strong>
        <button
          className={styles.cta}
          onClick={() => setIsModalOpen(true)}
          type="button"
        >
          Read More <FaCaretRight />
        </button>
        {isModalOpen && (
          <Modal
            {...props.event.fields.announcementModal.fields}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </Container>
    </header>
  );
};
