import { createSignal } from 'solid-js';
import type { Component } from 'solid-js';
import { Button } from '../../atoms/Button';
import { Modal } from '../../atoms/Modal';
import { TextField } from '../../atoms/TextField';
import * as styles from './NewsletterModal.css';

export const [isNewsletterModalOpen, setIsNewsletterModalOpen] =
  createSignal(false);

export const NewsletterModal: Component = () => (
  <Modal
    isOpen={isNewsletterModalOpen()}
    onClose={() => setIsNewsletterModalOpen(false)}
    size="small"
  >
    <p>Please join our newsletter to stay informed:</p>
    <form class={styles.form}>
      <TextField label="Name" />
      <TextField label="Email Address" type="email" />
      <Button>Join Newsletter</Button>
    </form>
  </Modal>
);
