import { ButtonLink } from '../../atoms/Button';
import * as styles from './Header.css';

export const Header = () => (
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
          <a href="#">Speakers</a>
        </li>
        <li>
          <a href="#">Location</a>
        </li>
        <li>
          <a href="#">Partners</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li class={styles.buttons}>
          <ButtonLink href="#" size="small" variant="secondary">
            Schedule
          </ButtonLink>
          <ButtonLink href="#" size="small">
            Sold Out
          </ButtonLink>
        </li>
      </ul>
    </nav>
  </header>
);
