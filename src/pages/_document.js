import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="AI-powered social media management tool to supercharge your online presence. Automate posting, analyze engagement, and create content with ease." />
        <meta name="keywords" content="AI, social media, automation, content creation, analytics, engagement, scheduling" />
        <meta property="og:title" content="AI Copilot - Your Intelligent Social Media Assistant" />
        <meta property="og:description" content="Revolutionize your social media strategy with AI-powered tools. Boost engagement, save time, and grow your online presence effortlessly." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aicopilot.com" />
        <meta property="og:image" content="https://aicopilot.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Copilot - Your Intelligent Social Media Assistant" />
        <meta name="twitter:description" content="Revolutionize your social media strategy with AI-powered tools. Boost engagement, save time, and grow your online presence effortlessly." />
        <meta name="twitter:image" content="https://aicopilot.com/twitter-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://aicopilot.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}