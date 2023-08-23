import {
  Options,
  documentToReactComponents,
} from "@contentful/rich-text-react-renderer";
import { INLINES, type Document } from "@contentful/rich-text-types";
import reactStringReplace from "react-string-replace";
import { Link } from "../../molecules/Link";
import * as styles from "./RichText.css";

export const RichText = ({ className, field }: RichTextProps) => {
  const renderOptions: Options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => (
        <Link className={styles.link} href={node.data.uri}>
          {children}
        </Link>
      ),
    },
    renderText: (text: string) => {
      let replacedText = reactStringReplace(text, "---", (_, i) => (
        <span className={styles.emDashRed} key={i}>
          &mdash;
        </span>
      ));

      replacedText = reactStringReplace(replacedText, "--", (_, i) => (
        <span key={i}>&mdash;</span>
      ));

      return replacedText;
    },
  };

  if (!field) return <></>;

  return (
    <div className={className}>
      {documentToReactComponents(field, renderOptions)}
    </div>
  );
};

export interface RichTextProps {
  className?: string;
  field?: Document;
}
