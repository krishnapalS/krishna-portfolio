import React from 'react';
import { PROJECTS_DATA } from '../constants';
import { Github } from 'lucide-react';
import { useTheme } from '../App';

const Projects: React.FC = () => {
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
    <section id="projects" className="py-24 bg-skin-base relative transition-colors duration-500">
       {/* Top Border Decor for Royal */}
       {theme === 'theme-royal' && (
           <div className="absolute top-0 left-0 right-0 h-2 opacity-30" style={{backgroundImage: 'linear-gradient(to right, transparent, var(--color-primary), transparent)'}}></div>
       )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
           <div className="inline-block p-3 rounded-full border-2 border-skin-primary/30 mb-4">
              <div className="w-2 h-2 bg-skin-primary rotate-45"></div>
           </div>
           <h2 className={`text-4xl md:text-5xl font-bold text-skin-text ${getFontHeading()}`}>
             {theme === 'theme-royal' ? 'The Royal Armory' : 'Featured Projects'}
           </h2>
           <p className="mt-4 text-skin-muted italic text-lg">
              "Forged in code, built for the people."
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS_DATA.map((project, index) => (
            <div key={index} className={`group transition-all duration-500 relative overflow-hidden
               ${theme === 'theme-royal' ? 'bg-skin-card rounded-t-[40%] rounded-b-lg border border-skin-border shadow-xl hover:shadow-2xl' : ''}
               ${theme === 'theme-udaipur' ? 'bg-skin-card rounded-2xl border border-skin-border hover:border-skin-primary shadow-sm hover:shadow-lg' : ''}
               ${theme === 'theme-desert' ? 'bg-skin-card/90 backdrop-blur rounded-t-3xl border-t-4 border-skin-primary shadow-xl hover:-translate-y-2' : ''}
               ${theme === 'theme-folk' ? 'bg-skin-card rounded-3xl border-4 border-skin-text shadow-[8px_8px_0px_0px_var(--color-accent)] hover:shadow-none hover:translate-x-2 hover:translate-y-2' : ''}
               ${theme === 'theme-vintage' ? 'bg-skin-card p-2 border border-skin-border shadow-md' : ''}
            `}>
              
              {/* Image Container */}
              <div className={`relative overflow-hidden h-64
                 ${theme === 'theme-royal' ? 'border-b-4 border-double border-skin-border' : ''}
                 ${theme === 'theme-folk' ? 'rounded-t-2xl border-b-4 border-skin-text' : ''}
                 ${theme === 'theme-udaipur' ? 'rounded-t-2xl' : ''}
              `}>
                 {/* Image Overlay Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-t from-skin-base/20 to-transparent opacity-0 group-hover:opacity-20 transition-opacity z-10" />
                 
                 <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-8 pt-8 relative text-center">
                
                <h3 className={`text-2xl font-bold mb-4 ${theme === 'theme-udaipur' ? 'text-skin-primary uppercase tracking-wide' : 'text-skin-text'} ${getFontHeading()}`}>
                  {project.title}
                </h3>

                <p className="text-skin-text text-sm leading-relaxed mb-8">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className={`text-xs font-bold px-3 py-1 uppercase
                       ${theme === 'theme-udaipur' ? 'text-skin-secondary bg-skin-base rounded-full' : 
                         theme === 'theme-folk' ? 'bg-skin-accent text-skin-base border border-black rounded-full' :
                         'bg-skin-base text-skin-primary border border-skin-border/20 rounded-sm'
                       }
                    `}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="flex justify-center">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 px-6 py-2 transition-colors shadow-md text-sm
                           ${theme === 'theme-folk' ? 'bg-skin-primary text-white font-bold rounded-full border-2 border-black hover:shadow-none' : 
                             theme === 'theme-udaipur' ? 'text-skin-primary border border-skin-primary bg-transparent hover:bg-skin-primary hover:text-white rounded-full px-6 py-2 shadow-none' :
                             'bg-skin-primary text-white rounded-full hover:bg-skin-secondary'
                           }
                        `}>
                           <Github size={16} /> View Code
                        </a>
                    )}
                </div>
                
                {/* Decorative bottom corners for Royal */}
                {theme === 'theme-royal' && (
                   <>
                     <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-skin-border/30"></div>
                     <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-skin-border/30"></div>
                   </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;