"use client";

import { useState, useRef, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { FaRegPaperPlane } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { getGeminiResponse } from "@/lib/gemini";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await getGeminiResponse(userMessage);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    } catch (error) {
      console.error("Error getting response:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-background border border-vintage-black/10 rounded-lg shadow-lg w-[350px] h-[500px] flex flex-col">
          <div className="p-4 border-b border-vintage-black/10 flex justify-between items-center">
            <h3 className="font-montserrat">Currency VN Support</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted hover:text-accent transition-colors"
            >
              <IoMdClose size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-accent text-white"
                      : "bg-muted/5"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted/5 p-3 rounded-lg">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-muted rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-muted rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-muted rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-vintage-black/10">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Nhập tin nhắn..."
                className="flex-1 px-4 py-2 bg-[#2A2A2A] border border-vintage-black/10 rounded-lg focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 bg-vintage-black text-vintage-white rounded-lg hover:bg-accent transition-colors disabled:opacity-50"
              >
                <FaRegPaperPlane />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-vintage-black text-vintage-white p-4 rounded-full hover:bg-accent transition-colors shadow-lg"
        >
          <BsChatDots size={24} />
        </button>
      )}
    </div>
  );
} 