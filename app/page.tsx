import type { Metadata } from "next";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import CarCard from "@/components/CarCard";
import NewsGrid from "@/components/NewsGrid";
import { CARS, NEWS, DEALER_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "VinFast Long An 3S – Đại lý xe điện VinFast chính hãng tại Long An",
};

export default function HomePage() {
  const electricCars = CARS.filter((c) => c.group === "o-to-dien");
  const serviceCars = CARS.filter((c) => c.group === "xe-dich-vu");
  const latestNews = NEWS.slice(0, 3);

  return (
    <>
      <HeroSlider />

      {/* Ô tô điện */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-black mb-6" style={{ color: "var(--vf-blue)" }}>Ô tô điện</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {electricCars.map((car) => <CarCard key={car.id} car={car} />)}
          </div>
        </div>
      </section>

      {/* Dòng xe dịch vụ */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-black mb-6" style={{ color: "var(--vf-blue)" }}>Dòng xe dịch vụ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceCars.map((car) => <CarCard key={car.id} car={car} />)}
          </div>
        </div>
      </section>

      {/* Tin tức */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-xl font-black" style={{ color: "var(--vf-blue)" }}>Tin tức & Khuyến mãi</h2>
            <Link href="/tin-tuc" className="text-sm font-semibold flex items-center gap-1 hover:underline" style={{ color: "var(--vf-blue)" }}>
              Xem tất cả <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
          <NewsGrid items={latestNews} />
        </div>
      </section>

      {/* Map */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-black text-center mb-2" style={{ color: "var(--vf-blue)" }}>Showroom của chúng tôi</h2>
          <p className="text-center text-gray-500 text-sm mb-6">{DEALER_INFO.address}</p>
          <div className="rounded-xl overflow-hidden shadow h-72 border border-gray-100">
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
