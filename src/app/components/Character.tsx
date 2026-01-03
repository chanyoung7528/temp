import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Character() {
  const [showMessage, setShowMessage] = useState(false);
  const characterRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!characterRef.current) return;

    // Float animation
    gsap.to(characterRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Show message periodically
    const interval = setInterval(() => {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!messageRef.current) return;

    if (showMessage) {
      gsap.fromTo(
        messageRef.current,
        { opacity: 0, x: 20, scale: 0.8 },
        { opacity: 1, x: 0, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
    } else {
      gsap.to(messageRef.current, {
        opacity: 0,
        x: 20,
        scale: 0.8,
        duration: 0.3,
      });
    }
  }, [showMessage]);

  const messages = [
    "저희의 미래를 응원해 주세요! 💚",
    "정원이와 함께 행복하게 살겠습니다 🏠",
    "성실하게 저축할게요! 💰",
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev: number) => (prev + 1) % messages.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative">
        {/* Character */}
        <div
          ref={characterRef}
          className="cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={() => setShowMessage(!showMessage)}
        >
          <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-4xl drop-shadow-2xl">
            💝
          </div>
        </div>

        {/* Speech bubble */}
        {showMessage && (
          <div
            ref={messageRef}
            className="absolute bottom-full right-0 mb-4 bg-white text-gray-900 px-4 py-3 rounded-2xl shadow-2xl whitespace-nowrap"
          >
            <div className="relative">
              {messages[currentMessage]}
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
