import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { MapPin, Calendar } from 'lucide-react';
import { useTheme } from '../App';

// SVG Logos
const JioLogo = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
    <circle cx="24" cy="24" r="24" fill="#d70f25"/>
    <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="22" fontWeight="900" fontFamily="sans-serif">Jio</text>
  </svg>
);

const MicrosoftLogo = () => (
  <svg viewBox="0 0 23 23" className="w-full h-full" fill="none">
    <path fill="#f25022" d="M1 1h10v10H1z"/>
    <path fill="#00a4ef" d="M1 12h10v10H1z"/>
    <path fill="#7fba00" d="M12 1h10v10H12z"/>
    <path fill="#ffb900" d="M12 12h10v10H12z"/>
  </svg>
);

const UniversityLogo = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full text-skin-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

const Experience: React.FC = () => {
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
    <section id="experience" className="py-24 bg-skin-card relative overflow-hidden transition-colors duration-500">
       
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
           <span className="text-skin-primary font-bold tracking-widest text-sm uppercase">My Career Path</span>
           <h2 className={`text-4xl md:text-5xl font-bold text-skin-text mt-3 mb-6 ${getFontHeading()}`}>
             {theme === 'theme-royal' ? 'Royal Expedition' : 
              theme === 'theme-folk' ? 'My Story' : 
              theme === 'theme-vintage' ? 'Chronicles' :
              'Professional Experience'}
           </h2>
           <div className="w-24 h-1 bg-gradient-to-r from-transparent via-skin-primary to-transparent mx-auto"></div>
        </div>

        <div className="relative ml-4 md:ml-0">
           {/* Timeline Line */}
           <div className={`hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 
              ${theme === 'theme-folk' ? 'border-l-2 border-dashed border-skin-primary' : 'bg-skin-border'}
           `}></div>
           
           {/* Mobile Line */}
           <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-skin-border"></div>

          <div className="space-y-16">
            {EXPERIENCE_DATA.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Marker / Logo */}
                <div className={`absolute left-6 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 flex items-center justify-center z-20 overflow-hidden
                   ${theme === 'theme-folk' ? 'w-12 h-12 bg-white rounded-full border-2 border-black p-2' : 
                     theme === 'theme-udaipur' ? 'w-14 h-14 bg-white shadow-lg border-2 border-skin-primary/20 rounded-full p-3' :
                     'w-16 h-16 rounded-full bg-white border-4 border-skin-card shadow-xl p-2'
                   }
                `}>
                   {exp.company.toLowerCase().includes("jio") ? <JioLogo /> : 
                    exp.company.toLowerCase().includes("microsoft") ? <MicrosoftLogo /> :
                    <div className="w-full h-full p-1"><UniversityLogo /></div>}
                </div>
                
                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-20 md:px-16">
                  <div className={`group relative transition-all duration-500 hover:-translate-y-2 
                     ${theme === 'theme-folk' ? 'bg-skin-base border-2 border-skin-text shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-2xl' : 
                       theme === 'theme-udaipur' ? 'bg-skin-base/80 backdrop-blur shadow-sm border border-skin-border hover:shadow-md rounded-xl' :
                       theme === 'theme-vintage' ? 'bg-skin-base border border-skin-border p-8 shadow-sm' :
                       theme === 'theme-desert' ? 'bg-skin-base border border-skin-primary/30 rounded-lg shadow-lg' :
                       'bg-skin-base p-1 rounded-xl shadow-xl'
                     }
                     ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}
                  `}>
                    
                    {/* Royal Decorative corners */}
                    {theme === 'theme-royal' && (
                      <div className={`absolute top-0 w-16 h-16 border-t-4 border-skin-secondary/40 transition-all duration-500 group-hover:w-full ${index % 2 === 0 ? 'left-0 border-l-4 rounded-tl-xl' : 'right-0 border-r-4 rounded-tr-xl md:left-auto md:right-0 left-0 md:border-r-4 md:border-l-0 border-l-4 rounded-tl-xl md:rounded-tr-xl md:rounded-tl-none'}`}></div>
                    )}

                    <div className={`relative overflow-hidden ${theme === 'theme-royal' ? 'bg-skin-card p-6 md:p-8 rounded-lg border border-skin-border/10' : theme === 'theme-udaipur' ? 'p-6 md:p-8' : theme === 'theme-folk' ? 'p-6 md:p-8' : 'p-6 md:p-8'}`}>
                       
                       <h3 className={`text-xl md:text-2xl font-bold text-skin-primary mb-2 tracking-wide ${getFontHeading()}`}>{exp.role}</h3>
                       <h4 className="text-lg font-bold text-skin-text mb-4 flex items-center gap-2 justify-start md:justify-end lg:justify-start" style={{justifyContent: index % 2 !== 0 ? 'flex-end' : 'flex-start'}}>
                          <span className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>{exp.company}</span>
                       </h4>
                       
                       {/* Metadata Row */}
                       <div className={`flex flex-wrap gap-4 text-xs font-bold text-skin-muted mb-6 uppercase tracking-wider ${index % 2 === 0 ? 'justify-start' : 'md:justify-end justify-start'}`}>
                          <span className="flex items-center gap-2 px-3 py-1 bg-skin-card rounded-sm border border-skin-border">
                             <Calendar size={14} className="text-skin-primary" /> {exp.period}
                          </span>
                          <span className="flex items-center gap-2 px-3 py-1 bg-skin-card rounded-sm border border-skin-border">
                             <MapPin size={14} className="text-skin-primary" /> {exp.location}
                          </span>
                       </div>
                       
                       <ul className={`space-y-3 text-skin-text leading-relaxed text-sm md:text-base font-medium ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                         {exp.points.map((point, idx) => (
                           <li key={idx} className="relative">
                              <span className={`md:hidden inline-block text-skin-primary mr-2`}>❖</span>
                              {point}
                           </li>
                         ))}
                       </ul>
                    </div>
                  </div>
                </div>
                
                {/* Empty side spacer */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;