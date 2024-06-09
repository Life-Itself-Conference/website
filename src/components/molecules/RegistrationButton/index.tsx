import { ComponentProps } from "react";
import { useNewsletterModalStore } from "@/store";
import { Event } from "@/types";
import { Button } from "../../atoms/Button";
// import { NewsletterModal } from "../../molecules/NewsletterModal";
// import { RegistrationModal } from "../../molecules/RegistrationModal";

export interface RegistrationButtonProps extends ComponentProps<typeof Button> {
  event: Event;
}

export const RegistrationButton = ({
  event,
  ...buttonProps
}: RegistrationButtonProps) => {
  const openNewsletterModal = useNewsletterModalStore(
    (state) => state.openNewsletterModal
  );

  if (event.fields.ticketStatus === "Coming Soon") {
    return (
      <Button {...buttonProps} onClick={openNewsletterModal}>
        Coming Soon
      </Button>
    );
  }

  if (event.fields.ticketStatus === "Sold Out") {
    return (
      <Button {...buttonProps} onClick={openNewsletterModal}>
        Sold Out
      </Button>
    );
  }

  return <Button {...buttonProps}>On Sale</Button>;
};
