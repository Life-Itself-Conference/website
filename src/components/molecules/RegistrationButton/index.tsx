import type { Entry } from 'contentful';
import { Component, createMemo, splitProps } from 'solid-js';
import { isNewsletterModalOpen } from '../../../stores/newsletter';
import { isRegistrationModalOpen } from '../../../stores/registration';
import { Event, TicketStatus } from '../../../types';
import { Button } from '../../atoms/Button';
import type { ButtonCommonProps } from '../../atoms/Button';

export const RegistrationButton: Component<RegistrationButtonProps> = (
  props,
) => {
  const [, buttonProps] = splitProps(props, ['event']);
  const registrationProps = createMemo(() => {
    switch (props.event.fields.ticketStatus) {
      case TicketStatus.ComingSoon:
        return {
          onClick: () => isNewsletterModalOpen.set(true),
          text: 'Coming Soon',
        };
      case TicketStatus.OnSale:
        return {
          onClick: () => isRegistrationModalOpen.set(true),
          text: 'On Sale',
        };
      case TicketStatus.SoldOut:
        return {
          onClick: () => isNewsletterModalOpen.set(true),
          text: 'Sold Out',
        };
      default:
        return {
          onClick: () => undefined,
          text: '',
        };
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
