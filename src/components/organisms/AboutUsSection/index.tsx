import Image from "next/image";
import { Event } from "@/types";
import { RichText } from "../../atoms/RichText";
import { ContentSection } from "../../molecules/ContentSection";
import * as styles from "./AboutUsSection.css";

export interface AboutUsSectionProps {
  event: Event;
}

export const AboutUsSection = ({ event }: AboutUsSectionProps) => {
  const { aboutUs } = event.fields;

  if (!aboutUs) return null;

  return (
    <ContentSection
      className={styles.content}
      id="about-us"
      size="small"
      title="About Us"
    >
      <RichText field={aboutUs.fields.overview} />

      {aboutUs.fields.image && (
        <Image
          alt="Sanjay and Marc"
          className={styles.image}
          height={aboutUs.fields.image.fields.file?.details?.image?.height}
          src={`${aboutUs.fields.image.fields.file?.url}?fm=webp`}
          width={aboutUs.fields.image.fields.file?.details?.image?.width}
        />
      )}

      <div className={styles.bios}>
        <div>
          <h3>{aboutUs.fields.sanjay}</h3>
          <p className={styles.title}>
            <span> {aboutUs.fields.sanjayTitle},</span>
            <Image
              alt="Life Itself Logo"
              height={16}
              src="/life-itself.png"
              width={123}
            />
          </p>
          <RichText className={styles.bio} field={aboutUs.fields.sanjayBio} />
        </div>

        <div>
          <h3>{aboutUs.fields.marc}</h3>
          <p className={styles.title}>
            <span>{aboutUs.fields.marcTitle},</span>
            <Image
              alt="Life Itself Logo"
              height={16}
              src="/life-itself.png"
              width={123}
            />
          </p>
          <RichText className={styles.bio} field={aboutUs.fields.marcBio} />
        </div>
      </div>
    </ContentSection>
  );
};
