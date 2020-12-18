import { useEffect, useState } from 'react';

export const useDebounce = (value, deplay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, deplay);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
};
