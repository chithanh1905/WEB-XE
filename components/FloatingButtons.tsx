"use client";
import { useState, useEffect } from "react";
import { DEALER_INFO } from "@/lib/data";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Phone bar – cố định trên cùng bên phải giống web mẫu */}
      <a
        href={DEALER_INFO.hotlineLink}
        className="fixed z-50 flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg font-bold text-white text-sm hover:opacity-90 transition-opacity"
        style={{ background: "#E30613", bottom: 16, left: 16 }}
        aria-label="Gọi điện"
      >
        {/* Phone icon với vòng sóng */}
        <span className="relative flex items-center justify-center">
          <span className="absolute w-9 h-9 rounded-full bg-red-200 animate-ping opacity-60" />
          <span className="relative w-7 h-7 rounded-full bg-white flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#E30613">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </span>
        </span>
        {DEALER_INFO.hotline}
      </a>

      {/* Floating buttons cột bên phải */}
      <div className="fixed z-50 flex flex-col gap-3" style={{ bottom: 16, right: 16 }}>
        {/* Messenger */}
        <a
          href="https://www.facebook.com/messages/t/61564536244947"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          style={{ background: "linear-gradient(135deg, #0099FF 0%, #A033FF 100%)" }}
          aria-label="Messenger"
          title="Chat Messenger"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C6.477 2 2 6.145 2 11.28c0 2.842 1.33 5.376 3.42 7.09V22l3.115-1.71C9.484 20.42 10.71 20.56 12 20.56c5.523 0 10-4.145 10-9.28S17.523 2 12 2zm1.04 12.506l-2.54-2.717-4.96 2.717 5.46-5.8 2.605 2.717 4.895-2.717-5.46 5.8z"/>
          </svg>
        </a>

        {/* Zalo */}
        <a
          href={`https://zalo.me/${DEALER_INFO.phone.replace(/\s/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform overflow-hidden"
          style={{ background: "#0068FF" }}
          aria-label="Zalo"
          title="Chat Zalo"
        >
          <span className="text-white font-black text-sm tracking-tight">Zalo</span>
        </a>

        {/* Email */}
        <a
          href={`mailto:${DEALER_INFO.email}`}
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          style={{ background: "#F59E0B" }}
          aria-label="Email"
          title={DEALER_INFO.email}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </a>
      </div>

      {/* Back to top */}
      {showTop && (
        <button
          className="fixed z-50 w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center shadow-lg hover:bg-gray-900 transition-colors"
          style={{ bottom: 16, right: 76 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Lên đầu trang"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      )}
    </>
  );
}
