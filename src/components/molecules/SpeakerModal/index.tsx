import type { Entry } from 'contentful';
import type { Component } from 'solid-js';
import type { Speaker } from '../../../types';
import { Modal, ModalProps } from '../../atoms/Modal';

export const SpeakerModal: Component<SpeakerModalProps> = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      {props.speaker.fields.name}
    </Modal>
  );
};

export interface SpeakerModalProps extends ModalProps {
  speaker: Entry<Speaker>;
}
