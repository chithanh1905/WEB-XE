"use client";
import Link from "next/link";
import { Car } from "@/lib/data";

interface CarCardProps {
  car: Car;
  priority?: boolean;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className="car-card bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
      {/* Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 h-52">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const img = e.currentTarget;
            img.style.display = "none";
            const parent = img.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#e8f0fe,#c7d7f7);padding:20px">
                  <svg width="80" height="40" viewBox="0 0 200 80" fill="#005BAC" opacity="0.4">
                    <path d="M20 60 Q30 20 70 15 L90 10 Q110 5 140 12 L160 18 Q185 25 190 40 L192 55 L20 60Z"/>
                    <circle cx="55" cy="65" r="12" fill="#003087"/>
                    <circle cx="145" cy="65" r="12" fill="#003087"/>
                    <circle cx="55" cy="65" r="7" fill="#ccc"/>
                    <circle cx="145" cy="65" r="7" fill="#ccc"/>
                  </svg>
                  <span style="color:#005BAC;font-weight:700;font-size:14px;margin-top:8px">${car.name}</span>
                </div>
              `;
            }
          }}
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {car.isElectric && (
            <span className="badge-electric text-xs">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>
              100% Điện
            </span>
          )}
          {car.badge === "Mới" || car.isNew ? <span className="badge-new">{car.badge || "MỚI"}</span> : null}
          {car.badge === "Bán chạy" ? <span className="badge-sale">BÁN CHẠY</span> : null}
          {car.badge === "Hot" ? <span className="badge-hot">HOT</span> : null}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
          {car.category === "suv" ? "SUV Điện" : car.category === "hatchback" ? "Hatchback Điện" : "Xe Điện"}
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">{car.name}</h3>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{car.tagline}</p>

        {/* Key specs */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {car.specs.slice(0, 4).map((spec) => (
            <div key={spec.label} className="bg-gray-50 rounded-lg p-2.5">
              <div className="text-xs text-gray-500">{spec.label}</div>
              <div className="text-xs font-semibold text-gray-800 mt-0.5">{spec.value}</div>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-400">Giá niêm yết</div>
            <div className="text-base font-bold" style={{ color: "var(--vf-blue)" }}>{car.price}</div>
          </div>
          <Link
            href={`/xe-vinfast/${car.slug}`}
            className="btn-primary text-sm py-2 px-4"
          >
            Xem chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
}
