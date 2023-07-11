import { useStore } from '@nanostores/react';
import { useEffect } from 'react';
import { isNewsletterModalOpen } from '../../../stores';
import { Button } from '../../atoms/Button';
import { GenericModal } from '../../atoms/GenericModal';
import { TextField } from '../../atoms/TextField';
import * as styles from './NewsletterModal.css';

export const NewsletterModal = () => {
  const $isNewsletterModalOpen = useStore(isNewsletterModalOpen);

  useEffect(() => {
    const links = document.querySelectorAll('a[href*="modal=newsletter"]');

    const handleClick = (e: Event) => {
      e.preventDefault();
      isNewsletterModalOpen.set(true);
    };

    for (const link of Array.from(links)) {
      link?.addEventListener('click', handleClick);
    }

    return () => {
      for (const link of Array.from(links)) {
        link?.removeEventListener('click', handleClick);
      }
    };
  }, [$isNewsletterModalOpen]);

  if (!$isNewsletterModalOpen) return null;

  return (
    <GenericModal onClose={() => isNewsletterModalOpen.set(false)} size="small">
      <p>Please join our newsletter to stay informed:</p>
      <form className={styles.form}>
        <TextField label="Name" />
        <TextField label="Email Address" type="email" />
        <Button>Join Newsletter</Button>
      </form>
    </GenericModal>
  );
};
