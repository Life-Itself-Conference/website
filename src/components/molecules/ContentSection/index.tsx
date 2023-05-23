import type { Document } from '@contentful/rich-text-types';
import classNames from 'classnames';
import type { PropsWithChildren } from 'react';
import { Container } from '../../atoms/Container';
import type { ContainerProps } from '../../atoms/Container';
import { RichText } from '../../atoms/RichText';
import { Title } from '../../atoms/Title';
import * as styles from './ContentSection.css';

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
        {props.subtitle &&
          (typeof props.subtitle === 'string' ? (
            <p>{props.subtitle}</p>
          ) : (
            <RichText field={props.subtitle} />
          ))}
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
  subtitle?: Document | string;
  title: string;
}
