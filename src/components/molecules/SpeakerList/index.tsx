// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import type { Entry } from 'contentful';
import { Component, For } from 'solid-js';
import type { Speaker } from '../../../types';
import { SpeakerBlock } from '../../atoms/SpeakerBlock';
import * as styles from './SpeakerList.css';

export const SpeakerList: Component<SpeakerListProps> = (props) => {
  return (
    <ul class={styles.list}>
      <For each={props.speakers}>
        {(item) => (
          <li>
            <SpeakerBlock speaker={item} />
          </li>
        )}
      </For>
    </ul>
  );
};

// export const SpeakerList: Component<SpeakerListProps> = (props) => {
//   return (
//     <ul class={styles.list}>
//       <For each={props.speakers.items}>
//         {({
//           fields: { affiliations, biography, firstName, lastName, photo },
//         }) => {
//           return (
//             <li>
//               <img src={photo.fields.file.url} />
//               {firstName} {lastName}
//               <For each={affiliations}>
//                 {({ fields }) => (
//                   <div>
//                     {fields.organization}
//                     <br />
//                     {fields.role}
//                   </div>
//                 )}
//               </For>
//               {/* eslint-disable-next-line solid/no-innerhtml */}
//               <div innerHTML={documentToHtmlString(biography)} />
//             </li>
//           );
//         }}
//       </For>
//     </ul>
//   );
// };

export interface SpeakerListProps {
  speakers: Entry<Speaker>[];
}
