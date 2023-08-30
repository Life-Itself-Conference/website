import clsx from "clsx";
import NextLink from "next/link";
import { ComponentProps } from "react";
import { useNewsletterModalStore } from "@/src/store";
import * as styles from "./Link.css";

export const Link = (props: ComponentProps<typeof NextLink>) => {
  const openNewsletterModal = useNewsletterModalStore(
    (state) => state.openNewsletterModal
  );
  const href = props.href.toString();

  if (href === "?modal=newsletter") {
    return (
      <button
        className={clsx(styles.buttonLink, props.className)}
        onClick={openNewsletterModal}
        type="button"
      >
        {props.children}
      </button>
    );
  }

  // if (href === "?modal=registration") {
  //   return (
  //     <RegistrationModal
  //       trigger={
  //         <button
  //           className={clsx(styles.buttonLink, props.className)}
  //           type="button"
  //         >
  //           {props.children}
  //         </button>
  //       }
  //     />
  //   );
  // }

  return (
    <NextLink
      target={href.startsWith("http") ? "_blank" : "_self"}
      {...props}
    />
  );
};
