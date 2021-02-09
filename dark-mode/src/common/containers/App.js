import React, { useContext, useLayoutEffect, useState } from 'react';

const ThemeContext = React.createContext(null)

export const useDarkmode = () => useContext(ThemeContext)

export default function App({ children }) {
  const [darkmode, setDarkmode] = useState(false)
  const handleToggleDarkmode = () => setDarkmode(prev => !prev)

  useLayoutEffect(() => {
    const root = document.documentElement
    
    root.classList[darkmode ? 'add' : 'remove']('dark-mode')
  }, [darkmode])
  return (
    <ThemeContext.Provider value={[darkmode, handleToggleDarkmode]}>
      {children}
    </ThemeContext.Provider>
  );
}
