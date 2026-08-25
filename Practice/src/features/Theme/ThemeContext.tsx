import { createContext, useContext, useState } from 'react';
import { lightColors, darkColors } from './Colors';

const ThemeContext = createContext<any>(null);

export function ThemeProvider({ children }: any) {
  const [isDark, setIsDark] = useState(false);

  const colors = isDark ? darkColors : lightColors;

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider
      value={{
        colors,
        isDark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}