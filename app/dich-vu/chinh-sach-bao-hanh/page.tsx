import type { Metadata } from "next";
import Link from "next/link";
import { DEALER_INFO } from "@/lib/data";

export const metadata: Metadata = { title: "Chính sách bảo hành – VinFast Long An" };

const BASE = "https://vinfastlongan3s.com/OTO3602500656/files";

const WARRANTY = [
  {
    model: "VF 7, VF 8, VF 9",
    items: [
      { label: "Xe & động cơ điện", value: "10 năm hoặc 200.000 km" },
      { label: "Pin cao áp", value: "10 năm hoặc 200.000 km" },
      { label: "Sơn ngoại thất", value: "10 năm (không giới hạn km)" },
      { label: "Pin 12V", value: "1 năm hoặc 20.000 km" },
    ],
  },
  {
    model: "VF 3, VF 5, VF 6",
    items: [
      { label: "Xe & động cơ điện", value: "7 năm hoặc 160.000 km" },
      { label: "Pin cao áp", value: "7 năm hoặc 160.000 km" },
      { label: "Sơn ngoại thất", value: "5 năm" },
      { label: "Pin 12V", value: "1 năm hoặc 20.000 km" },
    ],
  },
  {
    model: "Xe dịch vụ (EC Van, Minio, Herio, Limo)",
    items: [
      { label: "Xe & động cơ điện", value: "5 năm hoặc 130.000 km" },
      { label: "Pin cao áp", value: "5 năm hoặc 130.000 km" },
      { label: "Hệ thống treo", value: "5 năm hoặc 130.000 km" },
      { label: "Pin 12V", value: "1 năm hoặc 20.000 km" },
    ],
  },
];

export default function ChinhSachBaoHanhPage() {
  return (
    <>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-400 mb-2">
            <Link href="/dich-vu" className="hover:underline">Dịch vụ</Link> / Chính sách bảo hành
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-1 text-gray-900">Chính sách bảo hành</h1>
          <p className="text-gray-500">Cam kết chất lượng từ VinFast – Yên tâm tuyệt đối</p>
        </div>
      </div>

      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-10 rounded-2xl overflow-hidden">
            <img src={`${BASE}/dich_vu/baohanh_1656867400_1658395630.webp`} alt="Chính sách bảo hành VinFast" className="w-full object-cover max-h-80" />
          </div>

          <div className="space-y-8">
            {WARRANTY.map((w) => (
              <div key={w.model} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-6 py-4" style={{ background: "var(--vf-blue)" }}>
                  <h2 className="text-white font-bold text-lg">{w.model}</h2>
                </div>
                <div className="divide-y divide-gray-100">
                  {w.items.map((item) => (
                    <div key={item.label} className="flex items-center justify-between px-6 py-4">
                      <span className="text-gray-600 text-sm">{item.label}</span>
                      <span className="font-bold text-gray-900 text-sm text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-yellow-50 border border-yellow-200 rounded-xl p-5 text-sm text-gray-700">
            <p className="font-bold mb-2">⚠ Lưu ý:</p>
            <ul className="space-y-1 list-disc list-inside text-gray-600">
              <li>Bảo hành có hiệu lực khi xe được bảo dưỡng định kỳ tại đại lý VinFast chính hãng</li>
              <li>Không áp dụng cho hư hỏng do tai nạn, sử dụng sai mục đích</li>
              <li>Gỉ sét thông thường, bạc màu sơn, cao su lão hóa không được bảo hành</li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <a href={DEALER_INFO.hotlineLink} className="btn-primary inline-flex">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              Liên hệ tư vấn: {DEALER_INFO.hotline}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
