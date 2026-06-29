import type { Metadata } from "next";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import CarCard from "@/components/CarCard";
import LeadForm from "@/components/LeadForm";
import { CARS, NEWS, PROMOTIONS, DEALER_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "VinFast Long An 3S – Đại lý xe điện VinFast chính hãng tại Long An",
};

export default function HomePage() {
  const featuredCars = CARS.slice(0, 4);
  const latestNews = NEWS.slice(0, 3);

  return (
    <>
      <HeroSlider />

      {/* Promotions */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PROMOTIONS.map((promo) => (
              <div key={promo.id} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: `${promo.color}15` }}>
                  {promo.icon === "gift" && <svg width="20" height="20" viewBox="0 0 24 24" fill={promo.color}><path d="M20 12v10H4V12H2v-2h20v2h-2zM12 2C10.34 2 9 3.34 9 5s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>}
                  {promo.icon === "percent" && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={promo.color} strokeWidth="2"><circle cx="7.5" cy="6.5" r="1.5" fill={promo.color}/><circle cx="16.5" cy="16.5" r="1.5" fill={promo.color}/><line x1="5" y1="19" x2="19" y2="5"/></svg>}
                  {promo.icon === "shield" && <svg width="20" height="20" viewBox="0 0 24 24" fill={promo.color}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
                  {promo.icon === "zap" && <svg width="20" height="20" viewBox="0 0 24 24" fill={promo.color}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>}
                </div>
                {promo.badge && <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white mb-2 inline-block" style={{ background: promo.color }}>{promo.badge}</span>}
                <h3 className="font-bold text-sm text-gray-900 mb-1">{promo.title}</h3>
                <p className="text-xs text-gray-500">{promo.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="section-title">Xe VinFast nổi bật</h2>
              <p className="text-gray-500 mt-3">Khám phá các dòng xe điện hàng đầu hiện đang có mặt tại showroom</p>
            </div>
            <Link href="/xe-vinfast" className="btn-outline hidden md:flex text-sm py-2">
              Xem tất cả <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCars.map((car) => <CarCard key={car.id} car={car} />)}
          </div>
          <div className="mt-6 text-center md:hidden">
            <Link href="/xe-vinfast" className="btn-outline">Xem tất cả xe</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14" style={{ background: "var(--vf-blue)" }}>
        <div className="max-w-7xl mx-auto px-4 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-2">Tại sao chọn VinFast Long An?</h2>
          <p className="text-white/80 mb-10">Cam kết dịch vụ 3S – Showroom · Sales · Service</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              { icon: "🏆", title: "Đại lý 3S chính hãng", desc: "Được VinFast ủy quyền chính thức, đảm bảo 100% xe chính hãng" },
              { icon: "💰", title: "Giá tốt nhất khu vực", desc: "Cam kết giá cạnh tranh nhất Long An, hỗ trợ vay vốn linh hoạt" },
              { icon: "🔧", title: "Dịch vụ hậu mãi tốt", desc: "Xưởng dịch vụ hiện đại, đội ngũ kỹ thuật được VinFast đào tạo" },
              { icon: "⚡", title: "Trạm sạc tại showroom", desc: "Sạc nhanh DC miễn phí tại showroom trong quá trình tư vấn" },
            ].map((item) => (
              <div key={item.title}>
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-white/75">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { num: "500+", label: "Xe đã bàn giao" },
              { num: "98%", label: "Khách hài lòng" },
              { num: "10 năm", label: "Bảo hành pin" },
              { num: "24/7", label: "Hỗ trợ khẩn cấp" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl font-black">{stat.num}</div>
                <div className="text-sm text-white/75 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="section-title mb-4">Đăng ký lái thử miễn phí</h2>
              <p className="text-gray-600 mb-6">Trải nghiệm cảm giác lái xe điện VinFast ngay tại showroom. Chúng tôi sẽ liên hệ trong vòng <strong>30 phút</strong>.</p>
              <div className="space-y-4 mb-6">
                {["Lái thử hoàn toàn miễn phí, không phí ẩn", "Được tư vấn 1-1 với chuyên gia VinFast", "Hỗ trợ tính toán chi phí vay trả góp", "Nhận quà tặng khi đến showroom"].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "var(--vf-blue)" }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="text-sm text-gray-500 mb-3 font-semibold">Liên hệ trực tiếp</p>
                <a href={DEALER_INFO.hotlineLink} className="flex items-center gap-3 text-lg font-bold mb-2" style={{ color: "var(--vf-blue)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  {DEALER_INFO.hotline}
                </a>
                <p className="text-sm text-gray-500">{DEALER_INFO.workingHours}</p>
              </div>
            </div>
            <LeadForm title="Đặt lịch lái thử" subtitle="Điền thông tin, chúng tôi liên hệ trong 30 phút" formType="test-drive" />
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="section-title">Tin tức & Khuyến mãi</h2>
              <p className="text-gray-500 mt-3">Cập nhật các chương trình ưu đãi mới nhất từ VinFast Long An</p>
            </div>
            <Link href="/tin-tuc" className="btn-outline hidden md:flex text-sm py-2">
              Xem tất cả <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((item) => (
              <Link key={item.id} href={`/tin-tuc/${item.slug}`} className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 relative flex items-center justify-center">
                  <span className="text-5xl">📰</span>
                  <span
                    className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white"
                    style={{ background: item.category === "khuyen-mai" ? "#E30613" : item.category === "su-kien" ? "#9333EA" : "var(--vf-blue)" }}
                  >
                    {item.categoryLabel}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-400 mb-2">
                    {new Date(item.date).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" })}
                  </p>
                  <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-blue-700 transition-colors mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{item.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center mb-2">Showroom của chúng tôi</h2>
          <p className="text-center text-gray-500 mb-8">{DEALER_INFO.address}</p>
          <div className="rounded-xl overflow-hidden shadow-lg h-80 border border-blue-100">
            <iframe
              src={DEALER_INFO.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VinFast Long An trên Google Maps"
            />
          </div>
          <div className="mt-4 text-center">
            <a href={DEALER_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              Xem chỉ đường trên Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
