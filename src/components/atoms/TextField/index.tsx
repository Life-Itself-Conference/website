import { ComponentProps, useId } from "react";
import * as styles from "./TextField.css";

export interface TextFieldProps extends ComponentProps<"input"> {
  label?: string;
}

export const TextField = ({ label, ...inputProps }: TextFieldProps) => {
  const id = useId();

  return (
    <div className={styles.container}>
      <input {...inputProps} className={styles.input} placeholder="" id={id} />
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};
