import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";
import { Container, ContainerProps } from "../../atoms/Container";
import * as styles from "./ContentSection.css";

export interface ContentSectionProps extends HTMLAttributes<HTMLElement> {
  contentClassName?: string;
  size?: ContainerProps["size"];
  title?: string;
  titleLarge?: boolean;
}

export const ContentSection = ({
  children,
  contentClassName,
  size,
  title,
  titleLarge = false,
  ...rest
}: PropsWithChildren<ContentSectionProps>) => {
  return (
    <section {...rest}>
      {title && (
        <h2 className={clsx(styles.title[titleLarge ? "large" : "medium"])}>
          <span>{title}</span>
        </h2>
      )}
      <Container className={clsx(styles.content, contentClassName)} size={size}>
        {children}
      </Container>
    </section>
  );
};
