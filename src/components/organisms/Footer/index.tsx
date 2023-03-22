import type { Entry } from 'contentful';
import type { Component } from 'solid-js';
import type { Event } from '../../../types';
import { formatDate } from '../../../utils/format';
import { Container } from '../../atoms/Container';
import * as styles from './Footer.css';

export const Footer: Component<FooterProps> = (props) => (
  <footer class={styles.footer}>
    <Container size="large">
      <div class={styles.happy}>
        <img class={styles.logo} src="/logo-maze.png" />
        <div class={styles.content}>
          <small>
            <b>
              <time
                dateTime={`${props.event.fields.startDate}/${props.event.fields.endDate}`}
              >
                {[
                  formatDate(props.event.fields.startDate),
                  formatDate(props.event.fields.endDate),
                ].join(' - ')}
              </time>{' '}
              / <span>{props.event.fields.hotel.fields.location}</span>
            </b>
          </small>
          <strong>Happy. Healthy. Human.</strong>
        </div>
      </div>
      <p>&copy; 2023 LIFE ITSELF. All rights reserved.</p>
    </Container>
  </footer>
);

export interface FooterProps {
  event: Entry<Event>;
}
