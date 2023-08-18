import clsx from "clsx";
import type { PropsWithChildren } from "react";
import * as styles from "./Container.css";

export const Container = ({
  children,
  className,
  size,
}: PropsWithChildren<ContainerProps>) => (
  <div className={clsx(styles.container, size && styles.size[size], className)}>
    {children}
  </div>
);

export interface ContainerProps {
  className?: string;
  size?: keyof typeof styles.size;
}
