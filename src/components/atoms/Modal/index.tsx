import type { ParentComponent } from 'solid-js';
import { createEffect, createSignal } from 'solid-js';
import * as styles from './Modal.css';

export const Modal: ParentComponent<ModalProps> = (props) => {
  const [isOpen, setIsOpen] = createSignal(false);

  createEffect(() => setIsOpen(props.isOpen || false));

  return (
    <dialog class={styles.dialog} open={isOpen()}>
      <button onClick={() => props.onClose?.()} type="button">
        Close
      </button>
      {props.children}
    </dialog>
  );
};

export interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}
