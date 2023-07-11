import { useStore } from '@nanostores/react';
import type { Entry } from 'contentful';
import { isHealthAndSafetyModalOpen } from '../../../stores';
import type { Event } from '../../../types';
import { GenericModal } from '../../atoms/GenericModal';
import { RichText } from '../../atoms/RichText';

export const HealthAndSafetyModal = (props: HealthAndSafeytModalProps) => {
  const $isHealthAndSafetyModalOpen = useStore(isHealthAndSafetyModalOpen);

  if (!$isHealthAndSafetyModalOpen) return null;

  return (
    <GenericModal onClose={() => isHealthAndSafetyModalOpen.set(false)}>
      <RichText field={props.event.fields.healthAndSafetyDescription} />
    </GenericModal>
  );
};

export interface HealthAndSafeytModalProps {
  event: Entry<Event>;
}
