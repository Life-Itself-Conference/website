import type { ParentComponent } from 'solid-js';
import { createEffect } from 'solid-js';
import * as styles from './Modal.css';

export const Modal: ParentComponent<ModalProps> = (props) => {
  let dialog: HTMLDialogElement | undefined = undefined;

  createEffect(() => {
    if (props.isOpen) {
      dialog?.showModal();
    } else {
      dialog?.close();
    }
  });

  return (
    <dialog class={styles.dialog} ref={dialog}>
      <header class={styles.header}>
        <button onClick={() => props.onClose?.()} type="button">
          Close
        </button>
      </header>
      {props.children}
    </dialog>
  );
};

export interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}
