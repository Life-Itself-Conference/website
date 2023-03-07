import { ButtonLink } from '../../atoms/Button';
import { Container } from '../../atoms/Container';
import * as styles from './HeroSection.css';

export const HeroSection = () => (
  <section class={styles.container}>
    <Container size="large">
      <div class={styles.content}>
        <small class={styles.meta}>
          <time dateTime="2022-05-31/2022-06-03">
            May 31st - June 3rd, 2022
          </time>
        </small>
        <h1 class={styles.title}>
          <span>LIFE ITSELF</span>
        </h1>
        <p>
          A new in-person event, celebrating extraordinary minds & ideas
          intersecting health & medicine.
        </p>
        <div class={styles.buttons}>
          <ButtonLink>Sold Out</ButtonLink>
          <ButtonLink variant="secondary">Speakers</ButtonLink>
          <ButtonLink variant="secondary">Join Newsletter</ButtonLink>
        </div>
      </div>
    </Container>
  </section>
);
