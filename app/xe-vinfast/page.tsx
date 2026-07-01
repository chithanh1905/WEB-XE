"use client";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import CarCard from "@/components/CarCard";
import { CARS } from "@/lib/data";

const TABS = [
  { value: "tat-ca", label: "Tất cả" },
  { value: "o-to-dien", label: "Ô tô điện" },
  { value: "xe-dich-vu", label: "Dòng xe dịch vụ" },
];

export default function XeVinFastPage() {
  return (
    <Suspense fallback={null}>
      <XeVinFastContent />
    </Suspense>
  );
}

function XeVinFastContent() {
  const searchParams = useSearchParams();
  const groupParam = searchParams.get("group");

  const [active, setActive] = useState<string>(
    groupParam === "dich-vu" ? "xe-dich-vu" : "tat-ca"
  );

  const filtered = active === "tat-ca"
    ? CARS
    : CARS.filter((c) => c.group === active);

  return (
    <>
      <div className="py-6 px-4 max-w-7xl mx-auto">
        <div className="text-sm text-gray-400 mb-1">Trang chủ / Xe VinFast</div>
        <h1 className="text-2xl md:text-3xl font-black mb-1 text-gray-900">Xe VinFast tại Long An</h1>
        <p className="text-gray-500 text-sm">Đầy đủ các dòng xe điện VinFast – Trải nghiệm lái thử miễn phí</p>
      </div>

      <section>
        {/* Tabs */}
        <div className="flex border-b border-gray-200 px-4">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActive(tab.value)}
              className={`px-5 py-3 text-sm font-bold transition-all border-b-2 -mb-px ${
                active === tab.value
                  ? "border-blue-700 text-blue-700"
                  : "border-transparent text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid — 4 cột cố định, full width */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0 border-t border-l border-gray-200">
          {filtered.map((car) => (
            <div key={car.id} className="border-r border-b border-gray-200 bg-white px-2 py-3 flex flex-col">
              <CarCard car={car} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p>Không có xe trong danh mục này</p>
          </div>
        )}
      </section>

      <div className="py-10 text-center bg-gray-50">
        <p className="text-gray-700 font-semibold mb-4">Chưa tìm được xe phù hợp? Để chúng tôi tư vấn cho bạn!</p>
        <a href="/lien-he" className="btn-primary mx-auto">Đặt lịch tư vấn ngay</a>
      </div>
    </>
  );
}
