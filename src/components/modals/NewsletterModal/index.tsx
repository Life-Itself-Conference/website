import { ReactNode } from "react";
import { Modal } from "../../atoms/Modal";

export interface NewsletterModalProps {
  trigger?: ReactNode;
}

export const NewsletterModal = (props: NewsletterModalProps) => (
  <Modal ariaLabel="Join Newsletter" trigger={props.trigger}>
    <h2>Join Newsletter</h2>
    <p>Lorem ipsum dolor sit amet</p>
  </Modal>
);
