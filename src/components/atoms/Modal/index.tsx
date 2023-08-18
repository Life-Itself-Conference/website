"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { MouseEvent, PropsWithChildren, ReactNode, useState } from "react";
import { FaTimes } from "react-icons/fa";
import * as styles from "./Modal.css";

export interface ModalProps {
  ariaDescription?: string;
  ariaLabel: string;
  trigger?: ReactNode;
}

export const Modal = (props: PropsWithChildren<ModalProps>) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{props.trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content
          className={styles.content}
          aria-description={props.ariaDescription}
          aria-describedby={undefined}
          aria-label={props.ariaLabel}
          aria-labelledby={undefined}
        >
          {props.children}
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
