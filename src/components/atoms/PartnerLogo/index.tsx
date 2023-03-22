import type { Entry } from 'contentful';
import { Component, mergeProps, Show } from 'solid-js';
import type { Partner } from '../../../types';

export const PartnerLogo: Component<PartnerLogoProps> = (props) => {
  const defaultedProps = mergeProps({ variant: 'dark' }, props);

  const darkVersion = defaultedProps.partner.fields.logo.find(
    (item) => item.fields.title === 'dark',
  );
  const lightVersion = defaultedProps.partner.fields.logo.find(
    (item) => item.fields.title === 'light',
  );

  const logo =
    defaultedProps.variant === 'dark'
      ? darkVersion || lightVersion
      : lightVersion || darkVersion;

  return (
    <Show when={logo}>
      <img
        alt={`${defaultedProps.partner.fields.partner} logo`}
        class={defaultedProps.class}
        src={logo?.fields?.file?.url}
      />
    </Show>
  );
};

export interface PartnerLogoProps {
  class?: string;
  partner: Entry<Partner>;
  variant?: 'dark' | 'light';
}
