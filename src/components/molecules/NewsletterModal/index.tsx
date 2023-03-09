import { useStore } from '@nanostores/solid';
import type { Component } from 'solid-js';
import { isNewsletterModalOpen } from '../../../stores/newsletter';
import { Button } from '../../atoms/Button';
import { Modal } from '../../atoms/Modal';
import { TextField } from '../../atoms/TextField';
import * as styles from './NewsletterModal.css';

export const NewsletterModal: Component = () => {
  const $isNewsletterModalOpen = useStore(isNewsletterModalOpen);

  return (
    <Modal
      isOpen={$isNewsletterModalOpen()}
      onClose={() => isNewsletterModalOpen.set(false)}
    >
      <p>Please join our newsletter to stay informed:</p>
      <form class={styles.form}>
        <TextField label="Name" />
        <TextField label="Email Address" type="email" />
        <Button>Join Newsletter</Button>
      </form>
    </Modal>
  );
};
