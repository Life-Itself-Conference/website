import classNames from 'classnames';
import type { PropsWithChildren } from 'react';
import * as styles from './Title.css';

export const Title = (props: PropsWithChildren<TitleProps>) => {
  const { tag: Tag = 'h1' } = props;

  return (
    <Tag className={classNames(styles.title, styles.tag[Tag])}>
      <span>{props.children}</span>
    </Tag>
  );
};

export interface TitleProps {
  tag?: keyof typeof styles.tag;
}
