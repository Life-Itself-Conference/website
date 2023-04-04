import type { Component } from 'solid-js';
import { For, mergeProps, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import * as styles from './GlowingCharacters.css';

export const GlowingCharacters: Component<GlowingCharactersProps> = (props) => {
  const defaultedProps = mergeProps({ characterDelay: 0 }, props);
  const [textProps, attributes] = splitProps(defaultedProps, [
    'children',
    'characterDelay',
    'class',
    'tag',
    'text',
  ]);

  let count = 0;

  return (
    <Dynamic
      class={textProps.class}
      component={textProps.tag || 'span'}
      {...attributes}
    >
      <For each={textProps.text.split('')}>
        {(character) => (
          <span
            class={styles.character}
            style={
              character !== ' '
                ? {
                    'animation-delay': `calc(${
                      (defaultedProps.characterDelay + count++) * 10
                    }ms)`,
                  }
                : {}
            }
          >
            {character}
          </span>
        )}
      </For>
    </Dynamic>
  );
};

export interface GlowingCharactersProps extends Record<string, any> {
  characterDelay?: number;
  class?: string;
  tag?: string;
  text: string;
}
