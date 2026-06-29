import type { Metadata } from "next";
import Link from "next/link";
import { NEWS, PROMOTIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Khuyến mãi – VinFast Long An",
};

export default function KhuyenMaiPage() {
  const promoNews = NEWS.filter((n) => n.category === "khuyen-mai");

  return (
    <>
      <div style={{ background: "linear-gradient(135deg, #C0392B, #E30613)" }} className="py-12 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-white/70 mb-2">Trang chủ / Khuyến mãi</div>
          <h1 className="text-3xl md:text-4xl font-black mb-2">Khuyến mãi đặc biệt</h1>
          <p className="text-white/80">Đừng bỏ lỡ các ưu đãi hấp dẫn từ VinFast Long An</p>
        </div>
      </div>

      {/* Main promotions */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title mb-8">Ưu đãi đang áp dụng</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {PROMOTIONS.map((promo) => (
              <div
                key={promo.id}
                className="bg-white rounded-xl border shadow-sm p-6 flex gap-5 items-start hover:shadow-md transition-shadow"
                style={{ borderColor: `${promo.color}40` }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${promo.color}15` }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill={promo.color}>
                    {promo.icon === "gift" && <path d="M20 12v10H4V12H2v-2h20v2h-2zM12 2C10.34 2 9 3.34 9 5s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>}
                    {promo.icon === "percent" && <><circle cx="7.5" cy="6.5" r="1.5"/><circle cx="16.5" cy="16.5" r="1.5"/><line x1="5" y1="19" x2="19" y2="5" strokeWidth="2" stroke={promo.color} fill="none"/></>}
                    {promo.icon === "shield" && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>}
                    {promo.icon === "zap" && <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>}
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 text-lg">{promo.title}</h3>
                    {promo.badge && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ background: promo.color }}>{promo.badge}</span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{promo.description}</p>
                  <Link href="/lien-he" className="text-sm font-semibold inline-flex items-center gap-1" style={{ color: promo.color }}>
                    Đăng ký ngay
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Promo news */}
          {promoNews.length > 0 && (
            <>
              <h2 className="section-title mb-6">Tin khuyến mãi</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {promoNews.map((item) => (
                  <Link key={item.id} href={`/tin-tuc/${item.slug}`} className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex">
                    <div className="w-32 h-auto shrink-0 bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
                      <span className="text-4xl">🎁</span>
                    </div>
                    <div className="p-4 flex-1">
                      <p className="text-xs text-gray-400 mb-1">{new Date(item.date).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" })}</p>
                      <h3 className="font-bold text-gray-900 text-sm line-clamp-2 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">{item.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-50 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Đừng bỏ lỡ ưu đãi!</h2>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">Đăng ký nhận thông báo ưu đãi mới nhất từ VinFast Long An qua hotline hoặc Zalo.</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/lien-he" className="btn-red">Đăng ký nhận ưu đãi</Link>
          <a href="tel:0901234567" className="btn-outline">Gọi hotline</a>
        </div>
      </section>
    </>
  );
}
