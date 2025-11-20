import React, { useState, useEffect } from 'react';
import { NAV_LINKS, LINKEDIN_URL } from '../constants';
import { Menu, X, Github, Linkedin, Sun, Moon, Palette, ChevronDown } from 'lucide-react';
import { useTheme } from '../App';
import { Theme } from '../types';

const themes: { id: Theme; name: string; icon: string }[] = [
  { id: 'theme-royal', name: 'Royal Jharokha', icon: '🏰' },
  { id: 'theme-udaipur', name: 'Udaipur (Lake City)', icon: '🌊' },
  { id: 'theme-desert', name: 'Jaisalmer (Golden)', icon: '🐪' },
  { id: 'theme-folk', name: 'Vibrant Kathputli', icon: '🎭' },
  { id: 'theme-vintage', name: 'Miniature Chronicle', icon: '📜' },
];

const Navbar: React.FC = () => {
  const { theme, setTheme, darkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme specific font classes for the logo
  const getLogoFont = () => {
    if (theme === 'theme-royal') return 'font-royal';
    if (theme === 'theme-udaipur') return 'font-udaipur';
    if (theme === 'theme-desert') return 'font-desert';
    if (theme === 'theme-folk') return 'font-folk';
    if (theme === 'theme-vintage') return 'font-vintage';
    return 'font-sans';
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-skin-base/95 backdrop-blur-md shadow-xl border-b border-skin-border' 
        : 'bg-transparent pt-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
            <div className={`relative w-10 h-10 flex items-center justify-center transition-transform duration-500 ${theme === 'theme-udaipur' ? 'rounded-2xl border border-skin-primary/30' : 'rounded-full'} ${theme === 'theme-royal' ? 'rotate-45 rounded-sm' : ''}`}>
                <div className="absolute inset-0 bg-skin-primary opacity-20 rounded-inherit"></div>
                <span className={`relative z-10 font-bold text-xl text-skin-primary ${getLogoFont()} ${theme === 'theme-royal' ? '-rotate-45' : ''}`}>K</span>
             </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold text-skin-text ${getLogoFont()} tracking-widest leading-none`}>
                KRISHNA
              </span>
              <span className="text-[0.65rem] tracking-[0.3em] text-skin-muted uppercase">
                Pal Deora
              </span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-2 py-1 text-skin-text hover:text-skin-primary font-medium text-sm tracking-wider transition-colors group ${getLogoFont()}`}
                >
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-skin-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              
              {/* Divider */}
              <div className="h-6 w-px bg-skin-border mx-2"></div>

              <div className="flex items-center space-x-4">
                {/* Theme Selector */}
                <div className="relative">
                  <button 
                    onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-skin-card border border-skin-border text-skin-text text-xs font-medium hover:border-skin-primary transition-colors"
                  >
                    <Palette size={14} />
                    <span className="hidden lg:inline">{themes.find(t => t.id === theme)?.name}</span>
                    <ChevronDown size={12} />
                  </button>

                  {themeMenuOpen && (
                    <div className="absolute top-full right-0 mt-2 w-56 bg-skin-card border border-skin-border rounded-lg shadow-xl py-1 overflow-hidden animate-in fade-in zoom-in duration-200">
                      {themes.map((t) => (
                        <button
                          key={t.id}
                          onClick={() => { setTheme(t.id); setThemeMenuOpen(false); }}
                          className={`w-full text-left px-4 py-3 text-sm flex items-center gap-3 hover:bg-skin-base transition-colors ${theme === t.id ? 'text-skin-primary font-bold bg-skin-base' : 'text-skin-text'}`}
                        >
                          <span className="text-lg">{t.icon}</span>
                          {t.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Socials */}
                <a href="https://github.com/krishnapalS" target="_blank" rel="noreferrer" className="text-skin-muted hover:text-skin-primary transition-colors">
                  <Github size={18} />
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="text-skin-muted hover:text-skin-primary transition-colors">
                  <Linkedin size={18} />
                </a>
                
                {/* Dark/Light Toggle */}
                <button 
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-skin-base hover:bg-skin-primary hover:text-white text-skin-primary transition-all border border-skin-border"
                >
                  {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
             <button 
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-skin-base text-skin-primary border border-skin-border"
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-skin-primary p-2 hover:bg-skin-base rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-skin-card border-t border-skin-border shadow-2xl absolute w-full z-50 h-screen">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-skin-text hover:text-skin-primary block px-3 py-3 text-lg font-bold border-l-4 border-transparent hover:border-skin-primary transition-all tracking-wide ${getLogoFont()}`}
              >
                {link.name}
              </a>
            ))}
            
            <div className="mt-6 pt-6 border-t border-skin-border">
              <p className="text-xs uppercase text-skin-muted mb-3 tracking-widest">Select Theme</p>
              <div className="grid grid-cols-1 gap-2">
                {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => { setTheme(t.id); setIsOpen(false); }}
                      className={`text-left px-3 py-3 text-sm rounded-lg border flex items-center gap-3 ${theme === t.id ? 'border-skin-primary bg-skin-primary text-white' : 'border-skin-border text-skin-text'}`}
                    >
                      <span className="text-xl">{t.icon}</span> {t.name}
                    </button>
                  ))}
              </div>
            </div>

            <div className="flex justify-center space-x-8 pt-6 mt-4 border-t border-skin-border">
               <a href="https://github.com/krishnapalS" target="_blank" rel="noreferrer" className="text-skin-muted hover:text-skin-primary p-3 bg-skin-base rounded-full border border-skin-border">
                  <Github size={24} />
               </a>
               <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="text-skin-muted hover:text-skin-primary p-3 bg-skin-base rounded-full border border-skin-border">
                  <Linkedin size={24} />
               </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;