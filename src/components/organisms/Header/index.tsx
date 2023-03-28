import { FaSolidBars } from 'solid-icons/fa';
import type { Entry } from 'contentful';
import { Component, createSignal, createUniqueId } from 'solid-js';
import type { Event } from '../../../types';
import { Button, ButtonLink } from '../../atoms/Button';
import { setIsNewsletterModalOpen } from '../../molecules/NewsletterModal';
import * as styles from './Header.css';

export const Header: Component<HeaderProps> = (props) => {
  const navId = createUniqueId();
  const [isMobileNavOpen, setIsMobileNavOpen] = createSignal(false);

  const handleLinkClick = () => {
    setIsMobileNavOpen(false);
  };

  const handleJoinNewsletter = () => {
    handleLinkClick();
    setIsNewsletterModalOpen(true);
  };

  return (
    <header class={styles.header}>
      <a class={styles.logo} onClick={handleLinkClick} href="#">
        <span>Life Itself</span>
      </a>
      <button
        aria-controls={navId}
        aria-expanded={isMobileNavOpen()}
        aria-label="Toggle Mobile Navigation"
        class={styles.trigger}
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen())}
        type="button"
      >
        <FaSolidBars />
      </button>
      <nav class={styles.nav} data-open={isMobileNavOpen()} id={navId}>
        <ul class={styles.list}>
          <li>
            <a onClick={handleLinkClick} href="#">
              Covid Safety
            </a>
          </li>
          <li>
            <a onClick={handleLinkClick} href="#speakers">
              Speakers
            </a>
          </li>
          <li>
            <a onClick={handleLinkClick} href="#location">
              Location
            </a>
          </li>
          <li>
            <a onClick={handleLinkClick} href="#partners">
              Partners
            </a>
          </li>
          <li>
            <a onClick={handleLinkClick} href="#about-us">
              About Us
            </a>
          </li>
          <li>
            <a
              href="mailto:info@lifeitself.health?subject=Contact Us"
              onClick={handleLinkClick}
              target="_blank"
            >
              Contact Us
            </a>
          </li>
          <li class={styles.buttons}>
            <ButtonLink href="#" size="small" variant="secondary">
              Schedule
            </ButtonLink>
            <Button onClick={handleJoinNewsletter} size="small">
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
