import '@/styles/globals.css';
import Layout from '@/layouts';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>PT. Cudo Communications</title>
        <meta
          name="description"
          content="PT. Cudo Communications"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
