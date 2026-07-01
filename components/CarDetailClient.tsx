"use client";
import { useState } from "react";
import Link from "next/link";
import { CARS, Car, DEALER_INFO } from "@/lib/data";

function formatPrice(n: number) {
  return n.toLocaleString("vi-VN") + "đ";
}

function GallerySlider({ images, name }: { images: string[]; name: string }) {
  return (
    <div className="space-y-3">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${name} ${i + 1}`}
          className="w-full rounded-xl object-contain bg-white"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
      ))}
    </div>
  );
}

const TABS = ["Nổi bật", "Tổng quan", "Thông số", "Dòng xe khác", "Yêu cầu tư vấn"] as const;
type Tab = typeof TABS[number];

export default function CarDetailClient({ car }: { car: Car }) {
  const [activeTab, setActiveTab] = useState<Tab>("Nổi bật");
  const [activeColor, setActiveColor] = useState(0);
  const [imgError, setImgError] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", address: "", car: car.name });
  const [submitted, setSubmitted] = useState(false);

  const selectedColorOpt = car.colorOptions?.[activeColor];
  const colorImg = (!imgError && selectedColorOpt?.image) ? selectedColorOpt.image : car.heroImage;
  const relatedCars = CARS.filter((c) => c.id !== car.id).slice(0, 6);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 py-2">
        <div className="max-w-7xl mx-auto px-4 text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-600">Trang chủ</Link>
          <span>/</span>
          <Link href="/xe-vinfast" className="hover:text-blue-600">Xe VinFast</Link>
          <span>/</span>
          <span className="text-gray-800 font-semibold">{car.name}</span>
        </div>
      </div>

      {/* Hero – full width ảnh xe */}
      <div className="relative w-full bg-gray-100 overflow-hidden" style={{ maxHeight: 540 }}>
        <img
          src={colorImg}
          alt={car.name}
          className="w-full object-cover object-center"
          style={{ maxHeight: 540 }}
        />
        {/* Price overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl font-black">{car.name}</h1>
              <p className="text-white/80 text-sm mt-1">{car.tagline}</p>
            </div>
            <div className="text-right">
              {car.versions && car.versions.length > 0 && (
                <div>
                  <p className="text-white/70 text-xs line-through">{formatPrice(car.versions[0].price)}</p>
                  <p className="text-yellow-300 text-2xl font-black">{formatPrice(car.versions[0].discountPrice)}</p>
                  <p className="text-green-400 text-xs font-semibold">{car.versions[0].discountNote}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-16 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`shrink-0 px-5 py-4 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-blue-600 text-blue-700"
                  : "border-transparent text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* ===== TAB: NỔI BẬT ===== */}
        {activeTab === "Nổi bật" && (
          <div className="space-y-10">
            {/* Versions & Pricing */}
            <div>
              <h2 className="text-xl font-black mb-4" style={{ color: "var(--vf-blue)" }}>Phiên bản & Giá xe</h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "var(--vf-blue)" }} className="text-white">
                      <th className="text-left px-5 py-3 font-semibold">Phiên bản</th>
                      <th className="text-right px-5 py-3 font-semibold">Giá niêm yết</th>
                      <th className="text-right px-5 py-3 font-semibold">Giá ưu đãi</th>
                      <th className="text-center px-5 py-3 font-semibold">Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody>
                    {car.versions?.map((v, i) => (
                      <tr key={v.name} className={i % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                        <td className="px-5 py-3 font-semibold text-gray-800">{v.name}</td>
                        <td className="px-5 py-3 text-right text-gray-400 line-through">{formatPrice(v.price)}</td>
                        <td className="px-5 py-3 text-right font-black" style={{ color: "var(--vf-blue)" }}>{formatPrice(v.discountPrice)}</td>
                        <td className="px-5 py-3 text-center">
                          <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">{v.discountNote}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Promotions */}
            <div>
              <h2 className="text-xl font-black mb-4" style={{ color: "var(--vf-blue)" }}>Ưu đãi hiện hành</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {car.promotions?.map((p) => (
                  <div key={p} className="flex items-start gap-3 bg-green-50 border border-green-100 rounded-xl p-4">
                    <svg className="shrink-0 mt-0.5 text-green-600" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#16A34A"/>
                      <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm font-semibold text-green-800">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-xl font-black mb-4" style={{ color: "var(--vf-blue)" }}>Điểm nổi bật</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {car.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3 bg-blue-50 rounded-xl p-4">
                    <svg className="shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#005BAC"/>
                      <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm text-gray-700">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a href={DEALER_INFO.hotlineLink} className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                LIÊN HỆ NGAY
              </a>
              <button onClick={() => setActiveTab("Yêu cầu tư vấn")} className="btn-outline">
                Đăng ký lái thử
              </button>
            </div>
          </div>
        )}

        {/* ===== TAB: TỔNG QUAN (màu + gallery) ===== */}
        {activeTab === "Tổng quan" && (
          <div className="space-y-10">
            {/* Color selector – ảnh lớn + thumbnail kéo trượt */}
            <div>
              <h2 className="text-xl font-black mb-1" style={{ color: "var(--vf-blue)" }}>Chọn màu xe</h2>
              {/* Ảnh xe lớn */}
              <div className="rounded-xl overflow-hidden bg-white flex items-center justify-center mb-4" style={{ minHeight: 300 }}>
                <img
                  key={colorImg}
                  src={colorImg}
                  alt={selectedColorOpt?.name || car.name}
                  className="w-full object-contain transition-opacity duration-300"
                  style={{ maxHeight: 460 }}
                  onError={() => setImgError(true)}
                />
              </div>

              {/* Thumbnail kéo trượt ngang */}
              <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: "thin" }}>
                {car.colorOptions?.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => { setActiveColor(i); setImgError(false); }}
                    className={`shrink-0 rounded-lg overflow-hidden border-2 transition-all ${i === activeColor ? "border-blue-600 shadow-md" : "border-gray-200 hover:border-gray-400 opacity-60 hover:opacity-100"}`}
                    style={{ width: 120, height: 80 }}
                    title={c.name}
                  >
                    <img
                      src={c.image}
                      alt={c.name}
                      className="w-full h-full object-contain bg-gray-50"
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement;
                        img.style.display = "none";
                        const hex = car.colors?.[i]?.hex ?? "#cccccc";
                        const parent = img.parentElement;
                        if (parent) {
                          parent.style.background = hex;
                          const label = document.createElement("span");
                          label.style.cssText = "font-size:10px;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.5);padding:4px;display:block;text-align:center;line-height:1.2;margin-top:28px;";
                          label.textContent = c.name;
                          parent.appendChild(label);
                        }
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Photo gallery – full width slider */}
            {car.gallery && car.gallery.length > 0 && (
              <div>
                <h2 className="text-xl font-black mb-4" style={{ color: "var(--vf-blue)" }}>Hình ảnh thực tế</h2>
                <GallerySlider images={car.gallery} name={car.name} />
              </div>
            )}
          </div>
        )}

        {/* ===== TAB: THÔNG SỐ ===== */}
        {activeTab === "Thông số" && (
          <div className="space-y-8">
            <h2 className="text-xl font-black" style={{ color: "var(--vf-blue)" }}>Thông số kỹ thuật {car.name}</h2>
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {car.specs.map((spec, i) => (
                    <tr key={spec.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-3 text-gray-500 font-medium w-1/2 border-b border-gray-100">{spec.label}</td>
                      <td className="px-5 py-3 text-gray-800 font-semibold border-b border-gray-100">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Spec images */}
            {car.specImages && car.specImages.length > 0 && (
              <div className="space-y-4">
                {car.specImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Thông số ${car.name} ${i + 1}`}
                    className="w-full rounded-xl"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* ===== TAB: DÒNG XE KHÁC ===== */}
        {activeTab === "Dòng xe khác" && (
          <div>
            <h2 className="text-xl font-black mb-6" style={{ color: "var(--vf-blue)" }}>Xem thêm các dòng xe khác</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedCars.map((c) => {
                const range = c.specs.find(s => s.label.includes("đường") || s.label.includes("NEDC") || s.label.includes("WLTP"))?.value || "";
                return (
                  <div key={c.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="bg-white p-4 flex items-center justify-center" style={{ minHeight: 160 }}>
                      <img src={c.image} alt={c.name} className="h-32 w-full object-contain" />
                    </div>
                    <div className="p-4 border-t border-gray-100">
                      <h3 className="font-bold text-gray-900">{c.name}</h3>
                      {range && <p className="text-xs text-gray-500 mt-0.5">Quãng đường chạy (NEDC): {range}/lần sạc đầy</p>}
                      <p className="font-black mt-1 text-sm" style={{ color: "var(--vf-blue)" }}>{c.price}</p>
                      <div className="flex gap-2 mt-3">
                        <a
                          href={DEALER_INFO.hotlineLink}
                          className="flex-1 text-center py-2 text-xs font-bold text-white rounded"
                          style={{ background: "var(--vf-blue)" }}
                        >
                          LIÊN HỆ
                        </a>
                        <Link
                          href={`/xe-vinfast/${c.slug}`}
                          className="flex-1 text-center py-2 text-xs font-bold rounded border-2"
                          style={{ borderColor: "var(--vf-blue)", color: "var(--vf-blue)" }}
                        >
                          XEM CHI TIẾT
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ===== TAB: YÊU CẦU TƯ VẤN ===== */}
        {activeTab === "Yêu cầu tư vấn" && (
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-black uppercase" style={{ color: "var(--vf-blue)" }}>
                Đăng ký nhận thông tin
              </h2>
              <p className="text-gray-500 text-sm mt-2">Đăng ký nhận thông tin báo giá và khuyến mãi</p>
              <p className="text-gray-500 text-sm">Để nhận được sự phản hồi nhanh chóng và những ưu đãi tốt nhất</p>
              <p className="font-bold mt-1" style={{ color: "var(--vf-blue)" }}>Hotline: {DEALER_INFO.hotline}</p>
            </div>

            {submitted ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <p className="font-bold text-lg">Đăng ký thành công!</p>
                <p className="text-gray-500 text-sm mt-1">Chúng tôi sẽ liên hệ bạn trong vòng 30 phút.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text" placeholder="HỌ TÊN (*)" required
                  value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                />
                <input
                  type="tel" placeholder="ĐIỆN THOẠI (*)" required
                  value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text" placeholder="ĐỊA CHỈ"
                  value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                />
                <select
                  value={formData.car} onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                  className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-500 text-gray-700"
                >
                  {CARS.map((c) => <option key={c.id} value={c.name}>{c.name}</option>)}
                </select>
                <p className="text-xs text-gray-500 italic text-center">
                  Bằng việc gửi biểu mẫu này, bạn xác nhận đã đọc và đồng ý với{" "}
                  <span className="font-semibold not-italic">Chính sách bảo mật</span>, đồng thời cho phép chúng tôi liên hệ tư vấn.
                </p>
                <button
                  type="submit"
                  className="w-full py-3 font-bold text-sm tracking-widest border-2 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors rounded"
                  style={{ borderColor: "var(--vf-blue)", color: "var(--vf-blue)" }}
                >
                  GỬI NGAY
                </button>
              </form>
            )}
          </div>
        )}

      </div>

      {/* Bottom CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg md:hidden">
        <div className="flex">
          <a
            href={DEALER_INFO.hotlineLink}
            className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold text-white"
            style={{ background: "var(--vf-blue)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            LIÊN HỆ
          </a>
          <button
            onClick={() => setActiveTab("Yêu cầu tư vấn")}
            className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold border-l border-gray-200"
            style={{ color: "var(--vf-blue)" }}
          >
            Đăng ký lái thử
          </button>
        </div>
      </div>
    </>
  );
}
