import { Html, Head, Main, NextScript , Script } from "next/document";

import { VWOScript } from "npm-next-smartcode";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <VWOScript 
          accountId="955578"
          type="ASYNC"
          settingsTimeout={2000}
          hideElement="body"
          hideElementStyle="opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;transition:none !important;"
          scriptAttributes={{
            strategy: "beforeInteractive"
          }}
        />
      </body>
    </Html>
  );
}