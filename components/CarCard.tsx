"use client";
import Link from "next/link";
import { Car } from "@/lib/data";
import { DEALER_INFO } from "@/lib/data";

interface CarCardProps {
  car: Car;
  priority?: boolean;
}

export default function CarCard({ car }: CarCardProps) {
  const rangeSpec = car.specs.find(s => s.label === "Phạm vi");

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      {/* Image — tỉ lệ 16:9, nền trắng, object-contain */}
      <div className="relative bg-white overflow-hidden" style={{ paddingTop: "56.25%" }}>
        <img
          src={car.image}
          alt={car.name}
          className="absolute inset-0 w-full h-full object-contain"
          onError={(e) => {
            const img = e.currentTarget;
            img.style.display = "none";
            const p = img.parentElement;
            if (p) p.style.background = "#f0f4ff";
          }}
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-base font-bold text-gray-900 mb-1">{car.name}</h3>
        {rangeSpec && (
          <p className="text-sm text-gray-500 mb-1">
            Quãng đường chạy (NEDC): <span className="text-gray-600">{rangeSpec.value}/lần sạc đầy</span>
          </p>
        )}
        <p className="text-base font-bold mb-3" style={{ color: "var(--vf-blue)" }}>
          {car.price.replace("Từ ", "Từ ")}
        </p>

        {/* Buttons */}
        <div className="flex gap-2">
          <a
            href={DEALER_INFO.hotlineLink}
            className="flex-1 text-center py-2 px-3 text-sm font-bold text-white rounded"
            style={{ background: "var(--vf-blue)" }}
          >
            LIÊN HỆ
          </a>
          <Link
            href={`/xe-vinfast/${car.slug}`}
            className="flex-1 text-center py-2 px-3 text-sm font-bold rounded border-2"
            style={{ borderColor: "var(--vf-blue)", color: "var(--vf-blue)" }}
          >
            XEM CHI TIẾT
          </Link>
        </div>
      </div>
    </div>
  );
}
