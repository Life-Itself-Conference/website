import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import type { Document } from '@contentful/rich-text-types';

export const RichText = (props: RichTextProps) => {
  return (
    <div
      className={props.className}
      dangerouslySetInnerHTML={{ __html: documentToHtmlString(props.field) }}
    />
  );
};

export interface RichTextProps {
  className?: string;
  field: Document;
}
