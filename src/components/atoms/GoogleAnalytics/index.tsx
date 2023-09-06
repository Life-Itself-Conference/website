import Script from "next/script";

export const GoogleAnalytics = () => {
  if (process.env.IS_PREVIEW === "true") return;

  return (
    <>
      <Script
        async
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=UA-147992802-1"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "UA-147992802-1");
      `,
        }}
        id="gtag-init"
        strategy="afterInteractive"
      />
    </>
  );
};
