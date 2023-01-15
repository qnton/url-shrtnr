import { motion } from 'framer-motion';
import React from 'react';
import UrlContext from './urlContext';

const EnterUrl = () => {
  const { setStep, setUrl, url } = React.useContext(UrlContext);

  return (
    <motion.form
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ type: 'linear', delay: 0.1 }}
      className='flex'
      onSubmit={(e) => {
        e.preventDefault();
        setStep(1);
      }}
    >
      <input
        className='w-full rounded-sm rounded-r-none border-2 border-r-0 border-white bg-transparent p-1 px-2 shadow-sm placeholder:text-white placeholder:opacity-50 focus:border-white'
        type='url'
        required
        placeholder='https://qnt.one'
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <input
        type='submit'
        className='rounded-sm rounded-l-none border-2 border-white bg-transparent p-1 px-2 shadow-sm transition duration-300 ease-in-out hover:bg-white hover:text-black focus:border-white'
        value='submit'
      />
    </motion.form>
  );
};

export default EnterUrl;
