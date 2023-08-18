import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Document } from "@contentful/rich-text-types";
import * as styles from "./RichText.css";

const renderOptions = {
  renderText: (text: string) => {
    return text.split(" ").map((word, index) => {
      if (word === "--") return <span key={index}> &mdash; </span>;
      if (word === "---") {
        return (
          <span className={styles.emDashRed} key={index}>
            {" "}
            &mdash;{" "}
          </span>
        );
      }
      return ` ${word} `;
    });
  },
};

export const RichText = ({ className, field }: RichTextProps) => {
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
