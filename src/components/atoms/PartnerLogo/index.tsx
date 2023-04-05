import type { Entry } from 'contentful';
import type { Partner } from '../../../types';

export const PartnerLogo = (props: PartnerLogoProps) => {
  const { variant = 'dark' } = props;

  const darkVersion = props.partner.fields.logo.find(
    (item) => item.fields.title === 'dark',
  );
  const lightVersion = props.partner.fields.logo.find(
    (item) => item.fields.title === 'light',
  );

  const logo =
    variant === 'dark'
      ? darkVersion || lightVersion
      : lightVersion || darkVersion;

  if (!logo) return null;

  return (
    <img
      alt={`${props.partner.fields.partner} logo`}
      className={props.className}
      src={logo?.fields?.file?.url}
    />
  );
};

export interface PartnerLogoProps {
  className?: string;
  partner: Entry<Partner>;
  variant?: 'dark' | 'light';
}
