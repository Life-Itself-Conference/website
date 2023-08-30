import { ComponentProps, forwardRef, useId } from "react";
import * as styles from "./TextField.css";

export interface TextFieldProps extends ComponentProps<"input"> {
  error?: string;
  label?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, ...inputProps }, ref) => {
    const id = useId();

    return (
      <div className={styles.container}>
        {error && <span className={styles.error}>{error}</span>}
        <input
          {...inputProps}
          className={styles.input}
          placeholder=""
          id={id}
          ref={ref}
        />
        {label && (
          <label className={styles.label} htmlFor={id}>
            {label}
          </label>
        )}
      </div>
    );
  }
);
TextField.displayName = "TextField";
