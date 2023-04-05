import { useMemo } from 'react';
import * as styles from './GlowingCharacters.css';

export const GlowingCharacters = (props: GlowingCharactersProps) => {
  const {
    characterDelay = 0,
    className,
    tag: Tag = 'span',
    text,
    ...attributes
  } = props;

  const characters = useMemo(() => {
    let count = 0;

    return text.split('').map((character, index) => (
      <span
        className={styles.character}
        key={`${character}.${index}`}
        style={
          character !== ' '
            ? {
                animationDelay: `calc(${(characterDelay + count++) * 10}ms)`,
              }
            : {}
        }
      >
        {character}
      </span>
    ));
  }, [text]);

  return (
    <Tag className={className} key={text} {...attributes}>
      {characters}
    </Tag>
  );
};

export interface GlowingCharactersProps extends Record<string, any> {
  characterDelay?: number;
  className?: string;
  tag?: any;
  text: string;
}
