"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Event } from "@/src/types";
import { ButtonLink } from "../../atoms/Button";
import * as styles from "./Header.css";

export interface HeaderProps {
  events: Event[];
}

export const Header = ({ events }: HeaderProps) => {
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

      <nav className={clsx(styles.nav, isMobileNavOpen && styles.open)}>
        <ul className={styles.links}>
          <li className={styles.dropdown}>
            <button className={styles.toggle} type="button">
              Past Events
            </button>
            <div className={styles.popover}>
              <ul>
                {events?.map((event, index) => (
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
          <li className={styles.buttons}>
            <ButtonLink
              className={styles.buttonLink}
              href="/"
              onClick={handleLinkClick}
              size="small"
              variant="secondary"
            >
              Schedule
            </ButtonLink>
            <ButtonLink
              className={styles.buttonLink}
              href="/"
              onClick={handleLinkClick}
              size="small"
            >
              Sold Out
            </ButtonLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
