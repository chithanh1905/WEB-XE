import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Bảng giá xe VinFast 2026 – VinFast Long An" };

function fmt(n: number) {
  return n.toLocaleString("vi-VN") + " đ";
}

const ELECTRIC = [
  { model: "VF 3 Eco TC1", price: 299000000, discount: 281060000, slug: "vf3" },
  { model: "VF 3 Eco TC2", price: 302000000, discount: 283880000, slug: "vf3" },
  { model: "VF 3 Plus", price: 315000000, discount: 296100000, slug: "vf3" },
  { model: "VF 5", price: 529000000, discount: 497260000, slug: "vf5" },
  { model: "VF 6 Eco", price: 689000000, discount: 647660000, slug: "vf6" },
  { model: "VF 6 Plus", price: 745000000, discount: 700300000, slug: "vf6" },
  { model: "VF 7 Eco", price: 789000000, discount: 741660000, slug: "vf7" },
  { model: "VF 7 Plus 1 cầu", price: 949000000, discount: 892060000, slug: "vf7" },
  { model: "VF 7 Plus 2 cầu AWD", price: 999000000, discount: 939060000, slug: "vf7" },
  { model: "VF 8 Eco", price: 1019000000, discount: 917100000, slug: "vf8" },
  { model: "VF 8 Plus", price: 1199000000, discount: 1079100000, slug: "vf8" },
  { model: "VF 9 Eco", price: 1499000000, discount: 1349100000, slug: "vf9" },
  { model: "VF 9 Plus", price: 1699000000, discount: 1529100000, slug: "vf9" },
];

const SERVICE = [
  { model: "EC Van Standard", price: 285000000, discount: null, slug: "ec-van" },
  { model: "EC Van Advanced (không cửa trượt)", price: 305000000, discount: null, slug: "ec-van" },
  { model: "EC Van Advanced (có cửa trượt)", price: 325000000, discount: null, slug: "ec-van" },
  { model: "Minio Green", price: 269000000, discount: null, slug: "minio-green" },
  { model: "Herio Green", price: 499000000, discount: null, slug: "herio-green" },
  { model: "Limo Green", price: 749000000, discount: null, slug: "limo-green" },
  { model: "VF MPV 7", price: 819000000, discount: 737100000, slug: "vf-mpv7" },
];

export default function BangGiaPage() {
  return (
    <>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-400 mb-2">Trang chủ / Bảng giá</div>
          <h1 className="text-3xl md:text-4xl font-black mb-1 text-gray-900">Bảng giá xe VinFast 2026</h1>
          <p className="text-gray-500">Giá niêm yết chính hãng và giá ưu đãi hiện hành</p>
        </div>
      </div>

      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 space-y-12">

          {/* Ô tô điện */}
          <div>
            <h2 className="text-xl font-black mb-4" style={{ color: "var(--vf-blue)" }}>Ô tô điện</h2>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="grid grid-cols-3 px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide bg-gray-50 border-b border-gray-100">
                <span>Dòng xe</span>
                <span className="text-right">Giá niêm yết</span>
                <span className="text-right">Giá ưu đãi</span>
              </div>
              {ELECTRIC.map((car, i) => (
                <div key={i} className={`grid grid-cols-3 px-5 py-4 border-b border-gray-50 items-center ${i % 2 === 0 ? "" : "bg-gray-50/50"}`}>
                  <Link href={`/xe-vinfast/${car.slug}`} className="font-semibold text-gray-800 hover:text-blue-700 text-sm">{car.model}</Link>
                  <span className="text-right text-sm text-gray-400 line-through">{fmt(car.price)}</span>
                  <span className="text-right text-sm font-bold" style={{ color: "var(--vf-blue)" }}>{fmt(car.discount)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dòng xe dịch vụ */}
          <div>
            <h2 className="text-xl font-black mb-4" style={{ color: "var(--vf-blue)" }}>Dòng xe dịch vụ</h2>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="grid grid-cols-3 px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide bg-gray-50 border-b border-gray-100">
                <span>Dòng xe</span>
                <span className="text-right">Giá niêm yết</span>
                <span className="text-right">Giá ưu đãi</span>
              </div>
              {SERVICE.map((car, i) => (
                <div key={i} className={`grid grid-cols-3 px-5 py-4 border-b border-gray-50 items-center ${i % 2 === 0 ? "" : "bg-gray-50/50"}`}>
                  <Link href={`/xe-vinfast/${car.slug}`} className="font-semibold text-gray-800 hover:text-blue-700 text-sm">{car.model}</Link>
                  <span className="text-right text-sm text-gray-400 line-through">{fmt(car.price)}</span>
                  <span className="text-right text-sm font-bold" style={{ color: "var(--vf-blue)" }}>
                    {car.discount ? fmt(car.discount) : fmt(car.price)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-xs text-gray-600">
            <p className="font-bold mb-1">⚠ Lưu ý:</p>
            <p>Giá trên là giá tham khảo, có thể thay đổi theo từng thời điểm. Vui lòng liên hệ showroom để nhận báo giá chính xác và cập nhật nhất. Giá ưu đãi áp dụng theo chương trình khuyến mãi hiện hành.</p>
          </div>

          <div className="text-center">
            <Link href="/lien-he" className="btn-primary inline-flex">Đăng ký nhận báo giá chi tiết</Link>
          </div>
        </div>
      </section>
    </>
  );
}
