import { AnimatePresence, motion } from 'framer-motion';
import { AppProps } from 'next/app';
import Head from 'next/head';

import '../style.css';

export default function NextApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode='wait'>
      <Head>
        <title>url-shrtnr</title>
        <link
          href='favicon.ico'
          rel='icon'
          type='image/x-icon'
        />
      </Head>
      <motion.main
        animate={{ opacity: 1 }}
        data-scroll-container
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        key={router.pathname}
        transition={{ type: 'linear', delay: 0.1 }}
      >
        <Component {...pageProps} />
      </motion.main>
    </AnimatePresence>
  );
}
