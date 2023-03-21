import type { Entry } from 'contentful';
import type { Component } from 'solid-js';
import { isNewsletterModalOpen } from '../../../stores/newsletter';
import type { Event } from '../../../types';
import { Button, ButtonLink } from '../../atoms/Button';
import * as styles from './Header.css';

export const Header: Component<HeaderProps> = (props) => {
  return (
    <header class={styles.header}>
      <a class={styles.logo} href="#">
        <span>Life Itself</span>
      </a>
      <nav class={styles.nav}>
        <ul class={styles.list}>
          <li>
            <a href="#">Covid Safety</a>
          </li>
          <li>
            <a href="#speakers">Speakers</a>
          </li>
          <li>
            <a href="#location">Location</a>
          </li>
          <li>
            <a href="#partners">Partners</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li class={styles.buttons}>
            <ButtonLink href="#" size="small" variant="secondary">
              Schedule
            </ButtonLink>
            <Button
              onClick={() => isNewsletterModalOpen.set(true)}
              size="small"
            >
              {props.event.fields.ticketStatus}
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export interface HeaderProps {
  event: Entry<Event>;
}
