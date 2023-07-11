/* eslint-disable no-unused-vars */
import { useStore } from '@nanostores/react';
import { useForm } from '@tanstack/react-form';
import type { Entry } from 'contentful';
import { useEffect, useMemo, useState } from 'react';
import { isRegistrationModalOpen } from '../../../stores';
import { Event, TicketStatus } from '../../../types';
import { Button } from '../../atoms/Button';
import { GenericModal } from '../../atoms/GenericModal';
import { RichText } from '../../atoms/RichText';
import { TextField } from '../../atoms/TextField';
import * as styles from './RegistrationModal.css';

export const RegistrationModal = (props: RegistrationModalProps) => {
  const { event } = props;
  const [step, setStep] = useState(0);
  const $isRegistrationModalOpen = useStore(isRegistrationModalOpen);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has('register')) {
      isRegistrationModalOpen.set(true);
    }
  }, [$isRegistrationModalOpen]);

  useEffect(() => {
    if (event.fields.ticketStatus === TicketStatus.SoldOut) {
      setStep(0);
    } else {
      setStep(1);
    }
  }, [event]);

  const [registration, setRegistration] = useState<Registration>({
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

  const [payment, setPayment] = useState<Payment>({
    cardNumber: '',
    cardExp: '',
  });

  const handleRegistrationChange = (changed: Partial<Registration>) => {
    setRegistration((previous) => ({ ...previous, ...changed }));
  };

  const handlePaymentChange = (changed: Partial<Payment>) => {
    setPayment((previous) => ({ ...previous, ...changed }));
  };

  if (!$isRegistrationModalOpen) return null;

  return (
    <GenericModal
      className={styles.modal}
      onClose={() => isRegistrationModalOpen.set(false)}
      size={step === 1 ? 'small' : 'large'}
    >
      <header className={styles.header}>
        <img src="/life-itself.png" />
        <span>Registration</span>
      </header>

      {step === 0 && (
        <RegistrationClosed event={event} onComplete={() => setStep(1)} />
      )}

      {step === 1 && (
        <RegistrationDetails
          onComplete={() => setStep(2)}
          registration={registration}
          setRegistration={handleRegistrationChange}
        />
      )}

      {step === 2 && (
        <RegistrationPayment
          event={event}
          onComplete={() => setStep(3)}
          payment={payment}
          setPayment={handlePaymentChange}
        />
      )}

      {step === 3 && <RegistrationConfirmation event={event} />}
    </GenericModal>
  );
};

export const RegistrationClosed = (props: RegistrationClosedProps) => {
  const { event } = props;

  const handleClick = () => props.onComplete();

  return (
    <>
      <RichText field={event.fields.registrationClosedText} />
      <Button onClick={handleClick}>Register</Button>
      <RichText field={event.fields.registrationRefundText} />
    </>
  );
};

export const RegistrationDetails = (props: RegistrationDetailsProps) => {
  const form = useForm({
    defaultValues: useMemo(
      () => ({
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
      }),
      [],
    ),
    onSubmit: (values) => {
      console.log('[RegistrationModal]', 'details', values);
      props.onComplete();
    },
  });

  return (
    <form.Form className={styles.form}>
      <form.Field name="firstName">
        {(field) => (
          <TextField label="First Name" {...field.getInputProps()} required />
        )}
      </form.Field>
      <form.Field name="lastName">
        {(field) => (
          <TextField label="Last Name" {...field.getInputProps()} required />
        )}
      </form.Field>
      <form.Field name="email">
        {(field) => (
          <TextField
            label="Email"
            {...field.getInputProps()}
            required
            type="email"
          />
        )}
      </form.Field>
      <form.Field name="phone">
        {(field) => (
          <TextField label="Phone" {...field.getInputProps()} required />
        )}
      </form.Field>
      <form.Field name="address1">
        {(field) => (
          <TextField label="Address 1" {...field.getInputProps()} required />
        )}
      </form.Field>
      <form.Field name="address2">
        {(field) => <TextField label="Address 2" {...field.getInputProps()} />}
      </form.Field>
      <form.Field name="city">
        {(field) => (
          <TextField label="City" {...field.getInputProps()} required />
        )}
      </form.Field>
      <form.Field name="country">
        {(field) => (
          <TextField label="Country" {...field.getInputProps()} required />
        )}
      </form.Field>
      <form.Field name="state">
        {(field) => (
          <TextField label="State" {...field.getInputProps()} required />
        )}
      </form.Field>
      <form.Field name="zip">
        {(field) => (
          <TextField label="Zip" {...field.getInputProps()} required />
        )}
      </form.Field>
      <form.Field name="company">
        {(field) => <TextField label="Company" {...field.getInputProps()} />}
      </form.Field>
      <form.Field name="jobTitle">
        {(field) => <TextField label="Job Title" {...field.getInputProps()} />}
      </form.Field>
      <form.Field name="info">
        {(field) => (
          <TextField
            label="Info about yourself or interests"
            {...field.getInputProps()}
          />
        )}
      </form.Field>
      <form.Field name="groupCode">
        {(field) => (
          <TextField label="Group Code" {...field.getInputProps()} required />
        )}
      </form.Field>
      <Button type="submit">Next Step</Button>
    </form.Form>
  );
};

export const RegistrationPayment = (props: RegistrationPaymentProps) => {
  const { event, onComplete } = props;

  const form = useForm({
    defaultValues: useMemo(
      () => ({
        cardNumber: '',
        cardExp: '',
      }),
      [],
    ),
    onSubmit: (values) => {
      console.log('[RegistrationModal]', 'payment', values);
      onComplete();
    },
  });

  return (
    <>
      <RichText field={event.fields.registrationPaymentText} />
      <form.Form className={styles.form}>
        <form.Field name="cardNumber">
          {(field) => (
            <TextField
              label="Card Number"
              {...field.getInputProps()}
              required
            />
          )}
        </form.Field>
        <form.Field name="cardExp">
          {(field) => (
            <TextField label="MM / YY" {...field.getInputProps()} required />
          )}
        </form.Field>
        <Button type="submit">Submit</Button>
      </form.Form>
    </>
  );
};

export const RegistrationConfirmation = (
  props: RegistrationConfirmationProps,
) => {
  const { event } = props;

  return <RichText field={event.fields.registrationConfirmationText} />;
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
  setRegistration: (changed: Partial<Registration>) => void;
}

export interface RegistrationPaymentProps {
  event: Entry<Event>;
  onComplete: () => void;
  payment: Payment;
  setPayment: (changed: Partial<Payment>) => void;
}

export interface RegistrationConfirmationProps {
  event: Entry<Event>;
}
