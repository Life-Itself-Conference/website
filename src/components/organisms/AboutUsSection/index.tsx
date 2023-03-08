/* eslint-disable solid/no-innerhtml */
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import type { Entry } from 'contentful';
import type { Component } from 'solid-js';
import type { AboutUs } from '../../../types';
import { ContentSection } from '../../molecules/ContentSection';
import * as styles from './AboutUsSection.css';

export const AboutUsSection: Component<AboutUsSectionProps> = (props) => {
  return (
    <ContentSection class={styles.content} size="small" title="About Us">
      <p innerHTML={documentToHtmlString(props.aboutUs.fields.overview)} />

      <img
        class={styles.image}
        src={props.aboutUs.fields.image.fields.file.url}
      />

      <div class={styles.bios}>
        <div>
          <p>
            <b>{props.aboutUs.fields.sanjay}</b>
            <br />
            {props.aboutUs.fields.sanjayTitle}
          </p>
          <div
            class={styles.bio}
            innerHTML={documentToHtmlString(props.aboutUs.fields.sanjayBio)}
          />
        </div>

        <div>
          <p>
            <b>{props.aboutUs.fields.marc}</b>
            <br />
            {props.aboutUs.fields.marcTitle}
          </p>
          <div
            class={styles.bio}
            innerHTML={documentToHtmlString(props.aboutUs.fields.marcBio)}
          />
        </div>
      </div>
    </ContentSection>
  );
};

export interface AboutUsSectionProps {
  aboutUs: Entry<AboutUs>;
}
