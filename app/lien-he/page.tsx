import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { DEALER_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Liên hệ – Đặt lịch lái thử VinFast Long An",
};

export default function LienHePage() {
  return (
    <>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-400 mb-2">Trang chủ / Liên hệ</div>
          <h1 className="text-3xl md:text-4xl font-black mb-1 text-gray-900">Liên hệ & Đặt lịch lái thử</h1>
          <p className="text-gray-500">Đội ngũ tư vấn của chúng tôi luôn sẵn sàng hỗ trợ bạn 7 ngày trong tuần</p>
        </div>
      </div>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="section-title">Thông tin showroom</h2>

              {[
                {
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="#005BAC"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>,
                  title: "Địa chỉ showroom",
                  content: DEALER_INFO.address,
                  link: null,
                },
                {
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="#005BAC"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>,
                  title: "Hotline tư vấn",
                  content: DEALER_INFO.hotline,
                  link: DEALER_INFO.hotlineLink,
                },
                {
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="#005BAC"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>,
                  title: "Giờ làm việc",
                  content: DEALER_INFO.workingHours,
                  link: null,
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{item.title}</p>
                    {item.link ? (
                      <a href={item.link} className="font-semibold text-gray-800 hover:text-blue-700 transition-colors">{item.content}</a>
                    ) : (
                      <p className="font-semibold text-gray-800">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <LeadForm
                title="Đặt lịch lái thử / Tư vấn"
                subtitle="Điền thông tin bên dưới, chúng tôi sẽ liên hệ trong 30 phút"
                formType="consult"
              />

              <div className="mt-8 rounded-xl overflow-hidden border border-gray-100 shadow-sm h-64 bg-blue-50 flex items-center justify-center">
                <div className="text-center p-6">
                  <svg className="mx-auto mb-2" width="40" height="40" viewBox="0 0 24 24" fill="#005BAC"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  <p className="font-semibold text-gray-700 text-sm">{DEALER_INFO.address}</p>
                  <a href={DEALER_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm text-blue-600 font-semibold underline">
                    Xem đường đi trên Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
