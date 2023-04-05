import { Container } from '../../atoms/Container';
import type { ContainerProps } from '../../atoms/Container';
import { Title } from '../../atoms/Title';
import * as styles from './ContentSection.css';
import classNames from 'classnames';
import type { PropsWithChildren } from 'react';

export const ContentSection = (
  props: PropsWithChildren<ContentSectionProps>,
) => (
  <section
    className={classNames(styles.section, props.className)}
    id={props.id}
  >
    <header>
      <Title tag={props.isHero ? 'h1' : 'h2'}>{props.title}</Title>
      <Container size={props.size}>
        {props.subtitle && <p>{props.subtitle}</p>}
      </Container>
    </header>
    <Container className={props.contentClassName} size={props.size}>
      {props.children}
    </Container>
  </section>
);

export interface ContentSectionProps {
  className?: string;
  contentClassName?: string;
  id?: string;
  isHero?: boolean;
  size?: ContainerProps['size'];
  subtitle?: string;
  title: string;
}
