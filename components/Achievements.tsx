import React from 'react';
import { ACHIEVEMENTS_DATA } from '../constants';
import { Trophy, Award, Medal } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';
import { useTheme } from '../App';

const Achievements: React.FC = () => {
  const { theme } = useTheme();

  const getBarColors = () => {
     if (theme === 'theme-udaipur') return ['#0ea5e9', '#38bdf8', '#7dd3fc', '#bae6fd'];
     if (theme === 'theme-folk') return ['#be123c', '#db2777', '#059669', '#eab308'];
     if (theme === 'theme-desert') return ['#d97706', '#f59e0b', '#fbbf24', '#fcd34d'];
     if (theme === 'theme-vintage') return ['#1c1917', '#15803d', '#854d0e', '#57534e'];
     return ['#9f1239', '#b45309', '#d97706', '#f59e0b']; // Royal default
  }
  
  const colors = getBarColors();

  const problemData = [
    { name: 'LeetCode', solved: 400, color: colors[0] }, 
    { name: 'CodeForces', solved: 300, color: colors[1] }, 
    { name: 'SPOJ', solved: 200, color: colors[2] }, 
    { name: 'HackerRank', solved: 300, color: colors[3] }, 
  ];

  const getFontHeading = () => {
    if (theme === 'theme-royal') return 'font-royal';
    if (theme === 'theme-udaipur') return 'font-udaipur';
    if (theme === 'theme-desert') return 'font-desert';
    if (theme === 'theme-folk') return 'font-folk';
    if (theme === 'theme-vintage') return 'font-vintage';
    return 'font-sans';
  };

  return (
    <section id="achievements" className="py-24 bg-skin-base transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
           <h2 className={`text-4xl md:text-5xl font-bold text-skin-text inline-block border-b-4 border-double border-skin-primary pb-2 px-8 ${getFontHeading()}`}>
             Honors & Conquests
           </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Cards */}
          <div className="space-y-6">
            {ACHIEVEMENTS_DATA.map((achievement, index) => (
              <div key={index} className={`flex items-center gap-6 p-6 transition-all group relative overflow-hidden
                 ${theme === 'theme-folk' ? 'bg-skin-card rounded-2xl border-2 border-black shadow-md' : 
                   theme === 'theme-udaipur' ? 'bg-skin-card rounded-xl border border-skin-border shadow-sm hover:shadow-md' :
                   'bg-skin-card rounded-r-xl border-l-4 border-skin-primary shadow-lg hover:shadow-2xl'
                 }
              `}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-skin-primary/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
                
                <div className={`relative p-4 rounded-full flex items-center justify-center
                   ${theme === 'theme-folk' ? 'bg-skin-accent text-skin-base border-2 border-black' : 'bg-skin-base text-skin-primary border-2 border-skin-primary/20'}
                `}>
                  {index === 0 ? <Trophy size={24} /> : <Medal size={24} />}
                </div>
                <div>
                  <h3 className={`text-lg font-bold text-skin-text tracking-wide ${getFontHeading()}`}>{achievement.title}</h3>
                  <p className="text-skin-muted text-sm italic mt-1 leading-relaxed">{achievement.description}</p>
                  {achievement.rank && (
                     <span className="inline-block mt-3 px-3 py-0.5 border border-skin-primary text-skin-primary text-xs font-bold tracking-widest uppercase rounded-full">
                        {achievement.rank}
                     </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className={`p-8 flex flex-col relative
             ${theme === 'theme-folk' ? 'bg-skin-card rounded-2xl border-2 border-black shadow-[8px_8px_0px_0px_var(--color-accent)]' : 
               theme === 'theme-udaipur' ? 'bg-skin-card rounded-xl border border-skin-border shadow-sm' :
               'bg-skin-card rounded-xl border-2 border-skin-border/10 shadow-2xl'
             }
          `}>
            {/* Card Decoration */}
            <div className="absolute top-4 right-4 flex gap-1">
               <div className="w-2 h-2 bg-skin-primary rounded-full"></div>
               <div className="w-2 h-2 bg-skin-accent rounded-full"></div>
            </div>
            
            <h3 className={`text-2xl font-bold text-skin-text mb-8 text-center flex items-center justify-center gap-3 ${getFontHeading()}`}>
               <span className="text-skin-primary text-3xl">⚔</span> Problem Solving
            </h3>
            
            <div className="flex-1 min-h-[350px]">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={problemData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" opacity={0.1} />
                     <XAxis dataKey="name" stroke="currentColor" fontSize={11} tickLine={false} axisLine={false} dy={10} className="text-skin-muted" />
                     <YAxis stroke="currentColor" fontSize={12} tickLine={false} axisLine={false} className="text-skin-muted" />
                     <Tooltip 
                        contentStyle={{ backgroundColor: 'var(--color-bg-base)', borderColor: 'var(--color-primary)', color: 'var(--color-text-base)', borderRadius: '4px' }}
                        cursor={{ fill: 'var(--color-primary)', opacity: 0.1 }}
                     />
                     <Bar dataKey="solved" radius={[2, 2, 0, 0]} barSize={45}>
                        {problemData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                     </Bar>
                  </BarChart>
               </ResponsiveContainer>
            </div>
            <div className="mt-6 text-center">
               <span className={`inline-block px-6 py-2 text-white font-bold text-sm tracking-widest
                  ${theme === 'theme-folk' ? 'bg-skin-primary rounded-full border-2 border-black' : 'bg-skin-primary rounded-sm shadow-md'}
               `}>
                  TOTAL: 1200+ Solved
               </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;