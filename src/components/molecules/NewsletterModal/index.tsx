"use client";

import { ReactNode, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNewsletterModalStore } from "@/src/store";
import { Button } from "../../atoms/Button";
import { Modal } from "../../atoms/Modal";
import { TextField } from "../../atoms/TextField";
import * as styles from "./NewsletterModal.css";

export interface NewsletterModalProps {
  trigger?: ReactNode;
}

export const NewsletterModal = (props: NewsletterModalProps) => {
  const [isOpen, closeNewsletterModal] = useNewsletterModalStore((state) => [
    state.isOpen,
    state.closeNewsletterModal,
  ]);

  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm();

  const [message, setMessage] = useState("");

  const resetForm = () => {
    setMessage("");
    reset();
  };

  const submitForm = (values: FieldValues) =>
    new Promise<string>(async (resolve) => {
      // Create global callback function.
      // @ts-ignore
      window.handleNewsletter = (data: {
        msg: string;
        result: "error" | "success";
      }) => {
        if (data.result === "error") {
          data.msg = data.msg.split(" <a")[0];
        }

        resolve(data.msg);
      };

      // Create submit script.
      const script = document.createElement("script");
      script.src =
        "//me.us3.list-manage.com/subscribe/post?u=9ffd8880003444e617e7f70cf&id=f619c0fd26&c=handleNewsletter&FLNAME=" +
        values.name +
        "&EMAIL=" +
        values.email +
        "&b_9ffd8880003444e617e7f70cf_f619c0fd26=&subscribe=Stay+Informed&_=1592081629146";

      // Inject submit script.
      document.getElementsByTagName("head")[0].appendChild(script);
    });

  const onSubmit = async (values: FieldValues) => {
    // Reset any success messages.
    setMessage("");

    // Submit form.
    const response = await submitForm(values);

    // Show error or success.
    setMessage(response);
  };

  return (
    <Modal
      ariaLabel="Join Newsletter"
      contentClassName={styles.container}
      isOpen={isOpen}
      onClose={() => {
        closeNewsletterModal();
        resetForm();
      }}
      size="small"
      trigger={props.trigger}
    >
      {message && <p className={styles.message}>{message}</p>}
      <p>Please join our newsletter to stay informed:</p>
      <form
        id="newsletter"
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          {...register("name", { required: "Name is required" })}
          disabled={isSubmitting}
          error={errors.name?.message as string}
          label="Name"
          type="text"
        />
        <TextField
          {...register("email", { required: "Email is required" })}
          disabled={isSubmitting}
          error={errors.email?.message as string}
          label="Email"
          type="email"
        />
        <Button disabled={isSubmitting} type="submit">
          Join Newsletter
        </Button>
      </form>
    </Modal>
  );
};
