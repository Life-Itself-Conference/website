import classNames from 'classnames';
import { FaSolidX } from 'solid-icons/fa';
import { createEffect, onCleanup, ParentComponent } from 'solid-js';
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
    <dialog
      class={classNames(
        styles.dialog,
        props.size && styles.size[props.size],
        props.variant && styles.variant[props.variant],
        props.class,
      )}
      ref={dialog}
    >
      <header class={styles.header}>
        <img class={styles.logo} src="/life-itself.png" />
        <button
          aria-label="Close"
          class={styles.close}
          onClick={() => props.onClose?.()}
          type="button"
        >
          <FaSolidX />
        </button>
      </header>
      <div class={styles.content}>{props.children}</div>
    </dialog>
  );
};

export interface ModalProps {
  class?: string;
  isOpen?: boolean;
  onClose?: () => void;
  size?: keyof typeof styles.size;
  variant?: keyof typeof styles.variant;
}
