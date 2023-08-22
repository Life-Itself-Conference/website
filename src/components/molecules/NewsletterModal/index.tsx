import { FormEvent, ReactNode } from "react";
import { Button } from "../../atoms/Button";
import { Modal } from "../../atoms/Modal";
import { TextField } from "../../atoms/TextField";
import * as styles from "./NewsletterModal.css";

export interface NewsletterModalProps {
  trigger?: ReactNode;
}

export const NewsletterModal = (props: NewsletterModalProps) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("sent");
  };

  return (
    <Modal
      ariaLabel="Join Newsletter"
      className={styles.modal}
      size="small"
      trigger={props.trigger}
    >
      <p>Please join our newsletter to stay informed:</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField label="Name" name="name" type="text" />
        <TextField label="Email" name="email" type="email" />
        <Button>Join Newsletter</Button>
      </form>
    </Modal>
  );
};
