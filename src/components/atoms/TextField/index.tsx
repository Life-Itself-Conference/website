import { Component, createUniqueId, Show, splitProps } from 'solid-js';
import type { JSX } from 'solid-js/jsx-runtime';
import * as styles from './TextField.css';

export const TextField: Component<TextFieldProps> = (props) => {
  const id = createUniqueId();
  const [{ label }, inputProps] = splitProps(props, ['label']);

  return (
    <div class={styles.container}>
      <input
        {...inputProps}
        class={styles.input}
        id={props.id || id}
        placeholder={props.placeholder || ' '}
        type={props.type || 'text'}
      />

      <Show when={label}>
        <label class={styles.label} for={props.id || id}>
          {label}
        </label>
      </Show>

      <Show when={props.required}>
        <span class={styles.required}>Required</span>
      </Show>
    </div>
  );
};

export interface TextFieldProps
  extends JSX.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
