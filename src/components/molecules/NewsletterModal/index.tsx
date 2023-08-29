// @ts-nocheck
"use client";

import {
  FormEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNewsletterModalStore } from "@/src/store";
import { Button } from "../../atoms/Button";
import { Modal } from "../../atoms/Modal";
import { TextField } from "../../atoms/TextField";
import * as styles from "./NewsletterModal.css";

export interface NewsletterModalProps {
  trigger?: ReactNode;
}

export const NewsletterModal = (props: NewsletterModalProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isOpen, closeNewsletterModal] = useNewsletterModalStore((state) => [
    state.isOpen,
    state.closeNewsletterModal,
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const script = document.createElement("script");
    script.src =
      "//me.us3.list-manage.com/subscribe/post-json?u=9ffd8880003444e617e7f70cf&id=f619c0fd26&c=foo&FLNAME=" +
      name +
      "&EMAIL=" +
      email +
      "&b_9ffd8880003444e617e7f70cf_f619c0fd26=&subscribe=Stay+Informed&_=1592081629146";

    document.getElementsByTagName("head")[0].appendChild(script);
  };

  const handleResponse = useCallback((e) => {
    const { data } = e.detail;
    console.log("i got here with", data);
    handleReset();

    if (data.result === "error") {
      data.msg = data.msg.split(" <a")[0];
    }

    setMessage(data.msg);
  }, []);

  useEffect(() => {
    window.foo = (data) => {
      dispatchEvent(new CustomEvent("newsletter", { detail: { data } }));
    };

    window.addEventListener("newsletter", handleResponse);

    return () => {
      window.removeEventListener("newsletter", handleResponse);
      window.foo = undefined;
    };
  }, [handleResponse]);

  return (
    <Modal
      ariaLabel="Join Newsletter"
      contentClassName={styles.container}
      isOpen={isOpen}
      onClose={() => {
        closeNewsletterModal();
        handleReset();
      }}
      size="small"
      trigger={props.trigger}
    >
      {message && <p className={styles.message}>{message}</p>}
      <p>Please join our newsletter to stay informed:</p>
      <form
        id="newsletter"
        className={styles.form}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <TextField
          label="Name"
          onChange={(e) => setName(e.target.value)}
          name="name"
          type="text"
          value={name}
        />
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          value={email}
        />
        <Button>Join Newsletter</Button>
      </form>
    </Modal>
  );
};
