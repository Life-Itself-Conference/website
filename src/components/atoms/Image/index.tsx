import classNames from 'classnames';
import { ImgHTMLAttributes, useState } from 'react';
import * as styles from './Image.css';

export const Image = (props: ImgHTMLAttributes<HTMLImageElement>) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      {...props}
      className={classNames(
        styles.image,
        isLoaded && styles.loaded,
        props.className,
      )}
      onLoad={() => setIsLoaded(true)}
    />
  );
};
