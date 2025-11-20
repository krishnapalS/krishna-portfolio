import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Loader2, ExternalLink } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { RESUME_CONTEXT } from '../constants';
import { Message } from '../types';

const BOT_AVATAR_URL = "https://i.pinimg.com/736x/c4/66/f6/c466f6255df55b471e5b54cabcd65b81.jpg";

const AiResumeChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'model', text: "Khamma Ghani Hukum 🙏 I'm Krishna's AI Assistant. Ask me anything about his experience, skills, or projects. I can also search the web for real-time info!" }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Initialize Gemini client with environment variable
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: input }] }
        ],
        config: {
           systemInstruction: RESUME_CONTEXT,
           tools: [{ googleSearch: {} }], // Enable Google Search for real-time updates
        }
      });

      const aiResponseText = response.text || "I couldn't generate a response at the moment.";
      
      // Extract grounding (search) sources if available
      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      const sources = groundingChunks
        ?.map((chunk: any) => chunk.web)
        .filter((web: any) => web !== undefined && web !== null)
        .map((web: any) => ({ title: web.title, uri: web.uri }));

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: aiResponseText,
        sources: sources
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "Sorry, I'm having trouble connecting to the server right now. Please try again later."
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-skin-primary hover:bg-skin-secondary text-white p-0 rounded-full shadow-lg transition-all duration-300 z-50 border-2 border-white/20 overflow-hidden ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Chat with AI"
      >
        <div className="w-14 h-14 relative">
           <img 
             src={BOT_AVATAR_URL} 
             alt="AI Bot" 
             className="w-full h-full object-cover"
           />
           <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 w-[90vw] md:w-[400px] h-[500px] bg-skin-card/95 backdrop-blur-xl border border-skin-border rounded-2xl shadow-2xl flex flex-col transition-all duration-300 z-50 overflow-hidden ${isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-10 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-skin-base border-b border-skin-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-skin-primary/10 rounded-full border border-skin-primary/20 overflow-hidden">
               <img src={BOT_AVATAR_URL} alt="Bot" className="w-full h-full object-cover" />
            </div>
            <div>
               <h3 className="font-bold text-skin-text text-sm font-royal">Krishna's AI Agent</h3>
               <p className="text-xs text-skin-primary flex items-center gap-1">
                 Powered by Gemini <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
               </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-skin-muted hover:text-skin-primary transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-skin-base/50">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'model' && (
                <div className="w-8 h-8 rounded-full bg-skin-card flex items-center justify-center flex-shrink-0 border border-skin-border overflow-hidden">
                  <img src={BOT_AVATAR_URL} alt="Bot" className="w-full h-full object-cover" />
                </div>
              )}
              <div 
                className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-skin-primary text-white rounded-br-none' 
                    : 'bg-skin-card text-skin-text border border-skin-border rounded-bl-none'
                }`}
              >
                {msg.text}
                
                {/* Display Grounding Sources */}
                {msg.sources && msg.sources.length > 0 && (
                  <div className="mt-3 pt-2 border-t border-skin-border/20">
                    <p className="text-[10px] uppercase tracking-wider font-bold opacity-70 mb-1">Sources</p>
                    <div className="flex flex-col gap-1">
                      {msg.sources.map((source, idx) => (
                        <a 
                          key={idx} 
                          href={source.uri} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-xs truncate hover:underline flex items-center gap-1 opacity-80 hover:opacity-100"
                        >
                          <ExternalLink size={10} /> {source.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-skin-border/20 flex items-center justify-center flex-shrink-0">
                  <User size={14} className="text-skin-muted" />
                </div>
              )}
            </div>
          ))}
          
          {isLoading && (
            <div className="flex gap-3 justify-start">
               <div className="w-8 h-8 rounded-full bg-skin-card flex items-center justify-center flex-shrink-0 border border-skin-border overflow-hidden">
                  <img src={BOT_AVATAR_URL} alt="Bot" className="w-full h-full object-cover" />
               </div>
               <div className="bg-skin-card border border-skin-border px-4 py-3 rounded-2xl rounded-bl-none shadow-sm">
                  <Loader2 size={16} className="animate-spin text-skin-primary" />
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-skin-border bg-skin-card">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask anything..."
              className="flex-1 bg-skin-base border border-transparent text-skin-text placeholder-skin-muted text-sm rounded-full px-4 focus:border-skin-primary outline-none transition-all"
              disabled={isLoading}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-2 bg-skin-primary text-white rounded-full hover:bg-skin-secondary disabled:opacity-50 transition-colors shadow-md"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiResumeChat;