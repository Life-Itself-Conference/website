import type { Entry } from 'contentful';
import { useMemo } from 'react';
import type { Speaker } from '../../../types';
import { Button } from '../../atoms/Button';
import * as styles from './SpeakerThumbnail.css';

export const SpeakerThumbnail = (props: SpeakerThumbnailProps) => {
  const image = useMemo(
    () =>
      props.speaker.fields.headshot?.find(
        (image) => image.fields.title === 'thumbnail',
      ),
    [props.speaker],
  );

  const handleClick = () => props.onClick?.(props.speaker.fields.id);

  return (
    <div className={styles.container}>
      {image ? (
        <img
          alt={`${props.speaker.fields.name} headshot`}
          className={styles.image}
          src={image.fields.file.url}
        />
      ) : (
        <img
          alt={`${props.speaker.fields.name} headshot`}
          className={styles.placeholderImage}
          src="/more-to-come.png"
        />
      )}

      <div className={styles.content}>
        <span className={styles.name}>
          <b>{props.speaker.fields.name}</b>
        </span>
        <div className={styles.details}>
          {props.speaker.fields.title.map((title, index) => (
            <div key={title.fields.id || index}>
              {title.fields.organization && (
                <>
                  <small>
                    <b>{title.fields.organization}</b>
                  </small>
                  <br />
                </>
              )}
              <span>{title.fields.title}</span>
            </div>
          ))}
          <Button
            className={styles.button}
            onClick={handleClick}
            size="xsmall"
            variant="secondary"
          >
            Topic &amp; Bio
          </Button>
        </div>
      </div>
    </div>
  );
};

export interface SpeakerThumbnailProps {
  // eslint-disable-next-line
  onClick?: (id: number) => void;
  speaker: Entry<Speaker>;
}
