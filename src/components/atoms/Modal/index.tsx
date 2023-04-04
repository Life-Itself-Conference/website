import classNames from 'classnames';
import * as focusTrap from 'focus-trap';
import { FaSolidX } from 'solid-icons/fa';
import { createUniqueId, onCleanup, onMount, ParentComponent } from 'solid-js';
import * as styles from './Modal.css';

const modals = new Set();

export const Modal: ParentComponent<ModalProps> = (props) => {
  const id = createUniqueId();
  let dialog: HTMLDialogElement | undefined = undefined;

  onMount(() => {
    if (dialog) {
      const trap = focusTrap.createFocusTrap(dialog);

      trap.activate();

      onCleanup(() => {
        trap.deactivate();
      });
    }
  });

  onMount(() => {
    modals.add(id);
    document.body.classList.toggle('modal-open', modals.size > 0);

    onCleanup(() => {
      modals.delete(id);
      document.body.classList.toggle('modal-open', modals.size > 0);
    });
  });

  onMount(() => {
    const handleClick = (e: PointerEvent) => {
      if (e.target === dialog || dialog?.contains(e.target as Node)) {
        return;
      }

      props.onClose?.();
    };

    document.addEventListener('pointerdown', handleClick);
    onCleanup(() => document.removeEventListener('pointerdown', handleClick));
  });

  return (
    <dialog class={styles.wrapper} open>
      <div
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
      </div>
    </dialog>
  );
};

export interface ModalProps {
  class?: string;
  onClose?: () => void;
  size?: keyof typeof styles.size;
  variant?: keyof typeof styles.variant;
}
