import React from 'react';

export const UrlContext = React.createContext({
  step: 0,
  setStep: (step: number) => {},
  url: '',
  setUrl: (url: string) => {},
  slug: '',
  setSlug: (slug: string) => {},
  error: '',
  setError: (error: string) => {},
  finalUrl: '',
  setFinalUrl: (finalUrl: string) => {},
});

export default UrlContext;
