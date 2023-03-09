/* eslint-disable solid/no-innerhtml */
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import type { Entry } from 'contentful';
import { Component, For } from 'solid-js';
import type { Speaker } from '../../../types';
import { Modal, ModalProps } from '../../atoms/Modal';
import * as styles from './SpeakerModal.css';

export const SpeakerModal: Component<SpeakerModalProps> = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div class={styles.grid}>
        <header class={styles.header}>
          <b>{props.speaker.fields.name}</b>
          <For each={props.speaker.fields.title}>
            {(item) => (
              <>
                <b>{item.fields.organization}</b>
                <span>{item.fields.title}</span>
              </>
            )}
          </For>
        </header>
        <section class={styles.content}>
          <h2>{props.speaker.fields.topic}</h2>
          <div innerHTML={documentToHtmlString(props.speaker.fields.bio)} />
        </section>
        <img
          class={styles.image}
          src={props.speaker.fields.headshot[0].fields.file.url}
        />
      </div>
    </Modal>
  );
};

export interface SpeakerModalProps extends ModalProps {
  speaker: Entry<Speaker>;
}
