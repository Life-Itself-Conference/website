import type { Entry } from 'contentful';
import { Fragment } from 'react';
import type { Speaker } from '../../../types';
import { GenericModal, GenericModalProps } from '../../atoms/GenericModal';
import { Image } from '../../atoms/Image';
import { RichText } from '../../atoms/RichText';
import * as styles from './SpeakerModal.css';

export const SpeakerModal = (props: SpeakerModalProps) => {
  return (
    <GenericModal
      className={styles.modal}
      onClose={props.onClose}
      variant="condensed"
    >
      <div className={styles.grid}>
        <header className={styles.header}>
          <b>{props.speaker?.fields.name}</b>
          {props.speaker?.fields.title.map((item) => (
            <Fragment key={item.fields.id}>
              <small>{item.fields.organization}</small>
              <small>{item.fields.title}</small>
            </Fragment>
          ))}
        </header>

        <section className={styles.content}>
          {props.speaker?.fields.topic && (
            <h2>{props.speaker?.fields.topic}</h2>
          )}
          {props.speaker?.fields.bio && (
            <RichText className={styles.bio} field={props.speaker.fields.bio} />
          )}
        </section>

        <div className={styles.image}>
          <Image
            alt={`${props.speaker?.fields.name} headshot`}
            src={
              props.speaker?.fields.headshot?.find(
                (image) => image.fields.title === 'modal',
              )?.fields.file.url || '/no-image.png'
            }
          />
        </div>
      </div>
    </GenericModal>
  );
};

export interface SpeakerModalProps extends GenericModalProps {
  speaker?: Entry<Speaker>;
}
