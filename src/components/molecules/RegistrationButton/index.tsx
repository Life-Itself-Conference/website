import type { Entry } from 'contentful';
import { Component, createMemo, splitProps } from 'solid-js';
import { isNewsletterModalOpen } from '../../../stores/newsletter';
import { isRegistrationModalOpen } from '../../../stores/registration';
import type { Event } from '../../../types';
import { Button } from '../../atoms/Button';
import type { ButtonCommonProps } from '../../atoms/Button';

export const RegistrationButton: Component<RegistrationButtonProps> = (
  props,
) => {
  const [, buttonProps] = splitProps(props, ['event']);
  const registrationProps = createMemo(() => {
    switch (props.event.fields.ticketStatus) {
      case 'Coming Soon':
        return { onClick: () => alert('Coming Soon!'), text: 'Coming Soon!' };
      case 'On Sale':
        return {
          onClick: () => isRegistrationModalOpen.set(true),
          text: 'On Sale!',
        };
      case 'Sold Out':
        return {
          onClick: () => isNewsletterModalOpen.set(true),
          text: 'Sold Out!',
        };
      default:
        return { onClick: () => {}, text: '' };
    }
  });

  return (
    <Button {...buttonProps} onClick={registrationProps().onClick}>
      {registrationProps().text}
    </Button>
  );
};

export interface RegistrationButtonProps extends Partial<ButtonCommonProps> {
  class?: string;
  event: Entry<Event>;
}
