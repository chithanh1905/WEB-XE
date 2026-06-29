"use client";
import { useState } from "react";
import CarCard from "@/components/CarCard";
import { CARS } from "@/lib/data";

const CATEGORIES = [
  { value: "all", label: "Tất cả xe" },
  { value: "suv", label: "SUV Điện" },
  { value: "hatchback", label: "Hatchback Điện" },
  { value: "electric", label: "Xe điện mini" },
];

export default function XeVinFastPage() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? CARS : CARS.filter((c) => c.category === active);

  return (
    <>
      {/* Page header */}
      <div style={{ background: "linear-gradient(135deg, var(--vf-blue-dark), var(--vf-blue))" }} className="py-12 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-white/70 mb-2">Trang chủ / Xe VinFast</div>
          <h1 className="text-3xl md:text-4xl font-black mb-2">Xe VinFast tại Long An</h1>
          <p className="text-white/80">Đầy đủ các dòng xe điện VinFast – Trải nghiệm lái thử miễn phí</p>
        </div>
      </div>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter tabs */}
          <div className="flex gap-2 flex-wrap mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActive(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  active === cat.value
                    ? "text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                style={active === cat.value ? { background: "var(--vf-blue)" } : {}}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <div className="text-5xl mb-4">🚗</div>
              <p>Không có xe trong danh mục này</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA banner */}
      <div className="py-10 bg-gray-50 text-center">
        <p className="text-gray-700 font-semibold mb-4 text-lg">Chưa tìm được xe phù hợp? Để chúng tôi tư vấn cho bạn!</p>
        <a href="/lien-he" className="btn-primary mx-auto">
          Đặt lịch tư vấn ngay
        </a>
      </div>
    </>
  );
}
