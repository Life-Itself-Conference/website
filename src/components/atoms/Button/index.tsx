import classNames from 'classnames';
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from 'react';
import * as styles from './Button.css';

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { size = 'medium', variant = 'primary', ...buttonProps } = props;

  return (
    <button
      {...buttonProps}
      className={classNames(
        styles.button,
        size && styles.size[size],
        variant && styles.variant[variant],
        props.className,
      )}
      type={buttonProps.type || 'button'}
    />
  );
};

export const ButtonLink = (props: PropsWithChildren<ButtonLinkProps>) => {
  const { size = 'medium', variant = 'primary', ...linkProps } = props;

  return (
    <a
      {...linkProps}
      className={classNames(
        styles.button,
        size && styles.size[size],
        variant && styles.variant[variant],
        props.className,
      )}
    />
  );
};

export interface ButtonCommonProps {
  size: keyof typeof styles.size;
  variant: keyof typeof styles.variant;
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Partial<ButtonCommonProps> {
  className?: string;
}

export interface ButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    Partial<ButtonCommonProps> {
  className?: string;
}
