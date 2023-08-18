import clsx from "clsx";
import { Jost, Noto_Sans } from "next/font/google";
import { PropsWithChildren, Suspense } from "react";
import "../styles/globals.css";
import * as styles from "../styles/Layout.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["400", "700"],
});
const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["400", "700"],
});

export const metadata = {
  title: {
    default: "LIFE ITSELF with Dr. Sanjay Gupta & Marc Hodosh",
    template: "%s | LIFE ITSELF with Dr. Sanjay Gupta & Marc Hodosh",
  },
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html className={clsx(jost.variable, notoSans.variable, styles.html)}>
      <body className={styles.body}>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
