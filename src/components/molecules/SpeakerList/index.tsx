import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { For } from 'solid-js';
import * as styles from './SpeakerList.css';

export const SpeakerList = (props: SpeakerListProps) => {
  return (
    <ul class={styles.list}>
      <For each={props.speakers.items}>
        {({
          fields: { affiliations, biography, firstName, lastName, photo },
        }) => {
          return (
            <li>
              <img src={photo.fields.file.url} />
              {firstName} {lastName}
              <For each={affiliations}>
                {({ fields }) => (
                  <div>
                    {fields.organization}
                    <br />
                    {fields.role}
                  </div>
                )}
              </For>
              {/* eslint-disable-next-line solid/no-innerhtml */}
              <div innerHTML={documentToHtmlString(biography)} />
            </li>
          );
        }}
      </For>
    </ul>
  );
};

export interface SpeakerListProps {
  speakers: any;
}
