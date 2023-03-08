/* eslint-disable solid/no-innerhtml */
import type { Entry } from 'contentful';
import type { Component } from 'solid-js';
import type { AboutUs } from '../../../types';
import { ContentSection } from '../../molecules/ContentSection';
import * as styles from './AboutUsSection.css';

export const AboutUsSection: Component<AboutUsSectionProps> = (props) => {
  return (
    <ContentSection class={styles.content} size="small" title="About Us">
      <p innerHTML={props.aboutUs.fields.overview} />

      <p>
        <b>{props.aboutUs.fields.marc}</b>
        <br />
        {props.aboutUs.fields.marcTitle}
      </p>
      <p innerHTML={props.aboutUs.fields.marcBio} />

      <p>
        <b>{props.aboutUs.fields.sanjay}</b>
        <br />
        {props.aboutUs.fields.sanjayTitle}
      </p>
      <p innerHTML={props.aboutUs.fields.sanjayBio} />
    </ContentSection>
  );
};

export interface AboutUsSectionProps {
  aboutUs: Entry<AboutUs>;
}
