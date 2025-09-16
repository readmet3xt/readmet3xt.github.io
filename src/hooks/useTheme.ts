import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' || 'dark';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: 'dark' | 'light') => {
    const body = document.body;
    if (newTheme === 'light') {
      body.classList.remove('dark');
      body.classList.add('light');
    } else {
      body.classList.remove('light');
      body.classList.add('dark');
    }
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = (newTheme: 'dark' | 'light') => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return { theme, toggleTheme };
};