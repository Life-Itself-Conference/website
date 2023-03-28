import type { Entry } from 'contentful';
import { Component, createMemo, createSignal, For, Show } from 'solid-js';
import type { Speaker } from '../../../types';
import { SpeakerThumbnail } from '../SpeakerThumbnail';
import { SpeakerModal } from '../SpeakerModal';
import * as styles from './SpeakerList.css';

export const SpeakerList: Component<SpeakerListProps> = (props) => {
  const [activeSpeakerId, setActiveSpeakerId] = createSignal();
  const activeSpeaker = createMemo(() =>
    props.speakers.find((speaker) => speaker.fields.id === activeSpeakerId()),
  );

  return (
    <ul class={styles.list}>
      <For each={props.speakers}>
        {(item) => (
          <li>
            <SpeakerThumbnail onClick={setActiveSpeakerId} speaker={item} />
          </li>
        )}
      </For>
      <Show when={activeSpeaker()}>
        <SpeakerModal
          isOpen
          onClose={() => setActiveSpeakerId()}
          speaker={activeSpeaker()}
        />
      </Show>
    </ul>
  );
};

export interface SpeakerListProps {
  speakers: Entry<Speaker>[];
}
