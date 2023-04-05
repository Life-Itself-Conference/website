import { FaBars } from 'react-icons/fa';
import type { Entry } from 'contentful';
import type { Event } from '../../../types';
import * as styles from './Header.css';
import { RegistrationButton } from '../../molecules/RegistrationButton';
import { ScheduleButton } from '../../molecules/ScheduleButton';
import { useId, useState } from 'react';

export const Header = (props: HeaderProps) => {
  const navId = useId();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <header className={styles.header}>
      <a className={styles.logo} onClick={handleLinkClick} href="#">
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
}
