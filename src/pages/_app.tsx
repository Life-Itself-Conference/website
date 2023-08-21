import { AppProps } from "next/app";
import "../styles/Layout.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
