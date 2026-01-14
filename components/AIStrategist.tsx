
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Minimize2, Maximize2, Sparkles, Loader2, Bot, Zap, ArrowRight, ExternalLink } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import { ChatMessage } from '../types';
import { useNavigate } from 'react-router-dom';

const AIStrategist: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Operational. Welcome to the RPtechhub Executive Suite. I am your Digital Strategist. How may I assist your enterprise growth today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const quickActions = [
    { label: "IT Services", query: "What are your IT services?" },
    { label: "RCM Solutions", query: "Tell me about RCM" },
    { label: "Real Estate", query: "Real Estate investment opportunities" }
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (overrideInput?: string) => {
    const textToSend = overrideInput || input;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: textToSend };
    const currentMessages = [...messages, userMessage];
    setMessages(currentMessages);
    setInput('');
    setIsLoading(true);

    const history = currentMessages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    let aiResponse = '';
    try {
      const stream = geminiService.sendMessageStream(history);
      setMessages(prev => [...prev, { role: 'model', text: '' }]);
      
      for await (const chunk of stream) {
        aiResponse += chunk;
        setMessages(prev => {
          const next = [...prev];
          next[next.length - 1].text = aiResponse;
          return next;
        });
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => {
        const next = [...prev];
        next[next.length - 1].text = "Communication link interrupted. Please verify connectivity or re-initialize query.";
        return next;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (query: string) => {
    setInput(query);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const parseMessage = (text: string) => {
    const ctaLinks: { label: string, path: string }[] = [];
    if (text.includes('it-services-page')) ctaLinks.push({ label: 'Explore IT Protocol', path: '/it-services' });
    if (text.includes('bpo-services-page')) ctaLinks.push({ label: 'View BPO Strategy', path: '/bpo-services' });
    if (text.includes('marketing-page')) ctaLinks.push({ label: 'Growth Marketing Lab', path: '/marketing' });
    if (text.includes('real-estate-page')) ctaLinks.push({ label: 'Strategic Land Assets', path: '/real-estate' });

    const cleanText = text
      .replace(/it-services-page/g, 'our IT Services page')
      .replace(/bpo-services-page/g, 'our BPO Services page')
      .replace(/marketing-page/g, 'our Marketing page')
      .replace(/real-estate-page/g, 'our Real Estate page');

    return { cleanText, ctaLinks };
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    if (window.innerWidth < 768) setIsMinimized(true);
  };

  return (
    <>
      {/* 1. Kinetic Robo Trigger */}
      {!isOpen && (
        <div className="fixed bottom-8 right-8 z-[1000] bot-float">
          <div className="pulse-ring" style={{ animationDelay: '0s', borderColor: '#3b82f6' }} />
          <div className="pulse-ring" style={{ animationDelay: '0.8s', borderColor: '#0ea5e9' }} />
          <div className="pulse-ring" style={{ animationDelay: '1.6s', borderColor: '#3b82f6' }} />
          <button 
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.6)] hover:scale-110 active:scale-95 transition-all z-[1001] group border-2 border-blue-400/50"
          >
            <Bot className="text-white group-hover:rotate-12 transition-transform w-8 h-8" />
            <span className="absolute -top-14 right-0 bg-slate-900 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded border border-blue-500/30 whitespace-nowrap opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all shadow-2xl">
              Sync Intelligence
            </span>
          </button>
        </div>
      )}

      {/* 2. Main Bot Interface Container */}
      <div className={`fixed bottom-8 right-8 z-[999] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        <div className={`glass-panel rounded-2xl shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-500 ${isMinimized ? 'w-72 h-[88px]' : 'w-80 md:w-[440px] h-[680px]'} flex flex-col`}>
          
          <div className="bg-slate-900/95 px-7 py-6 flex items-center justify-between border-b border-white/10 shrink-0 group/header relative z-10">
            <div className="flex items-center space-x-5">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover/header:scale-105 transition-transform duration-500">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-sky-500 border-4 border-slate-950 rounded-full shadow-[0_0_15px_rgba(14,165,233,0.8)]">
                  <div className="absolute inset-0 bg-sky-500 rounded-full animate-ping opacity-75" />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[16px] font-black tracking-[0.1em] text-white uppercase leading-none mb-1.5 animate-glitch">AI STRATEGIST</h3>
                <div className="flex items-center">
                  <span className="text-[10px] text-blue-400/80 uppercase font-black tracking-[0.3em]">EXECUTIVE INTELLIGENCE</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button 
                onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }} 
                className="text-slate-500 hover:text-white p-2.5 transition-all hover:bg-white/5 rounded-xl border border-transparent hover:border-white/10"
              >
                {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} 
                className="text-slate-500 hover:text-blue-500 p-2.5 transition-all hover:bg-white/5 rounded-xl border border-transparent hover:border-blue-500/20"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="bg-slate-900/70 px-6 py-4 border-b border-white/5 overflow-x-auto no-scrollbar flex items-center space-x-3 whitespace-nowrap shrink-0 relative z-10">
                <span className="text-[9px] font-black text-blue-500/50 uppercase tracking-[0.4em] mr-2 shrink-0">Suggestions:</span>
                {quickActions.map((action, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickAction(action.query)}
                    className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-sm text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all hover:scale-105 active:scale-95"
                  >
                    {action.label}
                  </button>
                ))}
              </div>

              <div ref={scrollRef} className="flex-1 overflow-y-auto p-7 space-y-7 custom-scrollbar relative z-10 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.03),transparent)]">
                {messages.map((m, i) => {
                  const { cleanText, ctaLinks } = parseMessage(m.text);
                  return (
                    <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start animate-[fadeIn_0.5s_ease-out]'}`}>
                      <div className={`max-w-[88%] px-6 py-5 rounded-2xl text-[14px] leading-relaxed tracking-wide shadow-lg ${
                        m.role === 'user' 
                          ? 'bg-blue-600 text-white rounded-tr-none font-bold' 
                          : 'bg-white/10 text-slate-200 border border-white/10 rounded-tl-none backdrop-blur-xl'
                      }`}>
                        {cleanText || (isLoading && i === messages.length - 1 ? "..." : "")}
                      </div>
                      {m.role === 'model' && ctaLinks.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-4">
                          {ctaLinks.map((link, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleNavigate(link.path)}
                              className="flex items-center space-x-3 px-5 py-3 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[11px] font-black uppercase tracking-[0.3em] rounded-sm hover:bg-blue-600 hover:text-white transition-all group/cta shadow-[0_0_20px_rgba(37,99,235,0.1)]"
                            >
                              <span>{link.label}</span>
                              <ExternalLink size={14} className="group-hover/cta:translate-x-1 transition-transform" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white/5 px-6 py-5 rounded-2xl border border-white/10 flex items-center space-x-4 backdrop-blur-md">
                      <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
                      <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">SYNCING_NEURAL_STREAMS...</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-7 border-t border-white/10 bg-slate-950/80 shrink-0 relative z-10">
                <div className="relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Inquire about ROI, IT, or BPO strategy..."
                    className="w-full bg-slate-900/60 border border-white/15 text-white rounded-full py-5 px-8 pr-20 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/30 placeholder:text-slate-600 transition-all focus:bg-slate-900"
                  />
                  <button 
                    onClick={() => handleSend()}
                    disabled={isLoading || !input.trim()}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-sky-500 hover:scale-105 active:scale-95 transition-all disabled:opacity-30 disabled:scale-100 shadow-xl"
                  >
                    <Send size={20} />
                  </button>
                </div>
                <div className="mt-5 text-center flex items-center justify-center space-x-3 opacity-30">
                   <div className="h-px w-8 bg-slate-700" />
                   <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.6em]">RP_TECH_OS v4.2.0_CORE</p>
                   <div className="h-px w-8 bg-slate-700" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AIStrategist;
