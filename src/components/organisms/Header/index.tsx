"use client";

import clsx from "clsx";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Event } from "@/src/types";
import { ButtonLink } from "../../atoms/Button";
import { Link } from "../../molecules/Link";
import { RegistrationButton } from "../../molecules/RegistrationButton";
import * as styles from "./Header.css";

export interface HeaderProps {
  event: Event;
  pastEvents: Event[];
}

export const Header = ({ event, pastEvents }: HeaderProps) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const handleLinkClick = () => setIsMobileNavOpen(false);

  return (
    <header className={styles.container}>
      <Link className={styles.logo} onClick={handleLinkClick} href="/">
        <span>Home</span>
      </Link>
      <button
        className={styles.hamburger}
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        type="button"
      >
        <FaBars />
      </button>

      <nav className={clsx(styles.nav[isMobileNavOpen ? "open" : "closed"])}>
        <ul className={styles.links}>
          {pastEvents.length > 0 && (
            <li className={styles.dropdown}>
              <button className={styles.toggle} type="button">
                Past Events
              </button>
              <div className={styles.popover}>
                <ul>
                  {pastEvents?.map((event, index) => (
                    <li key={index}>
                      <Link
                        href={`/${event.fields.year}`}
                        onClick={handleLinkClick}
                      >
                        {event.fields.year}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )}
          <li>
            <Link href="#speakers" onClick={handleLinkClick}>
              Speakers
            </Link>
          </li>
          <li>
            <Link href="#location" onClick={handleLinkClick}>
              Location
            </Link>
          </li>
          <li>
            <Link href="#partners" onClick={handleLinkClick}>
              Partners
            </Link>
          </li>
          <li>
            <Link href="#about-us" onClick={handleLinkClick}>
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="mailto:info@lifeitself.health?subject=Contact Us"
              onClick={handleLinkClick}
              target="_blank"
            >
              Contact Us
            </Link>
          </li>
          <li className={styles.buttons}>
            {event.fields.schedule?.fields.file && (
              <ButtonLink
                className={styles.buttonLink}
                href={event.fields.schedule.fields.file?.url}
                onClick={handleLinkClick}
                size="small"
                target="_blank"
                variant="secondary"
              >
                Schedule
              </ButtonLink>
            )}
            <RegistrationButton
              className={styles.buttonLink}
              event={event}
              onClick={handleLinkClick}
              size="small"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};
