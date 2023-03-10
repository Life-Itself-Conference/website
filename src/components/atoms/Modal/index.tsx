import { onCleanup, ParentComponent } from 'solid-js';
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

  createEffect(() => {
    if (props.isOpen) {
      const handleClick = (e: PointerEvent) => {
        if (e.target === dialog || dialog?.contains(e.target)) {
          return;
        }

        props.onClose?.();
      };

      document.addEventListener('pointerdown', handleClick);

      onCleanup(() => document.removeEventListener('pointerdown', handleClick));
    }
  });

  return (
    <dialog class={styles.dialog} ref={dialog}>
      <header class={styles.header}>
        <button onClick={() => props.onClose?.()} type="button">
          Close
        </button>
      </header>
      <div class={styles.content}>{props.children}</div>
    </dialog>
  );
};

export interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}
