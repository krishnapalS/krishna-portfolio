import React from 'react';
import { SKILLS_DATA } from '../constants';
import { Cpu } from 'lucide-react';
import { useTheme } from '../App';

const Skills: React.FC = () => {
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
    <section id="skills" className="py-24 relative bg-skin-card overflow-hidden transition-colors duration-500">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-16">
           <div className={`p-4 rounded-full mb-4 ${theme === 'theme-folk' ? 'bg-skin-accent text-skin-base border-2 border-black' : 'bg-skin-primary text-white shadow-lg'}`}>
              <Cpu size={32} />
           </div>
           <h2 className={`text-4xl md:text-5xl font-bold text-skin-text text-center ${getFontHeading()}`}>
             Skills & Arsenal
           </h2>
           <div className="flex items-center gap-2 mt-4">
              <span className="h-px w-16 bg-skin-primary"></span>
              <span className="text-skin-primary text-xl">❖</span>
              <span className="h-px w-16 bg-skin-primary"></span>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS_DATA.map((category, index) => (
            <div key={index} className={`rounded-lg p-1 group
               ${theme === 'theme-royal' ? 'bg-skin-base shadow-md' : ''}
            `}>
               <div className={`h-full p-8 relative transition-all duration-300 
                  ${theme === 'theme-royal' ? 'bg-skin-card border border-skin-border/20 rounded-md' : ''}
                  ${theme === 'theme-udaipur' ? 'bg-skin-base border border-skin-border rounded-xl hover:border-skin-primary shadow-sm' : ''}
                  ${theme === 'theme-folk' ? 'bg-white border-2 border-dashed border-skin-primary rounded-2xl' : ''}
                  ${theme === 'theme-vintage' ? 'bg-skin-base border-y border-skin-border' : ''}
                  ${theme === 'theme-desert' ? 'bg-skin-base/50 backdrop-blur border border-skin-primary/20 rounded-xl' : ''}
               `}>
                  
                  {/* Header */}
                  <h3 className={`text-xl font-bold text-skin-primary mb-6 pb-4 border-b border-dotted border-skin-border/40 tracking-wider flex items-center gap-3 ${getFontHeading()}`}>
                     <span className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity">✦</span> {category.category}
                  </h3>
                  
                  <div className="flex flex-wrap gap-3">
                     {category.skills.map((skill, idx) => (
                        <span 
                        key={idx}
                        className={`px-4 py-2 text-sm transition-all cursor-default font-semibold shadow-sm
                           ${theme === 'theme-folk' ? 'bg-skin-accent text-skin-base rounded-full border border-black hover:rotate-3' : 
                             theme === 'theme-udaipur' ? 'bg-white text-skin-text border border-skin-border rounded-full hover:bg-skin-primary hover:text-white' :
                             'bg-skin-base text-skin-text rounded-sm border-b-2 border-skin-border/20 hover:border-skin-primary hover:bg-skin-primary hover:text-white'
                           }
                        `}
                        >
                        {skill}
                        </span>
                     ))}
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;