import { Component, splitProps } from 'solid-js';
import type { JSX } from 'solid-js/jsx-runtime';
import * as styles from './TextField.css';

export const TextField: Component<TextFieldProps> = (props) => {
  const [{ label }, inputProps] = splitProps(props, ['label']);

  return (
    <div class={styles.container}>
      <input
        {...inputProps}
        class={styles.input}
        placeholder={props.placeholder || ' '}
        type={props.type || 'text'}
      />
      {label && <label class={styles.label}>{label}</label>}
    </div>
  );
};

export interface TextFieldProps
  extends JSX.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
