import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
}

const SUGGESTED_QUESTIONS = [
    "What is your current role?",
    "Tell me about the VS Code extension.",
    "What technologies do you work with?",
    "Explain the Secure Code Execution Service.",
    "How can I contact Rohit?"
];

// Internal component for typing effect
const Typewriter = ({ text, onComplete }: { text: string; onComplete?: () => void }) => {
    const [displayedText, setDisplayedText] = useState('');
    const index = useRef(0);

    useEffect(() => {
        index.current = 0;
        setDisplayedText('');

        const timer = setInterval(() => {
            if (index.current < text.length) {
                setDisplayedText((prev: string) => prev + text.charAt(index.current));
                index.current++;
            } else {
                clearInterval(timer);
                if (onComplete) onComplete();
            }
        }, 15); // Speed of typing

        return () => clearInterval(timer);
    }, [text, onComplete]);

    return (
        <div className="prose prose-invert prose-p:leading-relaxed prose-sm max-w-none">
            <ReactMarkdown>{displayedText}</ReactMarkdown>
        </div>
    );
};

// Component for static bot messages (already typed)
const BotStaticMessage = ({ text }: { text: string }) => (
    <div className="prose prose-invert prose-p:leading-relaxed prose-sm max-w-none">
        <ReactMarkdown>{text}</ReactMarkdown>
    </div>
);

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: "Hi! I'm Rohit's AI assistant. Ask me anything about his work, skills, or projects.", sender: 'bot' }
    ]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    // Track which message is currently being typed
    const [typingMessageId, setTypingMessageId] = useState<string | null>(null);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, typingMessageId]);

    const handleSendMessage = async (text: string) => {
        if (!text.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: text,
            sender: 'user'
        };

        setMessages((prev: Message[]) => [...prev, userMessage]);
        setInputText('');
        setIsLoading(true);

        try {
            const response = await fetch('https://portfolio-backend-5wm4.vercel.app/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question: text }),
            });

            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();
            const botText = data.answer || "I couldn't get a response. Is the backend running?";
            const msgId = (Date.now() + 1).toString();

            const botMessage: Message = {
                id: msgId,
                text: botText,
                sender: 'bot'
            };

            setMessages((prev: Message[]) => [...prev, botMessage]);
            setTypingMessageId(msgId); // Start typing this message

        } catch (error) {
            console.error(error);
            const msgId = (Date.now() + 1).toString();
            setMessages((prev: Message[]) => [...prev, {
                id: msgId,
                text: "Sorry, I'm having trouble connecting to the brain. Make sure the Python backend is running on port 8000.",
                sender: 'bot'
            }]);
            setTypingMessageId(msgId);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] glass-panel border border-primary/20 rounded-2xl flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-200">

                    {/* Header */}
                    <div className="p-4 border-b border-white/10 bg-primary/10 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                                <span className="material-symbols-outlined text-primary text-sm">smart_toy</span>
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm">Portfolio Assistant</h3>
                                <span className="flex items-center gap-1.5">
                                    <span className="size-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="text-xs text-gray-400">Online</span>
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                        {messages.map((msg: Message) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                                        ? 'bg-primary text-background-dark rounded-tr-none font-medium'
                                        : 'bg-white/10 text-gray-200 rounded-tl-none border border-white/5'
                                        }`}
                                >
                                    {msg.sender === 'user' ? (
                                        msg.text
                                    ) : (
                                        // If it's the bot, check if we need to type it or show static
                                        msg.id === typingMessageId ? (
                                            <Typewriter
                                                text={msg.text}
                                                onComplete={() => setTypingMessageId(null)}
                                            />
                                        ) : (
                                            <BotStaticMessage text={msg.text} />
                                        )
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Suggested Questions (only show if few messages) */}
                        {messages.length === 1 && (
                            <div className="flex flex-col gap-2 mt-4">
                                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1 ml-1">Suggested Questions</p>
                                {SUGGESTED_QUESTIONS.map((q, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleSendMessage(q)}
                                        className="text-left text-sm text-primary hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-200"
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        )}

                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white/10 px-4 py-2 rounded-2xl rounded-tl-none flex gap-1 items-center">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-white/10 bg-black/20">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
                                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleSendMessage(inputText)}
                                placeholder="Ask about Rohit..."
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                            />
                            <button
                                onClick={() => handleSendMessage(inputText)}
                                disabled={isLoading || !inputText.trim()}
                                className="size-9 flex items-center justify-center rounded-xl bg-primary text-background-dark hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <span className="material-symbols-outlined text-lg">send</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`size-14 rounded-full shadow-neon flex items-center justify-center transition-all duration-300 hover:scale-110 ${isOpen ? 'bg-white text-background-dark rotate-90' : 'bg-primary text-background-dark'
                    }`}
            >
                <span className="material-symbols-outlined text-2xl">
                    {isOpen ? 'close' : 'chat_bubble'}
                </span>
            </button>
        </div>
    );
};

export default ChatWidget;
