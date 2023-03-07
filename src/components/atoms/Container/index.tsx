import classNames from 'classnames';
import type { ParentComponent } from 'solid-js';
import * as styles from './Container.css';

export const Container: ParentComponent<ContainerProps> = (props) => (
  <div
    class={classNames(
      styles.container,
      props.size && styles.size[props.size],
      props.class,
    )}
  >
    {props.children}
  </div>
);

export interface ContainerProps {
  class?: string;
  size?: keyof typeof styles.size;
}
