import classNames from 'classnames';
import { mergeProps, ParentComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import * as styles from './Title.css';

export const Title: ParentComponent<TitleProps> = (props) => {
  const defaultedProps = mergeProps({ tag: 'h1' } satisfies TitleProps, props);

  return (
    <Dynamic
      class={classNames(styles.title, styles.tag[defaultedProps.tag])}
      component={defaultedProps.tag}
    >
      <span>{props.children}</span>
    </Dynamic>
  );
};

export interface TitleProps {
  tag?: keyof typeof styles.tag;
}
