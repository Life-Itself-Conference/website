import { ReactNode } from "react";
import { Modal } from "../../atoms/Modal";

export interface RegistrationModalProps {
  trigger?: ReactNode;
}

export const RegistrationModal = (props: RegistrationModalProps) => (
  <Modal ariaLabel="Register" trigger={props.trigger}>
    <h2>Register</h2>
    <p>Lorem ipsum dolor sit amet</p>
  </Modal>
);
