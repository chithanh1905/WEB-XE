"use client";
import { useState } from "react";
import Link from "next/link";
import { NEWS } from "@/lib/data";

const FILTERS = [
  { value: "all", label: "Tất cả" },
  { value: "khuyen-mai", label: "Khuyến mãi" },
  { value: "tin-tuc", label: "Tin tức" },
  { value: "su-kien", label: "Sự kiện" },
];

export default function TinTucPage() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? NEWS : NEWS.filter((n) => n.category === active);

  return (
    <>
      <div style={{ background: "linear-gradient(135deg, var(--vf-blue-dark), var(--vf-blue))" }} className="py-12 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-white/70 mb-2">Trang chủ / Tin tức</div>
          <h1 className="text-3xl md:text-4xl font-black mb-2">Tin tức & Khuyến mãi</h1>
          <p className="text-white/80">Cập nhật các ưu đãi, tin tức và sự kiện mới nhất từ VinFast Long An</p>
        </div>
      </div>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 flex-wrap mb-8">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  active === f.value ? "text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                style={active === f.value ? { background: "var(--vf-blue)" } : {}}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <Link key={item.id} href={`/tin-tuc/${item.slug}`} className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-52 bg-gradient-to-br from-blue-50 to-blue-100 relative flex items-center justify-center">
                  <span className="text-5xl">📰</span>
                  <span
                    className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white"
                    style={{ background: item.category === "khuyen-mai" ? "#E30613" : item.category === "su-kien" ? "#9333EA" : "var(--vf-blue)" }}
                  >
                    {item.categoryLabel}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-400 mb-2">{new Date(item.date).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" })}</p>
                  <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-blue-700 transition-colors mb-2 text-base">{item.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-3">{item.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--vf-blue)" }}>
                    Đọc thêm
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
