import React, { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue = null) => {
  const [value, setValue] = useState(() => {
    const saved = JSON.parse(localStorage.getItem(key));
    return saved ? saved : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
