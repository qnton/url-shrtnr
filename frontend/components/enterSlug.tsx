import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import UrlContext from './urlContext';
import { generateSlug } from 'random-word-slugs';

const EnterSlug = () => {
  const { slug, setSlug, url, setError, setStep, setFinalUrl, error } =
    React.useContext(UrlContext);

  const placeholderSlug = generateSlug();

  if (slug === '') {
    setError('');
  }

  useEffect(() => {
    if (slug.length !== 0) {
      fetch(`${process.env.FINALURL}/${slug}/check`)
        .then((response) => response.json())
        .then((data) => {
          if (data?.success) {
            setError('');
          } else {
            setError('Slug already exists');
          }
        })
        .catch((error) => {});
    }
  }, [slug]);

  const handleSubmit = () => {
    const data = {
      url: url,
      slug: slug || placeholderSlug,
    };

    fetch(`${process.env.FINALURL}/shorten`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.url) {
          setError('');
          setStep(2);
          setFinalUrl(data.url);
        } else {
          setError('Slug already exists');
        }
      })
      .catch((error) => {});
  };

  return (
    <motion.form
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ type: 'linear', delay: 0.1 }}
      className='flex'
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <input
        className={`${error && 'border-red-500'}
        } w-full rounded-sm rounded-r-none border-2 border-r-0 border-white bg-transparent p-1 px-2 shadow-sm transition duration-300 ease-in-out placeholder:text-white placeholder:opacity-50`}
        type='text'
        placeholder={placeholderSlug}
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
      />
      <input
        type='submit'
        className={`${
          error
            ? 'border-red-500 text-red-500'
            : 'border-white text-white hover:bg-white hover:text-black'
        } rounded-sm rounded-l-none border-2 bg-transparent p-1 px-2 shadow-sm transition duration-300 ease-in-out`}
        value='submit'
      />
    </motion.form>
  );
};

export default EnterSlug;
