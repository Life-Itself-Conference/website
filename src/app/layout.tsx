import clsx from "clsx";
import { Jost, Noto_Sans } from "next/font/google";
import { PropsWithChildren, Suspense } from "react";
import "../styles/globals.css";
import { GoogleAnalytics } from "../components/atoms/GoogleAnalytics";
import { NewsletterModal } from "../components/molecules/NewsletterModal";
import { SpeakerModal } from "../components/molecules/SpeakerModal";

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
  description: "Life Itself Medical Health Conference 2022",
  openGraph: {
    description: "Life Itself Medical Health Conference",
    locale: "en_US",
    siteName: "Life Itself with Dr. Sanjay Gupta and Marc Hodosh",
    title: "Life Itself with Dr. Sanjay Gupta and Marc Hodosh",
    url: "https://lifeitself.health",
  },
  title: {
    default: "LIFE ITSELF with Dr. Sanjay Gupta & Marc Hodosh",
    template: "%s | LIFE ITSELF with Dr. Sanjay Gupta & Marc Hodosh",
  },
  twitter: {
    card: "summary_large_image",
    description: "Life Itself Medical Health Conference",
    title: "Life Itself with Dr. Sanjay Gupta and Marc Hodosh",
  },
};

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <html className={clsx(jost.variable, notoSans.variable)} lang="en">
      <body>
        <Suspense>
          {children}
          <NewsletterModal />
          <SpeakerModal />
        </Suspense>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
