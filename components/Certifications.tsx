import React from 'react';
import { CERTIFICATIONS_DATA } from '../constants';
import { Award, ShieldCheck } from 'lucide-react';
import { useTheme } from '../App';

const Certifications: React.FC = () => {
  const { theme } = useTheme();

  const getFontHeading = () => {
    if (theme === 'theme-royal') return 'font-royal';
    if (theme === 'theme-udaipur') return 'font-udaipur';
    if (theme === 'theme-desert') return 'font-desert';
    if (theme === 'theme-folk') return 'font-folk';
    if (theme === 'theme-vintage') return 'font-vintage';
    return 'font-sans';
  };

  return (
    <section id="certifications" className="py-24 bg-skin-card relative transition-colors duration-500 border-t border-skin-border/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
           <div className="inline-block mb-4">
               <Award size={40} className="text-skin-primary" />
           </div>
           <h2 className={`text-4xl md:text-5xl font-bold text-skin-text ${getFontHeading()}`}>
             Certifications & Badges
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <div key={index} className={`group relative p-8 transition-all duration-300 hover:-translate-y-1
               ${theme === 'theme-royal' ? 'bg-skin-base rounded-sm border border-skin-border shadow-lg' : ''}
               ${theme === 'theme-udaipur' ? 'bg-skin-base rounded-2xl border border-skin-border hover:border-skin-primary shadow-sm' : ''}
               ${theme === 'theme-folk' ? 'bg-skin-base rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_var(--color-primary)]' : ''}
               ${theme === 'theme-desert' ? 'bg-skin-base/50 backdrop-blur rounded-xl border border-skin-primary/20' : ''}
               ${theme === 'theme-vintage' ? 'bg-skin-base border-2 border-double border-skin-border' : ''}
            `}>
              
              {/* Decorative Icon Background */}
              <div className="absolute top-0 right-0 p-4 opacity-10">
                 <ShieldCheck size={64} />
              </div>

              <h3 className={`text-xl font-bold text-skin-text mb-2 ${getFontHeading()}`}>
                {cert.title}
              </h3>
              
              <p className="text-skin-primary text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                 <span className="w-8 h-px bg-skin-primary"></span> {cert.issuer}
              </p>
              
              <p className="text-skin-muted text-sm leading-relaxed">
                 {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;