import { AppProps } from "next/app";
import { Jost, Noto_Sans } from "next/font/google";
import "../styles/Layout.css";

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-jost: ${jost.style.fontFamily};
          --font-noto: ${notoSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />;
    </>
  );
}
