"use client";
import Link from "next/link";
import { Car } from "@/lib/data";
import { DEALER_INFO } from "@/lib/data";

interface CarCardProps {
  car: Car;
  priority?: boolean;
}

export default function CarCard({ car }: CarCardProps) {
  const rangeSpec = car.specs.find(s =>
    s.label.includes("Quãng đường") || s.label.includes("Phạm vi") || s.label.includes("NEDC") || s.label.includes("WLTP")
  );
  const rangeLabel = rangeSpec?.label.includes("WLTP") ? "WLTP" : "NEDC";

  // Tên watermark: lấy phần sau "VinFast " (VD: "VF 6", "EC Van")
  const watermark = car.name.replace("VinFast ", "");

  return (
    <div className="car-card flex flex-col h-full">
      {/* Ảnh + watermark — click vào ảnh hoặc tên đều vào trang chi tiết */}
      <Link href={`/xe-vinfast/${car.slug}`} className="block">
      <div className="relative bg-white w-full overflow-hidden" style={{ paddingTop: "70%" }}>
        {/* Watermark tên xe mờ phía sau */}
        <span
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none font-black uppercase"
          style={{
            fontSize: "clamp(2rem, 8vw, 5rem)",
            color: "rgba(0,91,172,0.07)",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            zIndex: 0,
          }}
        >
          {watermark}
        </span>
        {/* Ảnh xe */}
        <img
          src={car.image}
          alt={car.name}
          className="absolute inset-0 w-full h-full object-contain z-10 group-hover:scale-105 transition-transform duration-300"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
      </div>
      </Link>

      {/* Nội dung */}
      <div className="flex flex-col flex-1 pt-2 pb-3 px-1">
        {/* Tên xe — click vào tên cũng vào trang chi tiết */}
        <Link href={`/xe-vinfast/${car.slug}`}>
          <h3 className="text-xs sm:text-sm font-bold mb-0.5 leading-tight transition-colors duration-200 cursor-pointer"
            style={{ color: "var(--vf-blue)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#E30613")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--vf-blue)")}
          >{car.name}</h3>
        </Link>

        {/* Thông số km/lần sạc */}
        {rangeSpec && (
          <p className="text-[10px] sm:text-xs text-gray-500 mb-1 leading-snug">
            Quãng đường chạy ({rangeLabel}): <span className="font-semibold">{rangeSpec.value}</span>
          </p>
        )}

        {/* Giá */}
        <p className="text-xs sm:text-sm font-bold mb-2" style={{ color: "var(--vf-blue)" }}>
          {car.price}
        </p>

        {/* 2 nút cùng hàng, luôn hiện dưới giá */}
        <div className="flex gap-1 mt-auto">
          <a
            href={DEALER_INFO.hotlineLink}
            className="flex-1 text-center py-1.5 text-[10px] sm:text-xs font-bold text-white rounded whitespace-nowrap"
            style={{ background: "var(--vf-blue)" }}
          >
            LIÊN HỆ
          </a>
          <Link
            href={`/xe-vinfast/${car.slug}`}
            className="flex-1 text-center py-1.5 text-[10px] sm:text-xs font-bold rounded border whitespace-nowrap"
            style={{ borderColor: "var(--vf-blue)", color: "var(--vf-blue)" }}
          >
            XEM CHI TIẾT
          </Link>
        </div>
      </div>
    </div>
  );
}
