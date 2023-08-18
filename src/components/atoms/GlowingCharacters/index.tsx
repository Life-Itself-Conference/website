import { useMemo } from "react";
import * as styles from "./GlowingCharacters.css";

export interface GlowingCharactersProps extends Record<string, any> {
  characterDelay?: number;
  className?: string;
  tag?: any;
  text?: string;
}

export const GlowingCharacters = ({
  characterDelay = 0,
  className,
  tag: Tag = "span",
  text,
  ...attributes
}: GlowingCharactersProps) => {
  const characters = useMemo(() => {
    let count = 0;

    return text?.split("").map((character, index) => (
      <span
        className={styles.character}
        key={`${character}.${index}`}
        style={
          character !== " "
            ? {
                animationDelay: `calc(${(characterDelay + count++) * 10}ms)`,
              }
            : {}
        }
      >
        {character}
      </span>
    ));
  }, [characterDelay, text]);

  if (!characters) return null;

  return (
    <Tag className={className} key={text} {...attributes}>
      {characters}
    </Tag>
  );
};
