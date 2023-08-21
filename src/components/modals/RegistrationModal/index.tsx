import { FormEvent, ReactNode } from "react";
import { Modal } from "../../atoms/Modal";

export interface RegistrationModalProps {
  trigger?: ReactNode;
}

export const RegistrationModal = (props: RegistrationModalProps) => {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch("/register", {
      method: "POST",
    });
    const json = await response.json();
    console.log("json", json);
  };

  return (
    <Modal ariaLabel="Register" trigger={props.trigger}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <button type="submit">Test</button>
      </form>
    </Modal>
  );
};
