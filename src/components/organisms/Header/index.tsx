import { FaSolidBars } from 'solid-icons/fa';
import type { Entry } from 'contentful';
import { Component, createSignal, createUniqueId } from 'solid-js';
import { isNewsletterModalOpen } from '../../../stores/newsletter';
import type { Event } from '../../../types';
import { Button, ButtonLink } from '../../atoms/Button';
import * as styles from './Header.css';

export const Header: Component<HeaderProps> = (props) => {
  const navId = createUniqueId();
  const [isMobileNavOpen, setIsMobilNavOpen] = createSignal(false);

  return (
    <header class={styles.header}>
      <a class={styles.logo} onClick={() => setIsMobilNavOpen(false)} href="#">
        <span>Life Itself</span>
      </a>
      <button
        aria-controls={navId}
        aria-expanded={isMobileNavOpen()}
        aria-label="Toggle Mobile Navigation"
        class={styles.trigger}
        onClick={() => setIsMobilNavOpen(!isMobileNavOpen())}
        type="button"
      >
        <FaSolidBars />
      </button>
      <nav class={styles.nav} data-open={isMobileNavOpen()} id={navId}>
        <ul class={styles.list}>
          <li>
            <a onClick={() => setIsMobilNavOpen(false)} href="#">
              Covid Safety
            </a>
          </li>
          <li>
            <a onClick={() => setIsMobilNavOpen(false)} href="#speakers">
              Speakers
            </a>
          </li>
          <li>
            <a onClick={() => setIsMobilNavOpen(false)} href="#location">
              Location
            </a>
          </li>
          <li>
            <a onClick={() => setIsMobilNavOpen(false)} href="#partners">
              Partners
            </a>
          </li>
          <li>
            <a onClick={() => setIsMobilNavOpen(false)} href="#about-us">
              About Us
            </a>
          </li>
          <li>
            <a onClick={() => setIsMobilNavOpen(false)} href="#">
              Contact Us
            </a>
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
