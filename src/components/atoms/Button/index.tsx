import clsx from "clsx";
import Link from "next/link";
import { ComponentProps, forwardRef } from "react";
import * as styles from "./Button.css";

interface CommonButtonProps {
  size?: keyof typeof styles.size;
  variant?: keyof typeof styles.variant;
}

export type ButtonProps = ComponentProps<"button"> & CommonButtonProps;
export type ButtonLinkProps = ComponentProps<typeof Link> & CommonButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      size = "medium",
      variant = "primary",
      ...buttonProps
    } = props;

    return (
      <button
        {...buttonProps}
        className={clsx(
          className,
          styles.button,
          styles.size[size],
          styles.variant[variant]
        )}
        ref={ref}
      />
    );
  }
);
Button.displayName = "Button";

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (props, ref) => {
    const {
      className,
      size = "medium",
      variant = "primary",
      ...linkProps
    } = props;

    return (
      <Link
        {...linkProps}
        className={clsx(
          className,
          styles.button,
          styles.size[size],
          styles.variant[variant]
        )}
        ref={ref}
      />
    );
  }
);
ButtonLink.displayName = "ButtonLink";
