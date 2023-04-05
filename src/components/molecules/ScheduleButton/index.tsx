import type { Entry } from 'contentful';
import { isNewsletterModalOpen } from '../../../stores';
import type { Event } from '../../../types';
import { Button, ButtonCommonProps, ButtonLink } from '../../atoms/Button';

export const ScheduleButton = (props: ScheduleButtonProps) => {
  const handleOpenNewsletterModal = () => {
    isNewsletterModalOpen.set(true);
  };

  return (
    <>
      {props.event.fields.schedule && (
        <ButtonLink
          {...props}
          href={props.event.fields.schedule.fields.file.url}
          rel="nofollow noreferrer noopener"
          target="_blank"
        >
          Schedule
        </ButtonLink>
      )}
      {!props.event.fields.schedule && (
        <Button {...props} onClick={handleOpenNewsletterModal}>
          Join Newsletter
        </Button>
      )}
    </>
  );
};

export interface ScheduleButtonProps extends ButtonCommonProps {
  event: Entry<Event>;
}
