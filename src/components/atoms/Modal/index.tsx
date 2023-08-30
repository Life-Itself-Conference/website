"use client";

import * as Dialog from "@radix-ui/react-dialog";
import clsx from "clsx";
import { PropsWithChildren, ReactNode } from "react";
import { FaTimes } from "react-icons/fa";
import * as styles from "./Modal.css";

export interface ModalProps {
  ariaDescription?: string;
  ariaLabel: string;
  className?: string;
  contentClassName?: string;
  isOpen?: boolean;
  onClose?: VoidFunction;
  size?: keyof typeof styles.dialog;
  trigger?: ReactNode;
}

export const Modal = (props: PropsWithChildren<ModalProps>) => {
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      props.onClose?.();
    }
  };

  return (
    <Dialog.Root open={props.isOpen} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content
          className={clsx(
            styles.dialog[props.size || "medium"],
            props.className
          )}
          aria-description={props.ariaDescription}
          aria-describedby={undefined}
          aria-label={props.ariaLabel}
          aria-labelledby={undefined}
        >
          <div className={clsx(styles.content, props.contentClassName)}>
            {props.children}
          </div>
          <Dialog.Close asChild>
            <button aria-label="Close" className={styles.close} type="button">
              <FaTimes />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
