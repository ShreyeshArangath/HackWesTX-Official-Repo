import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bungee&family=Sofia+Sans:ital,wght@0,200;0,400;0,600;1,200;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <a id="mlh-trust-badge" style={{display: "block", "max-width": "100px", "min-width": "60px", "position": "fixed", "right": "50px", "top": 0, "width": "10%", "z-index": 10000}} href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white" target="_blank" rel="noreferrer"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg" alt="Major League Hacking 2024 Hackathon Season" style={{"width": "100%"}}/></a>
      </body>
    </Html>
  );
}
