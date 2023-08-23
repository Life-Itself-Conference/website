import clsx from "clsx";
import { Jost, Noto_Sans } from "next/font/google";
import { PropsWithChildren, Suspense } from "react";
import "../styles/globals.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["400", "700", "800"],
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
    <html className={clsx(jost.variable, notoSans.variable)}>
      <body>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
