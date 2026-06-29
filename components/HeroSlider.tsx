"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const SLIDES = [
  {
    id: 1,
    title: "VinFast VF 6",
    subtitle: "SUV điện cỡ B – Cân bằng hoàn hảo",
    description: "Phạm vi 399 km · Công nghệ ADAS · Màn hình 12.9\"",
    cta: "Khám phá ngay",
    ctaLink: "/xe-vinfast/vinfast-vf-6",
    badge: "Bán chạy nhất",
    bg: "linear-gradient(135deg, #003087 0%, #005BAC 50%, #0077CC 100%)",
    accent: "#FFD700",
  },
  {
    id: 2,
    title: "VinFast VF 8",
    subtitle: "SUV điện 7 chỗ đẳng cấp",
    description: "Phạm vi 471 km · AWD · 402 mã lực · Autopilot",
    cta: "Đặt lịch lái thử",
    ctaLink: "/lien-he",
    badge: "Mới nhất 2024",
    bg: "linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)",
    accent: "#E30613",
  },
  {
    id: 3,
    title: "VinFast VF 3",
    subtitle: "Xe điện mini – Bước vào tương lai",
    description: "Giá từ 235 triệu · Chi phí vận hành 0 đ nhiên liệu",
    cta: "Xem chi tiết",
    ctaLink: "/xe-vinfast/vinfast-vf-3",
    badge: "Giá tốt nhất",
    bg: "linear-gradient(135deg, #14532D 0%, #166534 50%, #15803D 100%)",
    accent: "#86EFAC",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % SLIDES.length);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const slide = SLIDES[current];

  return (
    <section
      className="relative h-[480px] md:h-[560px] lg:h-[640px] overflow-hidden"
      style={{ background: slide.bg, transition: "background 0.8s ease" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border-4 border-white translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border-4 border-white -translate-x-16 translate-y-16" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white" key={current}>
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 animate-fade-up"
            style={{ background: slide.accent, color: "#1A1A1A" }}
          >
            {slide.badge}
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-2 leading-tight animate-fade-up"
            style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}
          >
            {slide.title}
          </h1>
          <h2
            className="text-xl md:text-2xl font-semibold mb-3 text-white/90 animate-fade-up"
            style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
          >
            {slide.subtitle}
          </h2>
          <p
            className="text-base text-white/80 mb-8 animate-fade-up"
            style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}
          >
            {slide.description}
          </p>
          <div
            className="flex flex-wrap gap-3 animate-fade-up"
            style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}
          >
            <Link href={slide.ctaLink} className="btn-primary text-base">
              {slide.cta}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/lien-he" className="btn-outline border-white text-white hover:bg-white hover:text-blue-900 text-base">
              Đặt lịch lái thử
            </Link>
          </div>
        </div>
      </div>

      {/* Car silhouette (decorative) */}
      <div className="absolute right-0 bottom-0 opacity-20 hidden lg:block">
        <svg width="600" height="280" viewBox="0 0 600 280" fill="white">
          <ellipse cx="300" cy="250" rx="280" ry="20" opacity="0.3"/>
          <path d="M80 200 Q100 120 200 100 L250 80 Q300 60 380 70 L450 80 Q520 90 540 120 L550 150 Q560 170 550 200 Z" opacity="0.5"/>
          <rect x="120" y="165" width="60" height="40" rx="4" opacity="0.3"/>
          <rect x="380" y="165" width="60" height="40" rx="4" opacity="0.3"/>
          <circle cx="160" cy="210" r="30" opacity="0.4"/>
          <circle cx="420" cy="210" r="30" opacity="0.4"/>
          <circle cx="160" cy="210" r="18" opacity="0.6"/>
          <circle cx="420" cy="210" r="18" opacity="0.6"/>
        </svg>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
        aria-label="Slide trước"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
        aria-label="Slide tiếp"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-white" : "w-2 bg-white/50"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
    </section>
  );
}
