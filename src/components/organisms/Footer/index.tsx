import { Container } from '../../atoms/Container';
import * as styles from './Footer.css';

export const Footer = () => (
  <footer class={styles.footer}>
    <Container size="large">
      <p>&copy; 2023 LIFE ITSELF. All rights reserved.</p>
    </Container>
  </footer>
);
