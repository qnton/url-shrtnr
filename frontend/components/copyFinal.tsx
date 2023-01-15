import { motion } from 'framer-motion';
import React from 'react';
import UrlContext from './urlContext';

const CopyFinal = () => {
  const { finalUrl, setError, setFinalUrl, setSlug, setStep, setUrl } =
    React.useContext(UrlContext);

  const handleClick = () => {
    navigator.clipboard.writeText(finalUrl);
  };

  const handleReset = () => {
    setStep(0);
    setSlug('');
    setUrl('');
    setFinalUrl('');
    setError('');
  };

  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ type: 'linear', delay: 0.1 }}
        className='flex'
      >
        <input
          className='w-full rounded-sm rounded-r-none border-2 border-r-0 border-white bg-transparent p-1 px-2 shadow-sm placeholder:text-white placeholder:opacity-50'
          type='text'
          placeholder='enough-clever-work'
          readOnly
          value={finalUrl}
        />
        <input
          type='button'
          className='rounded-sm rounded-l-none border-2 border-white bg-transparent p-1 px-2 shadow-sm transition duration-300 ease-in-out hover:bg-white hover:text-black'
          value='copy'
          onClick={() => handleClick()}
        />
      </motion.div>
      <motion.div
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ type: 'linear', delay: 2 }}
        className='absolute right-0 left-0 mt-2 flex '
      >
        <input
          type='button'
          className='mx-auto rounded-sm rounded-l-none border-2 border-white bg-transparent p-1 px-2 shadow-sm transition duration-300 ease-in-out hover:bg-white hover:text-black'
          value='Go back'
          onClick={() => handleReset()}
        />
      </motion.div>
    </>
  );
};

export default CopyFinal;
