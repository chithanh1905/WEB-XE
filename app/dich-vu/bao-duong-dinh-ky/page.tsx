import type { Metadata } from "next";
import Link from "next/link";
import { DEALER_INFO } from "@/lib/data";

export const metadata: Metadata = { title: "Bảo dưỡng định kỳ – VinFast Long An" };

const BASE = "https://vinfastlongan3s.com/OTO3602500656/files";

const MILESTONES = [
  { km: "5.000 km", items: ["Kiểm tra tổng quát xe", "Kiểm tra áp suất lốp", "Kiểm tra hệ thống phanh", "Vệ sinh buồng lái"] },
  { km: "10.000 km", items: ["Kiểm tra & vệ sinh pin", "Kiểm tra hệ thống điện", "Kiểm tra hệ thống làm mát", "Bôi trơn các khớp nối"] },
  { km: "20.000 km", items: ["Thay dịch phanh", "Kiểm tra hệ thống treo", "Kiểm tra lốp xe & cân bằng", "Cập nhật phần mềm OTA"] },
  { km: "40.000 km", items: ["Kiểm tra toàn diện pin cao áp", "Kiểm tra motor điện", "Thay lọc cabin", "Kiểm tra hệ thống ADAS"] },
  { km: "60.000 km", items: ["Đại bảo dưỡng toàn diện", "Kiểm tra khung gầm", "Thay dầu hộp số (nếu có)", "Kiểm tra tất cả hệ thống an toàn"] },
];

export default function BaoDuongDinhKyPage() {
  return (
    <>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-400 mb-2">
            <Link href="/dich-vu" className="hover:underline">Dịch vụ</Link> / Bảo dưỡng định kỳ
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-1 text-gray-900">Bảo dưỡng định kỳ</h1>
          <p className="text-gray-500">Duy trì trạng thái tối ưu – Kéo dài tuổi thọ xe</p>
        </div>
      </div>

      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-10 rounded-2xl overflow-hidden">
            <img src={`${BASE}/dich_vu/banner_1677656822.webp`} alt="Bảo dưỡng định kỳ VinFast" className="w-full object-cover max-h-80" />
          </div>

          <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
            Bảo dưỡng định kỳ giúp duy trì trạng thái ổn định, kéo dài tuổi thọ của các bộ phận và là điều kiện để được hưởng chính sách bảo hành chính hãng VinFast.
          </p>

          <div className="space-y-4">
            {MILESTONES.map((m) => (
              <div key={m.km} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col sm:flex-row">
                <div className="flex items-center justify-center px-6 py-4 sm:py-0 min-w-[120px]" style={{ background: "var(--vf-blue)" }}>
                  <span className="text-white font-black text-lg">{m.km}</span>
                </div>
                <div className="px-6 py-4 grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
                  {m.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: "var(--vf-blue)", flexShrink: 0 }}><path d="M20 6L9 17l-5-5"/></svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-blue-50 border border-blue-100 rounded-xl p-5 text-sm text-gray-700">
            <p className="font-bold mb-1" style={{ color: "var(--vf-blue)" }}>Lưu ý quan trọng:</p>
            <p>Bảo dưỡng định kỳ phải được thực hiện tại các đại lý VinFast chính hãng để đảm bảo điều kiện bảo hành. Liên hệ showroom để đặt lịch và nhận báo giá chi tiết.</p>
          </div>

          <div className="mt-8 text-center">
            <a href={DEALER_INFO.hotlineLink} className="btn-primary inline-flex">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              Đặt lịch bảo dưỡng: {DEALER_INFO.hotline}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
