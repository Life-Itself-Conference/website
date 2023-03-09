import classNames from 'classnames';
import { mergeProps, ParentComponent, splitProps } from 'solid-js';
import type { JSX } from 'solid-js/jsx-runtime';
import * as styles from './Button.css';

export const Button: ParentComponent<ButtonProps> = (props) => {
  const mergedProps = mergeProps(defaultButtonProps, props);
  const [{ size, variant }, buttonProps] = splitProps(mergedProps, [
    'size',
    'variant',
  ]);

  return (
    <button
      {...buttonProps}
      class={classNames(
        styles.button,
        styles.size[size],
        styles.variant[variant],
      )}
      type={buttonProps.type || 'button'}
    />
  );
};

export const ButtonLink: ParentComponent<ButtonLinkProps> = (props) => {
  const mergedProps = mergeProps(defaultButtonLinkProps, props);
  const [{ size, variant }, linkProps] = splitProps(mergedProps, [
    'size',
    'variant',
  ]);

  return (
    <a
      {...linkProps}
      class={classNames(
        styles.button,
        styles.size[size],
        styles.variant[variant],
      )}
    />
  );
};

export interface ButtonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: keyof typeof styles.size;
  variant?: keyof typeof styles.variant;
}

export interface ButtonLinkProps
  extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: keyof typeof styles.size;
  variant?: keyof typeof styles.variant;
}

const defaultButtonProps: ButtonProps & {
  size: keyof typeof styles.size;
  variant: keyof typeof styles.variant;
} = {
  size: 'medium',
  variant: 'primary',
};

const defaultButtonLinkProps: ButtonLinkProps & {
  size: keyof typeof styles.size;
  variant: keyof typeof styles.variant;
} = {
  size: 'medium',
  variant: 'primary',
};
