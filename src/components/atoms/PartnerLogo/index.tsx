import Image from "next/image";
import { Partner } from "@/src/types";

export interface PartnerLogoProps {
  className?: string;
  partner: Partner;
  variant?: "dark" | "light";
}

export const PartnerLogo = ({
  className,
  partner,
  variant = "dark",
}: PartnerLogoProps) => {
  const darkVersion = partner.fields.logos?.find(
    (logo) => logo?.fields.title === "dark"
  );

  const lightVersion = partner.fields.logos?.find(
    (logo) => logo?.fields.title === "light"
  );

  const logo =
    variant === "dark"
      ? darkVersion || lightVersion
      : lightVersion || darkVersion;

  if (!logo) return null;

  return (
    <Image
      alt={`${partner.fields.name} logo`}
      className={className}
      height={logo.fields.file?.details.image?.height}
      src={logo.fields.file?.url as string}
      width={logo.fields.file?.details.image?.width}
    />
  );
};
