import type { Entry } from 'contentful';
import type { Speaker } from '../../../types';
import { SpeakerThumbnail } from '../SpeakerThumbnail';
import { SpeakerModal } from '../SpeakerModal';
import * as styles from './SpeakerList.css';
import { Button } from '../../atoms/Button';
import classNames from 'classnames';
import { isNewsletterModalOpen } from '../../../stores/newsletter';
import { useMemo, useState } from 'react';

export const SpeakerList = (props: SpeakerListProps) => {
  const [activeSpeakerId, setActiveSpeakerId] = useState<number | undefined>();
  const activeSpeaker = useMemo(
    () =>
      props.speakers.find((speaker) => speaker.fields.id === activeSpeakerId),
    [activeSpeakerId, props.speakers],
  );

  return (
    <ul className={styles.list}>
      {props.speakers.map((item) => (
        <li className={styles.item} key={item.fields.id}>
          <SpeakerThumbnail onClick={setActiveSpeakerId} speaker={item} />
        </li>
      ))}
      {activeSpeaker && (
        <SpeakerModal
          onClose={() => setActiveSpeakerId(undefined)}
          speaker={activeSpeaker}
        />
      )}
      {props.moreSpeakersComing && (
        <li className={classNames(styles.item, styles.last)}>
          <b>More Speakers to Come!</b>
          <Button
            onClick={() => isNewsletterModalOpen.set(true)}
            size="small"
            variant="secondary"
          >
            Join Newsletter to Stay Informed
          </Button>
        </li>
      )}
    </ul>
  );
};

export interface SpeakerListProps {
  moreSpeakersComing?: boolean;
  speakers: Entry<Speaker>[];
}
