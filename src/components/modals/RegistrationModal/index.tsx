import { ReactNode } from "react";
import { Modal } from "../../atoms/Modal";

export interface RegistrationModalProps {
  trigger?: ReactNode;
}

export const RegistrationModal = (props: RegistrationModalProps) => (
  <Modal ariaLabel="Register" trigger={props.trigger}>
    <h2>Register</h2>
    <form action="/register" method="POST">
      <button type="submit">Test</button>
    </form>
  </Modal>
);
