import classNames from 'classnames';
import * as focusTrap from 'focus-trap';
import { PropsWithChildren, useEffect, useId, useRef } from 'react';
import { FaTimes } from 'react-icons/fa/index.js';
import * as styles from './Modal.css';

const modals = new Set();

export const Modal = (props: PropsWithChildren<ModalProps>) => {
  const id = useId();
  let modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current: modal } = modalRef;

    if (modal) {
      const trap = focusTrap.createFocusTrap(modal);

      trap.activate();

      return () => {
        trap.deactivate();
      };
    }
  }, []);

  useEffect(() => {
    modals.add(id);
    document.body.classList.toggle('modal-open', modals.size > 0);

    return () => {
      modals.delete(id);
      document.body.classList.toggle('modal-open', modals.size > 0);
    };
  }, [id]);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (
        e.target === modalRef ||
        modalRef.current?.contains(e.target as Node)
      ) {
        return;
      }

      props.onClose?.();
    };

    document.addEventListener('pointerdown', handleClick);
    return () => {
      document.removeEventListener('pointerdown', handleClick);
    };
  });

  return (
    <dialog className={styles.wrapper} open>
      <div
        className={classNames(
          styles.dialog,
          props.size && styles.size[props.size],
          props.variant && styles.variant[props.variant],
          props.className,
        )}
        ref={modalRef}
      >
        <header className={styles.header}>
          <img className={styles.logo} src="/life-itself.png" />
          <button
            aria-label="Close"
            className={styles.close}
            onClick={() => props.onClose?.()}
            type="button"
          >
            <FaTimes />
          </button>
        </header>
        <div className={styles.content}>{props.children}</div>
      </div>
    </dialog>
  );
};

export interface ModalProps {
  className?: string;
  onClose?: () => void;
  size?: keyof typeof styles.size;
  variant?: keyof typeof styles.variant;
}
