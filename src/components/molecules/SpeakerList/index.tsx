import type { Entry } from 'contentful';
import { Component, createSignal, For } from 'solid-js';
import type { Speaker } from '../../../types';
import { SpeakerThumbnail } from '../SpeakerThumbnail';
import { SpeakerModal } from '../SpeakerModal';
import * as styles from './SpeakerList.css';

export const SpeakerList: Component<SpeakerListProps> = (props) => {
  const [activeSpeakerId, setActiveSpeakerId] = createSignal();

  return (
    <ul class={styles.list}>
      <For each={props.speakers}>
        {(item) => (
          <li>
            <SpeakerThumbnail onClick={setActiveSpeakerId} speaker={item} />
            <SpeakerModal
              isOpen={activeSpeakerId() === item.fields.id}
              onClose={() => setActiveSpeakerId()}
              speaker={item}
            />
          </li>
        )}
      </For>
    </ul>
  );
};

export interface SpeakerListProps {
  speakers: Entry<Speaker>[];
}
