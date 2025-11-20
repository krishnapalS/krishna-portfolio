import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { LINKEDIN_URL } from '../constants';
import { useTheme } from '../App';

const Contact: React.FC = () => {
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
    <footer id="contact" className="bg-skin-base pt-24 pb-10 border-t-8 border-double border-skin-primary relative z-20 overflow-hidden transition-colors duration-500">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
               <div className="h-1 w-12 bg-skin-primary"></div>
               <h2 className={`text-4xl font-bold text-skin-primary ${getFontHeading()}`}>
                  {theme === 'theme-folk' ? "Let's Talk!" : "The Royal Court"}
               </h2>
            </div>
            <p className="text-skin-muted mb-10 text-lg italic border-l-4 border-skin-secondary pl-4">
              "Whether you hold a decree of opportunity or wish to parley about technology, my gates are always open."
            </p>
            
            <div className="space-y-8">
              <a href="mailto:krishna.pal.deora.sde@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-skin-card flex items-center justify-center border-2 border-skin-primary text-skin-primary group-hover:bg-skin-primary group-hover:text-white transition-all shadow-lg">
                  <Mail size={24} />
                </div>
                <span className="text-lg text-skin-text group-hover:text-skin-primary transition-colors">krishna.pal.deora.sde@gmail.com</span>
              </a>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-skin-card flex items-center justify-center border-2 border-skin-primary text-skin-primary group-hover:bg-skin-primary group-hover:text-white transition-all shadow-lg">
                  <Phone size={24} />
                </div>
                <span className="text-lg text-skin-text group-hover:text-skin-primary transition-colors">+91-9102791121</span>
              </div>

              {/* WhatsApp Direct Link */}
               <a href="https://wa.me/919102791121" target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center border-2 border-green-600 text-white group-hover:scale-110 transition-transform shadow-lg p-3">
                  <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <span className="text-lg text-skin-text group-hover:text-green-600 transition-colors font-bold">Chat on WhatsApp</span>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-skin-card flex items-center justify-center border-2 border-skin-primary text-skin-primary group-hover:bg-skin-primary group-hover:text-white transition-all shadow-lg">
                  <MapPin size={24} />
                </div>
                <span className="text-lg text-skin-text group-hover:text-skin-primary transition-colors">Rajasthan, India</span>
              </div>
            </div>

            <div className="flex gap-6 mt-12">
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="px-8 py-3 bg-skin-card rounded-sm hover:bg-skin-primary hover:text-white transition-all flex items-center gap-2 font-bold tracking-wider border border-skin-border">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href="https://github.com/krishnapalS" target="_blank" rel="noreferrer" className="px-8 py-3 bg-skin-card rounded-sm hover:bg-skin-primary hover:text-white transition-all flex items-center gap-2 font-bold tracking-wider border border-skin-border">
                <Github size={20} /> GitHub
              </a>
            </div>
          </div>

          <div className={`bg-skin-card p-8 md:p-10 shadow-2xl relative
             ${theme === 'theme-royal' ? 'rounded-t-[3rem] rounded-b-lg border-x-2 border-b-2 border-skin-border' : 'rounded-xl border border-skin-border'}
          `}>
             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-skin-primary text-white px-6 py-2 rounded-full text-sm font-bold tracking-widest shadow-lg whitespace-nowrap z-10">
                GET IN TOUCH
             </div>

            <form className="space-y-6 mt-6">
              <div>
                <label className="block text-skin-text text-sm font-bold mb-2 tracking-wide uppercase">Your Name</label>
                <input 
                  type="text" 
                  className="w-full bg-skin-base border-b-2 border-skin-border/50 focus:border-skin-primary px-4 py-3 outline-none transition-colors text-skin-text placeholder-skin-muted rounded-t-md"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-skin-text text-sm font-bold mb-2 tracking-wide uppercase">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-skin-base border-b-2 border-skin-border/50 focus:border-skin-primary px-4 py-3 outline-none transition-colors text-skin-text placeholder-skin-muted rounded-t-md"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-skin-text text-sm font-bold mb-2 tracking-wide uppercase">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-skin-base border-b-2 border-skin-border/50 focus:border-skin-primary px-4 py-3 outline-none transition-colors text-skin-text placeholder-skin-muted rounded-t-md resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              
              <button className={`w-full py-4 text-white font-bold tracking-widest flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.02]
                 ${theme === 'theme-folk' ? 'bg-skin-accent text-skin-base border-2 border-black rounded-full hover:shadow-none' : 
                   theme === 'theme-udaipur' ? 'bg-skin-primary rounded-full' :
                   'bg-skin-primary rounded-sm hover:bg-skin-secondary'
                 }
              `}>
                <Send size={18} /> SEND MESSAGE
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-skin-border/30 text-center">
          <p className="text-skin-muted text-sm font-mono">
            © {new Date().getFullYear()} Krishna Pal Deora. Crafted with <span className="text-skin-primary">♥</span> & React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;