/* eslint-disable solid/no-innerhtml */
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { useStore } from '@nanostores/solid';
import type { Entry } from 'contentful';
import { Component, createSignal, Show } from 'solid-js';
import { createStore, SetStoreFunction } from 'solid-js/store';
import { isRegistrationModalOpen } from '../../../stores/registration';
import type { Event } from '../../../types';
import { Button } from '../../atoms/Button';
import { Modal } from '../../atoms/Modal';
import { TextField } from '../../atoms/TextField';
import * as styles from './RegistrationModal.css';

export const RegistrationModal: Component<RegistrationModalProps> = (props) => {
  const $isRegistrationModalOpen = useStore(isRegistrationModalOpen);
  const [step, setStep] = createSignal(0);

  // createEffect(() => {
  //   if (props.event.fields.ticketStatus === 'Sold Out') {
  //     setStep(0);
  //   } else {
  //     setStep(1);
  //   }
  // });

  const [registration, setRegistration] = createStore({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    country: '',
    state: '',
    zip: '',
    company: '',
    jobTitle: '',
    info: '',
    groupCode: '',
  });

  const [payment, setPayment] = createStore<Payment>({
    cardNumber: '',
    cardExp: '',
  });

  return (
    <Modal
      class={styles.modal}
      isOpen={$isRegistrationModalOpen()}
      onClose={() => isRegistrationModalOpen.set(false)}
      size={step() === 1 ? 'small' : 'large'}
    >
      <header class={styles.header}>
        <img src="/life-itself.png" />
        <span>Registration</span>
      </header>

      <Show when={step() === 0}>
        <RegistrationClosed event={props.event} onComplete={() => setStep(1)} />
      </Show>

      <Show when={step() === 1}>
        <RegistrationDetails
          onComplete={() => setStep(2)}
          registration={registration}
          setRegistration={setRegistration}
        />
      </Show>

      <Show when={step() === 2}>
        <RegistrationPayment
          event={props.event}
          onComplete={() => setStep(3)}
          payment={payment}
          setPayment={setPayment}
        />
      </Show>

      <Show when={step() === 3}>
        <RegistrationConfirmation event={props.event} />
      </Show>
    </Modal>
  );
};

export const RegistrationClosed: Component<RegistrationClosedProps> = (
  props,
) => {
  const handleClick = () => props.onComplete();

  return (
    <>
      <div
        innerHTML={documentToHtmlString(
          props.event.fields.registrationClosedText,
        )}
      />
      <Button onClick={handleClick}>Register</Button>
      <div
        innerHTML={documentToHtmlString(
          props.event.fields.registrationRefundText,
        )}
      />
    </>
  );
};

export const RegistrationDetails: Component<RegistrationDetailsProps> = (
  props,
) => {
  const handleChange = (e: any) => {
    props.setRegistration({ [e.name]: e.currentTarget.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.onComplete();
  };

  return (
    <form class={styles.form} onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        name="firstName"
        onChange={handleChange}
        required
        value={props.registration.firstName}
      />
      <TextField
        label="Last Name"
        name="lastName"
        onChange={handleChange}
        required
        value={props.registration.lastName}
      />
      <TextField
        label="Email"
        name="email"
        onChange={handleChange}
        type="email"
        required
        value={props.registration.email}
      />
      <TextField
        label="Phone"
        name="phone"
        onChange={handleChange}
        required
        value={props.registration.phone}
      />
      <TextField
        label="Address 1"
        name="address1"
        onChange={handleChange}
        required
        value={props.registration.address1}
      />
      <TextField
        label="Address 2"
        name="address2"
        onChange={handleChange}
        value={props.registration.address2}
      />
      <TextField
        label="City"
        name="city"
        onChange={handleChange}
        value={props.registration.city}
      />
      <TextField
        label="Country"
        name="country"
        onChange={handleChange}
        value={props.registration.country}
      />
      <TextField
        label="State"
        name="state"
        onChange={handleChange}
        required
        value={props.registration.state}
      />
      <TextField
        label="Zip"
        name="zip"
        onChange={handleChange}
        required
        value={props.registration.zip}
      />
      <TextField
        label="Company"
        name="company"
        onChange={handleChange}
        value={props.registration.company}
      />
      <TextField
        label="Job Title"
        name="jobTitle"
        onChange={handleChange}
        value={props.registration.jobTitle}
      />
      <TextField
        label="Info"
        name="info"
        onChange={handleChange}
        value={props.registration.info}
      />
      <TextField
        label="Group Code"
        name="groupCode"
        onChange={handleChange}
        value={props.registration.groupCode}
      />
      <Button type="submit">Next Step</Button>
    </form>
  );
};

export const RegistrationPayment: Component<RegistrationPaymentProps> = (
  props,
) => {
  const handleChange = (e: any) => {
    props.setPayment({ [e.name]: e.currentTarget.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.onComplete();
  };

  return (
    <>
      <div
        innerHTML={documentToHtmlString(
          props.event.fields.registrationPaymentText,
        )}
      />
      <form class={styles.form} onSubmit={handleSubmit}>
        <TextField
          label="Card Number"
          name="cardNumber"
          onChange={handleChange}
          required
          value={props.payment.cardNumber}
        />
        <TextField
          label="MM / YY"
          name="cardExp"
          onChange={handleChange}
          required
          value={props.payment.cardExp}
        />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export const RegistrationConfirmation: Component<
  RegistrationConfirmationProps
> = (props) => {
  return (
    <div
      innerHTML={documentToHtmlString(
        props.event.fields.registrationConfirmationText,
      )}
    />
  );
};

interface Payment {
  cardNumber: '';
  cardExp: '';
}

interface Registration {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  company: string;
  jobTitle: string;
  info: string;
  groupCode: string;
}

export interface RegistrationModalProps {
  event: Entry<Event>;
}

export interface RegistrationClosedProps {
  event: Entry<Event>;
  onComplete: () => void;
}

export interface RegistrationDetailsProps {
  onComplete: () => void;
  registration: Registration;
  setRegistration: SetStoreFunction<Registration>;
}

export interface RegistrationPaymentProps {
  event: Entry<Event>;
  onComplete: () => void;
  payment: Payment;
  setPayment: SetStoreFunction<Payment>;
}

export interface RegistrationConfirmationProps {
  event: Entry<Event>;
}
