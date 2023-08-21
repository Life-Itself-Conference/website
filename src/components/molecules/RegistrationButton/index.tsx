import { ComponentProps } from "react";
import { Event } from "@/src/types";
import { Button } from "../../atoms/Button";
import { NewsletterModal } from "../../modals/NewsletterModal";
import { RegistrationModal } from "../../modals/RegistrationModal";

export interface RegistrationButtonProps extends ComponentProps<typeof Button> {
  event: Event;
}

export const RegistrationButton = ({
  event,
  ...buttonProps
}: RegistrationButtonProps) => {
  if (event.fields.ticketStatus === "Coming Soon") {
    return (
      <NewsletterModal
        trigger={<Button {...buttonProps}>Coming Soon</Button>}
      />
    );
  }

  if (event.fields.ticketStatus === "Sold Out") {
    return (
      <NewsletterModal trigger={<Button {...buttonProps}>Sold Out</Button>} />
    );
  }

  return (
    <RegistrationModal trigger={<Button {...buttonProps}>On Sale</Button>} />
  );
};
