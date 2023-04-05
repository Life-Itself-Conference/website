/* eslint-disable no-unused-vars */
import { useStore } from '@nanostores/react';
import type { Entry } from 'contentful';
import { useEffect, useState } from 'react';
import { isRegistrationModalOpen } from '../../../stores';
import { Event, TicketStatus } from '../../../types';
import { Button } from '../../atoms/Button';
import { Modal } from '../../atoms/Modal';
import { RichText } from '../../atoms/RichText';
import { TextField } from '../../atoms/TextField';
import * as styles from './RegistrationModal.css';

export const RegistrationModal = (props: RegistrationModalProps) => {
  const [step, setStep] = useState(0);
  const $isRegistrationModalOpen = useStore(isRegistrationModalOpen);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has('register')) {
      isRegistrationModalOpen.set(true);
    }
  }, [$isRegistrationModalOpen]);

  useEffect(() => {
    if (props.event.fields.ticketStatus === TicketStatus.SoldOut) {
      setStep(0);
    } else {
      setStep(1);
    }
  }, [props.event]);

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
    <Modal
      className={styles.modal}
      onClose={() => isRegistrationModalOpen.set(false)}
      size={step === 1 ? 'small' : 'large'}
    >
      <header className={styles.header}>
        <img src="/life-itself.png" />
        <span>Registration</span>
      </header>

      {step === 0 && (
        <RegistrationClosed event={props.event} onComplete={() => setStep(1)} />
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
          event={props.event}
          onComplete={() => setStep(3)}
          payment={payment}
          setPayment={handlePaymentChange}
        />
      )}

      {step === 3 && <RegistrationConfirmation event={props.event} />}
    </Modal>
  );
};

export const RegistrationClosed = (props: RegistrationClosedProps) => {
  const handleClick = () => props.onComplete();

  return (
    <>
      <RichText field={props.event.fields.registrationClosedText} />
      <Button onClick={handleClick}>Register</Button>
      <RichText field={props.event.fields.registrationRefundText} />
    </>
  );
};

export const RegistrationDetails = (props: RegistrationDetailsProps) => {
  const handleChange = (e: any) => {
    props.setRegistration({ [e.name]: e.currentTarget.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.onComplete();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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

export const RegistrationPayment = (props: RegistrationPaymentProps) => {
  const handleChange = (e: any) => {
    props.setPayment({ [e.name]: e.currentTarget.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.onComplete();
  };

  return (
    <>
      <RichText field={props.event.fields.registrationPaymentText} />
      <form className={styles.form} onSubmit={handleSubmit}>
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

export const RegistrationConfirmation = (
  props: RegistrationConfirmationProps,
) => {
  return <RichText field={props.event.fields.registrationConfirmationText} />;
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
