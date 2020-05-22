import React, { useState, useEffect } from 'react';

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => { //useEffect cannot be an async function, only regular functions permitted.
    const fetchData = async () => { //so we make an async function within the useEffect, and call it below.
      setIsLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);        
        setIsLoading(false);
      } catch (error) { //this error handler will catch component errors, not response errors
        setError(error);
      }
    };
    fetchData();
  }, []); 
  return { response, error, isLoading };
}

export default useFetch;


  //'You can tell React to skip applying an effect if certain values haven’t changed between re-renders.
  // To do so, pass an array as an optional second argument to useEffect:' eg empty array is falsey, so never reruns after mount.