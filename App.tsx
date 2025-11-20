import React, { useState, useEffect, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import AiResumeChat from './components/AiResumeChat';
import { Theme } from './types';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'theme-folk',
  setTheme: () => {},
  darkMode: false,
  toggleDarkMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

function App() {
  // Set default theme to 'theme-folk' (Vibrant Kathputli)
  const [theme, setTheme] = useState<Theme>('theme-folk');
  // Set default darkMode to false
  const [darkMode, setDarkMode] = useState(false);

  // Apply theme class to body/root
  useEffect(() => {
    const root = document.documentElement;
    // Remove all theme classes
    root.classList.remove('theme-royal', 'theme-udaipur', 'theme-desert', 'theme-folk', 'theme-vintage');
    // Add active theme
    root.classList.add(theme);
    
    // Handle Dark Mode
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme, darkMode]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, darkMode, toggleDarkMode: () => setDarkMode(!darkMode) }}>
      <div className={`min-h-screen font-sans transition-colors duration-500 overflow-x-hidden`}>
        
        {/* Global Pattern Overlay */}
        <div className="fixed inset-0 pointer-events-none z-0 pattern-overlay" />
        
        <Navbar />
        
        <main className="relative z-10">
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
          <Certifications />
        </main>
        
        <Contact />
        <AiResumeChat />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;