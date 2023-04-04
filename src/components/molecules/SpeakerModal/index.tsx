/* eslint-disable solid/no-innerhtml */
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import type { Entry } from 'contentful';
import { Component, For, Show } from 'solid-js';
import type { Speaker } from '../../../types';
import { Modal, ModalProps } from '../../atoms/Modal';
import * as styles from './SpeakerModal.css';

export const SpeakerModal: Component<SpeakerModalProps> = (props) => {
  return (
    <Modal class={styles.modal} onClose={props.onClose} variant="condensed">
      <div class={styles.grid}>
        <header class={styles.header}>
          <b>{props.speaker?.fields.name}</b>
          <For each={props.speaker?.fields.title}>
            {(item) => (
              <>
                <small>{item.fields.organization}</small>
                <small>{item.fields.title}</small>
              </>
            )}
          </For>
        </header>

        <section class={styles.content}>
          <Show when={props.speaker?.fields.topic}>
            <h2>{props.speaker?.fields.topic}</h2>
          </Show>
          <div
            class={styles.bio}
            innerHTML={
              props.speaker && documentToHtmlString(props.speaker.fields.bio)
            }
          />
        </section>

        <div class={styles.image}>
          <img
            alt={`${props.speaker?.fields.name} headshot`}
            src={
              props.speaker?.fields.headshot?.find(
                (image) => image.fields.title === 'modal',
              )?.fields.file.url || '/no-image.png'
            }
          />
        </div>
      </div>
    </Modal>
  );
};

export interface SpeakerModalProps extends ModalProps {
  speaker?: Entry<Speaker>;
}
