import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import UrlContext from '../components/urlContext';
import EnterSlug from '../components/enterSlug';
import EnterUrl from '../components/enterUrl';
import CopyFinal from 'components/copyFinal';
import Header from 'components/header';

export default function Web() {
  const [step, setStep] = useState<number>(0);
  const [url, setUrl] = useState<string>('');
  const [slug, setSlug] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [finalUrl, setFinalUrl] = useState<string>('');

  return (
    <UrlContext.Provider
      value={{
        step,
        setStep,
        url,
        setUrl,
        slug,
        setSlug,
        error,
        setError,
        finalUrl,
        setFinalUrl,
      }}
    >
      <Header />
      <div className='mx-5 flex h-screen items-center justify-center uppercase'>
        <div className='relative'>
          <motion.h1
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ type: 'linear', delay: 0.1 }}
            className='text-grey-300 text-5xl md:text-8xl'
          >
            url-shrtnr
          </motion.h1>
          <AnimatePresence>
            {step === 0 && <EnterUrl />}
            {step === 1 && <EnterSlug />}
            {step === 2 && <CopyFinal />}
          </AnimatePresence>
          <p
            className={`${
              error ? 'opacity-100' : 'opacity-0'
            } text-sm text-red-500 transition duration-300 ease-in-out`}
          >
            {error ? error : <>&nbsp;</>}
          </p>
        </div>
      </div>
    </UrlContext.Provider>
  );
}
