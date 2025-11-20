import React from 'react';
import { ArrowDown, Download, MapPin } from 'lucide-react';
import { RESUME_CONTEXT, EXPERIENCE_DATA, SKILLS_DATA, ACHIEVEMENTS_DATA } from '../constants';
import { useTheme } from '../App';

const Hero: React.FC = () => {
  const { theme } = useTheme();

  const handleDownloadResume = () => {
    const line = "=".repeat(60);
    const subLine = "-".repeat(60);
    let content = `${line}\nKRISHNA PAL DEORA\nB.Tech + M.Tech | IIT Dhanbad\n${subLine}\n`;
    content += `Email: krishna.pal.deora.sde@gmail.com\nLocation: Rajasthan, India\n${line}\n\n`;
    content += `SUMMARY\n${subLine}\nFull Stack Engineer with expertise in React, Spring Boot, and Microservices.\nCurrently optimizing digital signing platforms at Jio.\n\n`;
    content += `EXPERIENCE\n${line}\n`;
    EXPERIENCE_DATA.forEach(exp => {
       content += `\n${exp.role.toUpperCase()}\n${exp.company} | ${exp.period}\n${exp.location}\n`;
       exp.points.forEach(p => content += `• ${p}\n`);
    });
    content += `\nSKILLS\n${line}\n`;
    SKILLS_DATA.forEach(cat => {
        content += `${cat.category}: ${cat.skills.join(", ")}\n`;
    });
    content += `\nACHIEVEMENTS\n${line}\n`;
    ACHIEVEMENTS_DATA.forEach(ach => {
        content += `• ${ach.title}: ${ach.description}\n`;
    });
    content += `\n${line}\nGenerated from Portfolio Website`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Krishna_Pal_Deora_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Theme specific font classes
  const getFontHeading = () => {
    if (theme === 'theme-royal') return 'font-royal';
    if (theme === 'theme-udaipur') return 'font-udaipur';
    if (theme === 'theme-desert') return 'font-desert';
    if (theme === 'theme-folk') return 'font-folk';
    if (theme === 'theme-vintage') return 'font-vintage';
    return 'font-sans';
  };

  return (
    <section id="about" className={`min-h-screen flex items-center justify-center relative overflow-hidden pt-20 ${theme === 'theme-desert' ? 'bg-gradient-to-b from-amber-100 via-orange-100 to-amber-50' : 'bg-skin-base'}`}>
      
      {/* THEME SPECIFIC BACKGROUNDS */}
      
      {/* Royal: Curtains/Pillars */}
      {theme === 'theme-royal' && (
        <>
          <div className="absolute left-0 top-0 h-full w-16 md:w-32 bg-repeat-y opacity-20 border-r border-skin-border hidden lg:block" style={{backgroundImage: 'linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%, currentColor)', backgroundSize: '20px 20px'}}></div>
          <div className="absolute right-0 top-0 h-full w-16 md:w-32 bg-repeat-y opacity-20 border-l border-skin-border hidden lg:block" style={{backgroundImage: 'linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%, currentColor)', backgroundSize: '20px 20px'}}></div>
        </>
      )}

      {/* Udaipur: Lake Ripples & Clean Arches */}
      {theme === 'theme-udaipur' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
           {/* Abstract Lake Shapes */}
           <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-skin-primary/5 rounded-full blur-3xl"></div>
           <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-skin-secondary/5 rounded-full blur-2xl"></div>
           {/* Arch Outline */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[85%] border border-skin-border/50 rounded-t-[200px] pointer-events-none"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[80%] border border-skin-border/30 rounded-t-[180px] pointer-events-none"></div>
        </div>
      )}

      {/* Jaisalmer (Desert): Golden Forts & Camels */}
      {theme === 'theme-desert' && (
        <>
          <div className="absolute bottom-0 w-full overflow-hidden">
             {/* Dunes */}
             <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-amber-200/50 to-transparent rounded-[50%_50%_0_0] transform scale-150 translate-y-32"></div>
             
             {/* Camel Silhouette */}
             <div className="absolute bottom-20 right-[10%] text-skin-primary opacity-20">
                <svg width="100" height="80" viewBox="0 0 100 80" fill="currentColor">
                  <path d="M20,70 Q25,60 30,65 Q35,70 40,70 L40,50 Q45,40 55,45 Q65,50 70,45 L75,35 Q80,30 85,35 L90,40 Q95,35 90,30 Q85,25 80,30 L75,40 Q70,35 65,35 Q60,30 55,35 L55,20 Q50,10 40,15 L35,25 L30,35 Q20,30 15,35 Q10,40 15,50 L15,70 Z" />
                </svg>
             </div>

             {/* Fort Silhouette */}
             <svg className="w-full h-32 md:h-48 text-skin-primary opacity-15" preserveAspectRatio="none" viewBox="0 0 1200 120">
                 <path d="M0,120 L1200,120 L1200,60 L1150,60 L1150,90 L1100,90 L1100,60 L1050,60 L1050,90 L1000,90 L1000,60 L900,60 L900,40 L850,40 L850,60 L800,60 L800,90 L750,90 L750,60 L700,60 L700,90 L650,90 L650,60 L600,60 L600,30 L550,30 L550,60 L500,60 L500,90 L450,90 L450,60 L400,60 L400,90 L350,90 L350,60 L300,60 L300,40 L250,40 L250,60 L200,60 L200,90 L150,90 L150,60 L100,60 L100,90 L50,90 L50,60 L0,60 Z" fill="currentColor"/>
             </svg>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-100/50 via-transparent to-transparent pointer-events-none"></div>
        </>
      )}

      {/* Folk: Hanging Toran */}
      {theme === 'theme-folk' && (
        <div className="absolute top-20 left-0 w-full flex justify-center overflow-hidden">
            <div className="flex space-x-8">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className={`w-12 h-16 ${i%2===0 ? 'bg-skin-primary' : 'bg-skin-accent'} rounded-b-full opacity-20`}></div>
                ))}
            </div>
        </div>
      )}

      {/* Vintage: Paper Border */}
      {theme === 'theme-vintage' && (
        <div className="absolute inset-4 border-2 border-double border-skin-border pointer-events-none rounded-lg"></div>
      )}


      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
        
        {/* CONTAINER STYLES BASED ON THEME */}
        <div className={`relative mx-auto transition-all duration-500 
          ${theme === 'theme-royal' ? 'bg-skin-card/80 backdrop-blur-md p-16 rounded-t-[3rem] rounded-b-xl border-x-4 border-b-4 border-double border-skin-border shadow-2xl' : ''}
          ${theme === 'theme-udaipur' ? 'bg-skin-card/50 backdrop-blur-sm p-12 rounded-3xl border border-white shadow-xl' : ''}
          ${theme === 'theme-desert' ? 'bg-skin-card/90 backdrop-blur-sm p-12 rounded-t-3xl rounded-b-lg border-t-8 border-skin-primary shadow-2xl' : ''}
          ${theme === 'theme-folk' ? 'bg-skin-card border-4 border-dashed border-skin-primary p-10 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]' : ''}
          ${theme === 'theme-vintage' ? 'bg-skin-card p-12 shadow-lg border border-skin-border' : ''}
        `}>
            
            {/* Royal Arch Decoration */}
            {theme === 'theme-royal' && (
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-64 text-skin-border opacity-50">
                 <svg viewBox="0 0 100 20" fill="currentColor"><path d="M0 20 C 20 20, 20 0, 50 0 C 80 0, 80 20, 100 20 Z" /></svg>
              </div>
            )}

            {/* Folk Corners */}
            {theme === 'theme-folk' && (
               <>
                 <div className="absolute -top-3 -left-3 w-6 h-6 bg-skin-accent rounded-full"></div>
                 <div className="absolute -top-3 -right-3 w-6 h-6 bg-skin-accent rounded-full"></div>
                 <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-skin-accent rounded-full"></div>
                 <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-skin-accent rounded-full"></div>
               </>
            )}

            <div className="space-y-6 relative z-10">
               
               {/* Greeting Section */}
               <div className="flex flex-col items-center gap-2 mb-2">
                  <div className={`inline-flex items-center gap-3 px-4 py-1 rounded-full ${theme === 'theme-udaipur' ? 'bg-white/50 text-skin-primary border border-skin-border/50' : 'border border-skin-border/30 bg-skin-base/50'}`}>
                      <span className={`w-2 h-2 rounded-full ${theme === 'theme-folk' ? 'bg-skin-accent animate-bounce' : 'bg-skin-primary animate-ping'}`}></span>
                      <h2 className={`text-skin-primary uppercase text-xs tracking-widest font-bold ${getFontHeading()}`}>
                        Khamma Ghani & Welcome
                      </h2>
                  </div>
                  
                  <div className="flex items-center justify-center gap-3 mt-1 animate-in fade-in slide-in-from-bottom-2 duration-1000">
                     <span className={`text-xl md:text-2xl font-bold text-skin-primary ${getFontHeading()}`}>Padhaaro Sa 🙏</span>
                  </div>
               </div>
               
               {/* Name */}
               <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-skin-text drop-shadow-sm tracking-tight ${getFontHeading()}`}>
                  <span className={`block text-2xl md:text-3xl font-normal mb-2 text-skin-muted italic ${theme === 'theme-udaipur' ? 'not-italic font-light tracking-widest' : ''}`}>I am</span>
                  Krishna Pal
                  <span className={`block mt-2 ${theme === 'theme-desert' ? 'text-skin-primary' : 'text-skin-primary'}`}>Deora</span>
               </h1>
               
               {/* Divider/Decor */}
               <div className="flex items-center justify-center gap-4 py-4">
                  <div className="h-px w-12 bg-skin-border"></div>
                  <div className={`w-3 h-3 ${theme === 'theme-udaipur' ? 'bg-skin-primary rounded-full' : 'bg-skin-accent rotate-45'}`}></div>
                  <div className="h-px w-12 bg-skin-border"></div>
               </div>
               
               {/* Role */}
               <div className={`text-xl md:text-2xl text-skin-text leading-relaxed ${theme === 'theme-vintage' ? 'italic' : ''}`}>
                  B.Tech + M.Tech from <span className="text-skin-primary font-bold border-b-2 border-skin-primary/20">IIT Dhanbad</span> | SDE II at <span className="text-skin-primary font-bold border-b-2 border-skin-primary/20">Jio Platforms</span>
               </div>
               
               {/* Location */}
               <div className="flex items-center justify-center text-skin-muted text-sm md:text-base font-mono gap-2">
                   <MapPin size={16} /> Rajasthan, India
               </div>

               {/* Buttons */}
               <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
                  <a 
                     href="#experience"
                     className={`group relative px-8 py-3 text-lg transition-all overflow-hidden flex items-center gap-2
                        ${theme === 'theme-udaipur' ? 'bg-skin-primary text-white rounded-full hover:bg-skin-secondary shadow-lg hover:shadow-blue-200' : 
                          theme === 'theme-folk' ? 'bg-skin-accent text-skin-base rounded-full font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none border-2 border-black' : 
                          theme === 'theme-royal' ? 'bg-skin-primary text-white rounded-sm font-bold tracking-wider shadow-lg border border-skin-primary' :
                          'bg-skin-primary text-white rounded-md hover:bg-skin-secondary shadow-md'
                        }
                     `}
                  >
                     <span className="relative z-10 flex items-center gap-2">Explore My Journey <ArrowDown size={18} /></span>
                  </a>
                  
                  <button 
                     onClick={handleDownloadResume}
                     className={`px-8 py-3 transition-all flex items-center gap-2
                        ${theme === 'theme-udaipur' ? 'bg-transparent text-skin-primary border border-skin-primary hover:bg-skin-primary/5 rounded-full' : 
                          theme === 'theme-folk' ? 'bg-white text-skin-text border-2 border-black rounded-full font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none' : 
                          theme === 'theme-royal' ? 'bg-transparent text-skin-primary border-2 border-skin-primary hover:bg-skin-primary hover:text-white rounded-sm font-bold' :
                          'bg-transparent text-skin-primary border border-skin-primary hover:bg-skin-primary/10 rounded-md'
                        }
                     `}
                  >
                     Download Resume <Download size={18} />
                  </button>
               </div>
            </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-skin-primary">
         <ArrowDown size={32} className="drop-shadow-lg" />
      </div>
    </section>
  );
};

export default Hero;