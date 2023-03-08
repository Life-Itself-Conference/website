import type { Entry } from 'contentful';
import type { Component } from 'solid-js';
import type { Speaker } from '../../../types';
import * as styles from './Speaker.css';

export const SpeakerBlock: Component<SpeakerBlockProps> = (props) => (
  <div class={styles.container}>
    <div>
      <img src={props.speaker.fields.headshot[0].fields.file.url} />
      <p>
        <b>{props.speaker.fields.name}</b>
        <br />
        {props.speaker.fields.title[0].fields.organization &&
          `${props.speaker.fields.title[0].fields.organization}<br />`}
        {props.speaker.fields.title[0].fields.title}
      </p>
    </div>
  </div>
);

export interface SpeakerBlockProps {
  speaker: Entry<Speaker>;
}
