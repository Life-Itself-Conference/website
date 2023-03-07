import type { ParentComponent } from 'solid-js';
import { Container } from '../../atoms/Container';
import type { ContainerProps } from '../../atoms/Container';
import { Title } from '../../atoms/Title';
import * as styles from './ContentSection.css';

export const ContentSection: ParentComponent<ContentSectionProps> = (props) => (
  <section class={styles.section}>
    <header class={styles.header}>
      <Title tag="h1">{props.title}</Title>
      <Container size={props.size}>
        {props.subtitle && <p>{props.subtitle}</p>}
      </Container>
    </header>
    <Container class={styles.content} size={props.size}>
      {props.children}
    </Container>
  </section>
);

export interface ContentSectionProps {
  size?: ContainerProps['size'];
  subtitle?: string;
  title: string;
}
