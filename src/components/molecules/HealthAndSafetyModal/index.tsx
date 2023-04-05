import { useStore } from '@nanostores/react';
import type { Entry } from 'contentful';
import { isHealthAndSafetyModalOpen } from '../../../stores';
import type { Event } from '../../../types';
import { Modal } from '../../atoms/Modal';
import { RichText } from '../../atoms/RichText';

export const HealthAndSafetyModal = (props: HealthAndSafeytModalProps) => {
  const $isHealthAndSafetyModalOpen = useStore(isHealthAndSafetyModalOpen);

  if (!$isHealthAndSafetyModalOpen) return null;

  return (
    <Modal onClose={() => isHealthAndSafetyModalOpen.set(false)}>
      <RichText field={props.event.fields.healthAndSafetyDescription} />
    </Modal>
  );
};

export interface HealthAndSafeytModalProps {
  event: Entry<Event>;
}
