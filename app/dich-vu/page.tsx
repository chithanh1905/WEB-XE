import type { Metadata } from "next";
import Link from "next/link";
import { DEALER_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dịch vụ – VinFast Long An 3S",
};

const BASE = "https://vinfastlongan3s.com/OTO3602500656/files";

const SERVICES = [
  {
    title: "Chính sách bảo hành",
    image: `${BASE}/dich_vu/baohanh_1656867400_1658395630.webp`,
    href: "/dich-vu/chinh-sach-bao-hanh",
  },
  {
    title: "Bảo dưỡng định kỳ",
    image: `${BASE}/dich_vu/banner_1677656822.webp`,
    href: "/dich-vu/bao-duong-dinh-ky",
  },
  {
    title: "Dịch vụ sửa chữa",
    image: `${BASE}/dich_vu/suachuaimg_1656869862_1658394682.webp`,
    href: "/dich-vu/sua-chua",
  },
];

export default function DichVuPage() {
  return (
    <>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-400 mb-2">Trang chủ / Dịch vụ</div>
          <h1 className="text-3xl md:text-4xl font-black mb-1 text-gray-900">Dịch vụ</h1>
          <p className="text-gray-500">Dịch vụ 3S toàn diện – Showroom · Sales · Service</p>
        </div>
      </div>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group block rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow bg-white"
              >
                <div className="overflow-hidden aspect-video bg-gray-100">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <h2 className="text-base font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{s.title}</h2>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--vf-blue)" }}>
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl font-black mb-3" style={{ color: "var(--vf-blue)" }}>Liên hệ đặt dịch vụ</h2>
          <p className="text-gray-500 text-sm mb-6">Gọi ngay hoặc đến trực tiếp showroom để được hỗ trợ nhanh nhất</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={DEALER_INFO.hotlineLink} className="btn-primary justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              Gọi: {DEALER_INFO.hotline}
            </a>
            <Link href="/lien-he" className="btn-outline justify-center">Đặt lịch online</Link>
          </div>
        </div>
      </section>
    </>
  );
}
