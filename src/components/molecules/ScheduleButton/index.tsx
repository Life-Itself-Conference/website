import type { Entry } from 'contentful';
import { Component, Show } from 'solid-js';
import { isNewsletterModalOpen } from '../../../stores/newsletter';
import type { Event } from '../../../types';
import { Button, ButtonCommonProps, ButtonLink } from '../../atoms/Button';

export const ScheduleButton: Component<ScheduleButtonProps> = (props) => {
  const handleOpenNewsletterModal = () => {
    isNewsletterModalOpen.set(true);
  };

  return (
    <>
      <Show when={props.event.fields.schedule}>
        <ButtonLink
          {...props}
          href={props.event.fields.schedule.fields.file.url}
          rel="nofollow noreferrer noopener"
          target="_blank"
        >
          Schedule
        </ButtonLink>
      </Show>
      <Show when={!props.event.fields.schedule}>
        <Button {...props} onClick={handleOpenNewsletterModal}>
          Join Newsletter
        </Button>
      </Show>
    </>
  );
};

export interface ScheduleButtonProps extends ButtonCommonProps {
  event: Entry<Event>;
}
