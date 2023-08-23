import { ReactNode } from "react";
import { Button } from "../../atoms/Button";
import { Modal } from "../../atoms/Modal";
import { TextField } from "../../atoms/TextField";
import * as styles from "./RegistrationModal.css";
import { register } from "./register";

export interface RegistrationModalProps {
  trigger?: ReactNode;
}

export const RegistrationModal = (props: RegistrationModalProps) => {
  const handleRegistration = async (data: FormData) => {
    const response = await register(data);
    console.log("response", response);
  };

  return (
    <Modal ariaLabel="Register" trigger={props.trigger}>
      <h2>Register</h2>
      <form action={handleRegistration} className={styles.form}>
        <TextField label="First Name" name="firstName" />
        <TextField label="Last Name" name="lastName" />
        <TextField label="Company" name="company" />
        <TextField label="Title" name="title" />
        <TextField label="Info" name="info" />
        <TextField label="Address Line 1" name="line1" />
        <TextField label="Address Line 2" name="line2" />
        <TextField label="City" name="city" />
        <TextField label="State" name="state" />
        <TextField label="Zip" name="zip" />
        <TextField label="Country" name="country" />
        <TextField label="Phone Number" name="phone" />
        <Button type="submit">Submit</Button>
      </form>
    </Modal>
  );
};
