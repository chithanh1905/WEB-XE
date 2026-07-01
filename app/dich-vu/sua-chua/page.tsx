import type { Metadata } from "next";
import Link from "next/link";
import { DEALER_INFO } from "@/lib/data";

export const metadata: Metadata = { title: "Dịch vụ sửa chữa – VinFast Long An" };

const BASE = "https://vinfastlongan3s.com/OTO3602500656/files";

const REPAIRS = [
  { title: "Sửa chữa điện & điện tử", desc: "Chẩn đoán và sửa chữa hệ thống điện, điện tử xe điện VinFast bằng thiết bị chuyên dụng chính hãng." },
  { title: "Sửa chữa hệ thống pin", desc: "Kiểm tra, chẩn đoán và xử lý các vấn đề về pin cao áp bởi kỹ thuật viên được VinFast cấp chứng chỉ." },
  { title: "Sửa chữa thân vỏ & sơn", desc: "Xử lý va chạm, phục hồi sơn, đánh bóng và chăm sóc ngoại thất xe theo tiêu chuẩn nhà máy." },
  { title: "Sửa chữa hệ thống treo & phanh", desc: "Kiểm tra và thay thế các bộ phận hệ thống treo, phanh đảm bảo an toàn vận hành." },
  { title: "Sửa chữa điều hòa", desc: "Nạp gas, vệ sinh và sửa chữa hệ thống điều hòa không khí chuyên dụng cho xe điện." },
  { title: "Cập nhật phần mềm OTA", desc: "Cập nhật firmware và phần mềm hệ thống xe theo các phiên bản mới nhất từ VinFast." },
];

export default function SuaChuaPage() {
  return (
    <>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-400 mb-2">
            <Link href="/dich-vu" className="hover:underline">Dịch vụ</Link> / Dịch vụ sửa chữa
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-1 text-gray-900">Dịch vụ sửa chữa</h1>
          <p className="text-gray-500">Đội ngũ kỹ thuật viên chuyên nghiệp được VinFast đào tạo và chứng nhận</p>
        </div>
      </div>

      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-10 rounded-2xl overflow-hidden">
            <img src={`${BASE}/dich_vu/suachuaimg_1656869862_1658394682.webp`} alt="Dịch vụ sửa chữa VinFast" className="w-full object-cover max-h-80" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {REPAIRS.map((r) => (
              <div key={r.title} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--vf-blue)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm">{r.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-center">
            <p className="text-gray-700 text-sm mb-4">Liên hệ ngay để được báo giá sửa chữa nhanh nhất</p>
            <a href={DEALER_INFO.hotlineLink} className="btn-primary inline-flex">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              Gọi ngay: {DEALER_INFO.hotline}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
