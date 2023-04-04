import { keyframes, style } from '@vanilla-extract/css';

const glowKeyFrames = keyframes({
  '92%': { textShadow: 'none' },
  '100%': {
    textShadow:
      '2px 2px 5px #fffcc3, -2px -2px 5px #fffcc3, -2px 2px 5px #fffcc3, 2px -2px 5px #fffcc3',
  },
});

export const character = style({
  animation: `${glowKeyFrames} 2s infinite alternate`,
});
