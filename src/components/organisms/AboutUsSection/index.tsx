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
          <p>
            <b>{props.aboutUs.fields.sanjay}</b>
            <br />
            {props.aboutUs.fields.sanjayTitle}
          </p>
          <div
            className={styles.bio}
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(props.aboutUs.fields.sanjayBio),
            }}
          />
        </div>

        <div>
          <p>
            <b>{props.aboutUs.fields.marc}</b>
            <br />
            {props.aboutUs.fields.marcTitle}
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
