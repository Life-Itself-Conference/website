import type { Entry } from 'contentful';
import type { Event } from '../../../types';
import { RichText } from '../../atoms/RichText';
import { ContentSection } from '../../molecules/ContentSection';
import * as styles from './AboutUsSection.css';

export const AboutUsSection = (props: AboutUsSectionProps) => {
  return (
    <ContentSection
      className={styles.content}
      id="about-us"
      size="small"
      title="About Us"
    >
      <RichText field={props.event.fields.aboutUs.fields.overview} />

      <img
        alt="Sanjay and Marc"
        className={styles.image}
        src={props.event.fields.aboutUs.fields.image.fields.file.url}
      />

      <div className={styles.bios}>
        <div>
          <h3>{props.event.fields.aboutUs.fields.sanjay}</h3>
          <p className={styles.title}>
            <span> {props.event.fields.aboutUs.fields.sanjayTitle},</span>
            <img src="/life-itself.png" />
          </p>
          <RichText
            className={styles.bio}
            field={props.event.fields.aboutUs.fields.sanjayBio}
          />
        </div>

        <div>
          <h3>{props.event.fields.aboutUs.fields.marc}</h3>
          <p className={styles.title}>
            <span>{props.event.fields.aboutUs.fields.marcTitle},</span>
            <img src="/life-itself.png" />
          </p>
          <RichText
            className={styles.bio}
            field={props.event.fields.aboutUs.fields.marcBio}
          />
        </div>
      </div>
    </ContentSection>
  );
};

export interface AboutUsSectionProps {
  event: Entry<Event>;
}
