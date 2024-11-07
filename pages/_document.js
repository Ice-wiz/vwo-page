import { Html, Head, Main, NextScript } from "next/document";
import { VWOScript } from "npm-next-smartcode";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
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
            id: "vwoCode",
            strategy: "beforeInteractive"
          }}
        />
      </body>
    </Html>
  );
}