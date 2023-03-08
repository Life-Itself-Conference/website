import type { ParentComponent } from 'solid-js';
import { Container } from '../../atoms/Container';
import type { ContainerProps } from '../../atoms/Container';
import { Title } from '../../atoms/Title';
import * as styles from './ContentSection.css';
import classNames from 'classnames';

export const ContentSection: ParentComponent<ContentSectionProps> = (props) => (
  <section class={classNames(styles.section, props.class)} id={props.id}>
    <header>
      <Title tag={props.isHero ? 'h1' : 'h2'}>{props.title}</Title>
      <Container size={props.size}>
        {props.subtitle && <p>{props.subtitle}</p>}
      </Container>
    </header>
    <Container size={props.size}>{props.children}</Container>
  </section>
);

export interface ContentSectionProps {
  class?: string;
  id?: string;
  isHero?: boolean;
  size?: ContainerProps['size'];
  subtitle?: string;
  title: string;
}
