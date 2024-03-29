import Document, {Head, Html, Main, NextScript} from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html className="dark min-h-full">
        <Head>
          <link rel="apple-touch-icon" sizes="57x57" href="/favicon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/favicon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/favicon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/favicon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/favicon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/favicon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/favicon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/favicon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <meta name="msapplication-TileColor" content="#0C0C0F" />
          <meta name="msapplication-TileImage" content="/favicon-144x144.png" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#0C0C0F"></meta>
        </Head>
        <body className="flex h-full min-h-full flex-col dark:bg-background dark:text-cloud">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
