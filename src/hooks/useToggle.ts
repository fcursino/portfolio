import { useState, useEffect } from 'react';

type ToggleOption<T> = {
  key: string;         
  defaultValue: T;    
  options: [T, T];    
};

type UseToggleReturn<T> = [T, () => void];

const useToggle = <T>({
  key,
  defaultValue,
  options,
}: ToggleOption<T>): UseToggleReturn<T> => {
  const [value, setValue] = useState<T>(() => {
    const savedValue = localStorage.getItem(key) as T | null;
    return savedValue !== null ? savedValue : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value as unknown as string);

    if (key === 'theme') {
      if (value === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [key, value]);

  const toggleValue = () => {
    setValue(prevValue => (prevValue === options[0] ? options[1] : options[0]));
  };

  return [value, toggleValue];
};

export default useToggle;
