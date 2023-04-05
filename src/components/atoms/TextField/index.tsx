import { InputHTMLAttributes, useId } from 'react';
import * as styles from './TextField.css';

export const TextField = (props: TextFieldProps) => {
  const { label, ...inputProps } = props;
  const id = useId();

  return (
    <div className={styles.container}>
      <input
        {...inputProps}
        className={styles.input}
        id={props.id || id}
        placeholder={props.placeholder || ' '}
        type={props.type || 'text'}
      />

      {label && (
        <label className={styles.label} htmlFor={props.id || id}>
          {label}
        </label>
      )}

      {inputProps.required && <span className={styles.required}>Required</span>}
    </div>
  );
};

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
