"use client";
import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import CarCard from "@/components/CarCard";
import { CARS } from "@/lib/data";

const TABS = [
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

  const [active, setActive] = useState<"o-to-dien" | "xe-dich-vu">(
    groupParam === "dich-vu" ? "xe-dich-vu" : "o-to-dien"
  );

  useEffect(() => {
    if (groupParam === "dich-vu") setActive("xe-dich-vu");
    else setActive("o-to-dien");
  }, [groupParam]);

  const filtered = CARS.filter((c) => c.group === active);

  return (
    <>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-400 mb-2">Trang chủ / Xe VinFast</div>
          <h1 className="text-3xl md:text-4xl font-black mb-1 text-gray-900">Xe VinFast tại Long An</h1>
          <p className="text-gray-500">Đầy đủ các dòng xe điện VinFast – Trải nghiệm lái thử miễn phí</p>
        </div>
      </div>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category tabs */}
          <div className="flex border-b border-gray-200 mb-8">
            {TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActive(tab.value as "o-to-dien" | "xe-dich-vu")}
                className={`px-6 py-3 text-base font-bold transition-all border-b-2 -mb-px ${
                  active === tab.value
                    ? "border-blue-700 text-blue-700"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab.label}
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

      <div className="py-10 bg-gray-50 text-center">
        <p className="text-gray-700 font-semibold mb-4 text-lg">Chưa tìm được xe phù hợp? Để chúng tôi tư vấn cho bạn!</p>
        <a href="/lien-he" className="btn-primary mx-auto">
          Đặt lịch tư vấn ngay
        </a>
      </div>
    </>
  );
}
