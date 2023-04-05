import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import type { Entry } from 'contentful';
import type { AboutUs } from '../../../types';
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
      <div
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(props.aboutUs.fields.overview),
        }}
      />

      <img
        alt="Sanjay and Marc"
        className={styles.image}
        src={props.aboutUs.fields.image.fields.file.url}
      />

      <div className={styles.bios}>
        <div>
          <h3>{props.aboutUs.fields.sanjay}</h3>
          <p className={styles.title}>
            <span> {props.aboutUs.fields.sanjayTitle},</span>
            <img src="/life-itself.png" />
          </p>
          <div
            className={styles.bio}
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(props.aboutUs.fields.sanjayBio),
            }}
          />
        </div>

        <div>
          <h3>{props.aboutUs.fields.marc}</h3>
          <p className={styles.title}>
            <span>{props.aboutUs.fields.marcTitle},</span>
            <img src="/life-itself.png" />
          </p>
          <div
            className={styles.bio}
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(props.aboutUs.fields.marcBio),
            }}
          />
        </div>
      </div>
    </ContentSection>
  );
};

export interface AboutUsSectionProps {
  aboutUs: Entry<AboutUs>;
}
