"use client";
import { useState } from "react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { CARS, Car } from "@/lib/data";

export default function CarDetailClient({ car }: { car: Car }) {
  const [activeImage, setActiveImage] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  const [activeTab, setActiveTab] = useState<"specs" | "highlights">("specs");

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-600">Trang chủ</Link>
          <span>/</span>
          <Link href="/xe-vinfast" className="hover:text-blue-600">Xe VinFast</Link>
          <span>/</span>
          <span className="text-gray-800 font-semibold">{car.name}</span>
        </div>
      </div>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Gallery */}
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-xl overflow-hidden h-72 md:h-96 flex items-center justify-center mb-4">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
                  <div className="text-center">
                    <svg width="120" height="60" viewBox="0 0 200 80" fill="#005BAC" opacity="0.3">
                      <path d="M20 60 Q30 20 70 15 L90 10 Q110 5 140 12 L160 18 Q185 25 190 40 L192 55 L20 60Z"/>
                      <circle cx="55" cy="65" r="12" fill="#003087"/>
                      <circle cx="145" cy="65" r="12" fill="#003087"/>
                      <circle cx="55" cy="65" r="7" fill="#ccc"/>
                      <circle cx="145" cy="65" r="7" fill="#ccc"/>
                    </svg>
                    <p className="text-blue-800 font-bold mt-2">{car.name}</p>
                    <p className="text-blue-600 text-sm">Hình ảnh minh họa {activeImage + 1}/{car.images.length}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {car.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`gallery-thumb shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center ${i === activeImage ? "active" : ""}`}
                  >
                    <span className="text-xs text-blue-600 font-semibold">{i + 1}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              {car.isElectric && (
                <span className="badge-electric mb-3 inline-flex">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>
                  100% Điện
                </span>
              )}
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-1 mt-2">{car.name}</h1>
              <p className="text-gray-500 mb-4">{car.tagline}</p>
              <div className="text-2xl font-black mb-6" style={{ color: "var(--vf-blue)" }}>{car.price}</div>

              {/* Colors */}
              {car.colors.length > 0 && (
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Màu sắc: <span className="font-normal text-gray-500">{car.colors[activeColor]?.name}</span>
                  </p>
                  <div className="flex gap-2">
                    {car.colors.map((color, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveColor(i)}
                        className={`w-8 h-8 rounded-full border-2 transition-all ${i === activeColor ? "border-blue-600 scale-110" : "border-gray-200 hover:border-gray-400"}`}
                        style={{ background: color.hex }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Tabs */}
              <div className="flex border-b border-gray-200 mb-4">
                <button
                  onClick={() => setActiveTab("specs")}
                  className={`px-4 py-2 text-sm font-semibold transition-colors ${activeTab === "specs" ? "tab-active" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Thông số kỹ thuật
                </button>
                <button
                  onClick={() => setActiveTab("highlights")}
                  className={`px-4 py-2 text-sm font-semibold transition-colors ${activeTab === "highlights" ? "tab-active" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Điểm nổi bật
                </button>
              </div>

              {activeTab === "specs" && (
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {car.specs.map((spec) => (
                    <div key={spec.label} className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xs text-gray-500">{spec.label}</div>
                      <div className="text-sm font-semibold text-gray-800 mt-0.5">{spec.value}</div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "highlights" && (
                <ul className="space-y-3 mb-6">
                  {car.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5">
                      <svg className="shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#005BAC"/>
                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-sm text-gray-700">{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex gap-3 flex-wrap">
                <Link href="/lien-he" className="btn-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  Đặt lịch lái thử
                </Link>
                <a href="tel:0901234567" className="btn-outline">Gọi tư vấn ngay</a>
              </div>
            </div>
          </div>

          {/* Description */}
          {car.description && (
            <div className="mt-10 bg-gray-50 rounded-xl p-6">
              <h2 className="font-bold text-lg mb-3">Giới thiệu {car.name}</h2>
              <p className="text-gray-600 leading-relaxed">{car.description}</p>
            </div>
          )}

          {/* Related */}
          <div className="mt-12">
            <h2 className="section-title mb-6">Xe liên quan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {CARS.filter((c) => c.id !== car.id).slice(0, 3).map((c) => (
                <Link key={c.id} href={`/xe-vinfast/${c.slug}`}
                  className="group bg-white rounded-xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg h-32 flex items-center justify-center mb-3">
                    <span className="text-4xl">🚗</span>
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{c.name}</h3>
                  <p className="text-sm font-semibold mt-1" style={{ color: "var(--vf-blue)" }}>{c.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-xl mx-auto px-4">
          <LeadForm
            title={`Đặt lịch lái thử ${car.name}`}
            subtitle="Nhận tư vấn & trải nghiệm xe miễn phí tại showroom"
            carName={car.name}
            formType="test-drive"
          />
        </div>
      </section>
    </>
  );
}
