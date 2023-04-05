import type { Entry } from 'contentful';
import { isNewsletterModalOpen } from '../../../stores/newsletter';
import { isRegistrationModalOpen } from '../../../stores/registration';
import { Event, TicketStatus } from '../../../types';
import { Button, ButtonProps } from '../../atoms/Button';
import { useMemo } from 'react';

export const RegistrationButton = (props: RegistrationButtonProps) => {
  const { event, ...buttonProps } = props;
  const registrationProps = useMemo(() => {
    switch (event.fields.ticketStatus) {
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
  }, [event]);

  return (
    <Button {...buttonProps} onClick={registrationProps.onClick}>
      {registrationProps.text}
    </Button>
  );
};

export interface RegistrationButtonProps extends Partial<ButtonProps> {
  event: Entry<Event>;
}
