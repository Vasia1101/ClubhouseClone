import Document, { HTML, Head, Main, NextScript } from 'next/head';

import Button from '../components/Button';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <HTML>
      <Head>
        <meta name="viewport" content="with=device-width, initial-scale=1.0" />
        <title>WebRts_Pet_Project</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </body>
    </HTML>
  );
}
