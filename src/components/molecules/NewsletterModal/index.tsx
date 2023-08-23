import { FormEvent, ReactNode, useRef, useState } from "react";
import { Button } from "../../atoms/Button";
import { Modal } from "../../atoms/Modal";
import { TextField } from "../../atoms/TextField";
import * as styles from "./NewsletterModal.css";
import { subscribe } from "./subscribe";

export interface NewsletterModalProps {
  trigger?: ReactNode;
}

export const NewsletterModal = (props: NewsletterModalProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string>();

  const handleSubscribe = async (data: FormData) => {
    const response = await subscribe(data);

    if (response.message) {
      setMessage(response.message);
      formRef.current?.reset();
    }
  };

  return (
    <Modal
      ariaLabel="Join Newsletter"
      contentClassName={styles.container}
      size="small"
      trigger={props.trigger}
    >
      {message && <p className={styles.message}>{message}</p>}
      <p>Please join our newsletter to stay informed:</p>
      <form action={handleSubscribe} className={styles.form} ref={formRef}>
        <TextField label="Name" name="name" type="text" />
        <TextField label="Email" name="email" type="email" />
        <Button>Join Newsletter</Button>
      </form>
    </Modal>
  );
};
