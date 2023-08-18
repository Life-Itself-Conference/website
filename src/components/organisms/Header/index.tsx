"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
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

  return (
    <header className={styles.container}>
      <Link className={styles.logo} href="/">
        <span>Home</span>
      </Link>
      <button
        className={styles.hamburger}
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        type="button"
      >
        <FaBars />
      </button>
      <NavigationMenu.Root
        className={clsx(styles.nav, isMobileNavOpen && styles.open)}
      >
        <NavigationMenu.List className={styles.links}>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className={styles.toggle} type="button">
              Past Events
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className={styles.popover}>
              <ul>
                {events?.map((event, index) => (
                  <li key={index}>
                    <Link href={`/${event.fields.year}`}>
                      {event.fields.year}
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link href="#speakers">Speakers</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link href="#location">Location</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link href="#partners">Partners</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link href="#about-us">About Us</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className={styles.buttons}>
            <ButtonLink href="/" size="small" variant="secondary">
              Schedule
            </ButtonLink>
            <ButtonLink href="/" size="small">
              Sold Out
            </ButtonLink>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </header>
  );
};
