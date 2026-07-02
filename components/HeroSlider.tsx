"use client";
import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";

interface Slide {
  id: number;
  anh_url: string;
  thu_tu: number;
}

export default function HeroSlider() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    supabase
      .from("banner_config")
      .select("id, anh_url, thu_tu")
      .eq("active", true)
      .order("thu_tu")
      .then(({ data }) => {
        if (data && data.length > 0) setSlides(data);
        else setSlides([{ id: 0, anh_url: "/banner1.svg", thu_tu: 0 }]);
      });
  }, []);

  const next = useCallback(() => setCurrent((c) => (c + 1) % Math.max(slides.length, 1)), [slides.length]);
  const prev = () => setCurrent((c) => (c - 1 + Math.max(slides.length, 1)) % Math.max(slides.length, 1));

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next, slides.length]);

  if (slides.length === 0) return null;

  const slide = slides[current];

  return (
    <section
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <img
        src={slide.anh_url}
        alt="Banner VinFast Long An"
        className="w-full h-auto block"
      />

      {slides.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors" aria-label="Slide trước">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors" aria-label="Slide tiếp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-white" : "w-2 bg-white/40"}`} aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
