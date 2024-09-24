import React, { useEffect } from 'react';

const Storage = () => {
  useEffect(() => {
    localStorage.setItem('name','irshana');
  }, []); // Empty dependency array ensures this runs only on mount
  return <h1>Local Storage</h1>;
};

export default Storage;
