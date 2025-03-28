import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  const themeConfig = {
    light: {
      bgColor: '#ffffff',
      textColor: '#000000',
      fontFamily: 'Patrick Hand',
      cards: {
        card1: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2JucmJwMDg5YTZ1YnBiNmI2MzhncWFsdzZhd3NnMjlrYTUycGs1dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6FxJBpNTBgWdJCXKD4/giphy.gif',
        card2: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYThjZ2liZHBpc3ozaWxibmhjZHpldmY1aHZ4ZDN3NWM0dzkxeHJ5dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT0GqFhyNd0Wmfo6sM/giphy.gif',
        card3: 'https://media.giphy.com/media/xTiTnyHeY4dfs6KQPC/giphy.gif?cid=ecf05e47d52xitf2p2gug3hfbq7nmzgmheudq7iyyykj212t&ep=v1_gifs_search&rid=giphy.gif&ct=g',
      },
      accentColor: '#ff69b4',
      titleContent: 'Hey there cutie ⸜(｡˃ ᵕ ˂ )⸝♡ ',
      navTitle: "⋆˚࿔ katan 𝜗𝜚˚⋆"
    },
    dark: {
      bgColor: '#000000',
      textColor: '#ffffff',
      fontFamily: 'Pirata One',
      cards: {
        card1: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDFuZ3pjZXI2M3ZzdXhldGp2dzl3M2llNDRsNXZheXBjNGRrNnhvdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3IIpwk0oSadIk/giphy.gif',
        card2: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDFuZ3pjZXI2M3ZzdXhldGp2dzl3M2llNDRsNXZheXBjNGRrNnhvdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RV50oK7FO7rcuLgJBL/giphy.gif',
        card3: 'https://media.giphy.com/media/od9S8DVmg143bLSAyX/giphy.gif?cid=790b761101ngzcer63vsuxetjvw9w3ie44l5vaypc4dk6xot&ep=v1_gifs_search&rid=giphy.gif&ct=g',
      },
      accentColor: '#ff1493',
      titleContent: 'Hey there goth mommy (⸝⸝> ᴗ•⸝⸝)',
      navTitle: '⫘⫘༒︎⫘⫘Katan⫘⫘༒︎⫘⫘'
    }
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--bg-color', themeConfig[theme].bgColor);
    document.documentElement.style.setProperty('--text-color', themeConfig[theme].textColor);
    document.documentElement.style.setProperty('--accent-color', themeConfig[theme].accentColor);
    document.documentElement.style.fontFamily = themeConfig[theme].fontFamily;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeConfig: themeConfig[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);