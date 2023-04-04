import type { Entry } from 'contentful';
import { Component, createMemo, createSignal, For, Show } from 'solid-js';
import type { Speaker } from '../../../types';
import { SpeakerThumbnail } from '../SpeakerThumbnail';
import { SpeakerModal } from '../SpeakerModal';
import * as styles from './SpeakerList.css';
import { Button } from '../../atoms/Button';
import classNames from 'classnames';
import { isNewsletterModalOpen } from '../../../stores/newsletter';

export const SpeakerList: Component<SpeakerListProps> = (props) => {
  const [activeSpeakerId, setActiveSpeakerId] = createSignal();
  const activeSpeaker = createMemo(() =>
    props.speakers.find((speaker) => speaker.fields.id === activeSpeakerId()),
  );

  return (
    <ul class={styles.list}>
      <For each={props.speakers}>
        {(item) => (
          <li class={styles.item}>
            <SpeakerThumbnail onClick={setActiveSpeakerId} speaker={item} />
          </li>
        )}
      </For>
      <Show when={activeSpeaker()}>
        <SpeakerModal
          onClose={() => setActiveSpeakerId()}
          speaker={activeSpeaker()}
        />
      </Show>
      <Show when={props.moreSpeakersComing}>
        <li class={classNames(styles.item, styles.last)}>
          <b>More Speakers to Come!</b>
          <Button
            onClick={() => isNewsletterModalOpen.set(true)}
            size="small"
            variant="secondary"
          >
            Join Newsletter to Stay Informed
          </Button>
        </li>
      </Show>
    </ul>
  );
};

export interface SpeakerListProps {
  moreSpeakersComing?: boolean;
  speakers: Entry<Speaker>[];
}
