import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Bot } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello. I am Atul AI. How can I assist you with our logistics operations today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100); // Slight delay for animation
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(inputValue);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'System malfunction. Please check connection parameters.', isError: true }]);
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
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Chat Assistant" : "Open Chat Assistant"}
        aria-expanded={isOpen}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-950 ${
          isOpen 
            ? 'bg-slate-800 text-slate-400 rotate-90' 
            : 'bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 shadow-cyan-500/20 hover:shadow-cyan-500/40'
        }`}
      >
        {isOpen ? <X size={24} aria-hidden="true" /> : <MessageSquare size={24} aria-hidden="true" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-96 h-[500px] bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border border-slate-200 dark:border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-[fade-in-up_0.3s_ease-out]"
          role="dialog"
          aria-label="Atul AI Assistant Chat Window"
        >
          {/* Header */}
          <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center gap-3">
            <div className="p-2 bg-cyan-100 dark:bg-cyan-500/10 rounded-lg" aria-hidden="true">
              <Bot size={20} className="text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <h3 className="text-slate-900 dark:text-white font-medium text-sm">Atul AI Assistant</h3>
              <div className="flex items-center gap-1.5" role="status" aria-label="System status: Online">
                <span className="block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></span>
                <span className="text-xs text-slate-500 dark:text-slate-400">System Online</span>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div 
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-transparent"
            role="log"
            aria-live="polite"
            aria-relevant="additions"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-cyan-600 text-white rounded-br-none'
                      : msg.isError 
                        ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 border border-red-200 dark:border-red-800 rounded-bl-none'
                        : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-bl-none shadow-sm dark:shadow-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-bl-none border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-none" role="status" aria-label="AI is typing">
                  <Loader2 size={16} className="text-cyan-600 dark:text-cyan-400 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 focus-within:border-cyan-500/50 transition-colors">
              <label htmlFor="chat-input" className="sr-only">Type your message</label>
              <input
                id="chat-input"
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about our fleet..."
                className="flex-1 bg-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none text-sm"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                aria-label="Send message"
                className="p-1.5 rounded-lg text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              >
                <Send size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;