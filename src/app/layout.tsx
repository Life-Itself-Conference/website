import clsx from "clsx";
import { Jost, Noto_Sans } from "next/font/google";
import Script from "next/script";
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
      <head>
        <Script
          id="mcjs"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/9ffd8880003444e617e7f70cf/686ef3f0e5300f8af9c7a225f.js");`
          }}
        />
      </head>
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
