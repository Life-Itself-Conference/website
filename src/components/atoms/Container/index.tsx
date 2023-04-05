import classNames from 'classnames';
import type { PropsWithChildren } from 'react';
import * as styles from './Container.css';

export const Container = (props: PropsWithChildren<ContainerProps>) => (
  <div
    className={classNames(
      styles.container,
      props.size && styles.size[props.size],
      props.className,
    )}
  >
    {props.children}
  </div>
);

export interface ContainerProps {
  className?: string;
  size?: keyof typeof styles.size;
}
