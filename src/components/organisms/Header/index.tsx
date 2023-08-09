import type { Entry } from 'contentful';
import { MouseEvent, useId, useState } from 'react';
import { FaBars } from 'react-icons/fa/index.js';
import { isHealthAndSafetyModalOpen } from '../../../stores';
import type { Event } from '../../../types';
import { RegistrationButton } from '../../molecules/RegistrationButton';
import { ScheduleButton } from '../../molecules/ScheduleButton';
import * as styles from './Header.css';

export const Header = (props: HeaderProps) => {
  const navId = useId();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileNavOpen(false);
  };

  const handleHealthAndSafetyLinkClick = (e: MouseEvent) => {
    e.preventDefault();
    handleLinkClick();
    isHealthAndSafetyModalOpen.set(true);
  };

  return (
    <header className={styles.header}>
      <a className={styles.logo} onClick={handleLinkClick} href="/">
        <span>Life Itself</span>
      </a>
      <button
        aria-controls={navId}
        aria-expanded={isMobileNavOpen}
        aria-label="Toggle Mobile Navigation"
        className={styles.trigger}
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        type="button"
      >
        <FaBars />
      </button>
      <nav className={styles.nav} data-open={isMobileNavOpen} id={navId}>
        <ul className={styles.list}>
          {props.event.fields.healthAndSafetyStatus && (
            <li>
              <a
                className={styles.healthAndSafety}
                onClick={handleHealthAndSafetyLinkClick}
                href="#"
              >
                {props.event.fields.healthAndSafetyLabel}
              </a>
            </li>
          )}
          {props.pastEvents.length > 0 && (
            <li>
              <button type="button">Past Events</button>
              <ul>
                {props.pastEvents.map((event) => (
                  <li key={event.fields.id}>
                    <a href={`/${event.fields.year}`}>{event.fields.year}</a>
                  </li>
                ))}
              </ul>
            </li>
          )}
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
              rel="nofollow noreferrer noopener"
              target="_blank"
            >
              Contact Us
            </a>
          </li>
          <li className={styles.buttons}>
            <ScheduleButton
              event={props.event}
              size="small"
              variant="secondary"
            />
            <RegistrationButton event={props.event} size="small" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export interface HeaderProps {
  event: Entry<Event>;
  pastEvents: Entry<Event>[];
}
