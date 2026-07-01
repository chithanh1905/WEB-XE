import type { Metadata } from "next";
import Link from "next/link";
import { DEALER_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Giới thiệu – VinFast VFG Long An",
  description: "VFG Long An là thành viên của Tập đoàn Tương Lai Việt (VFG), một trong những nhà phân phối VinFast lớn nhất tại Việt Nam.",
};

export default function VeChungToiPage() {
  return (
    <>
      {/* Breadcrumb + tiêu đề */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-400 mb-2">Trang chủ / Giới thiệu</div>
          <h1 className="text-3xl md:text-4xl font-black mb-1 text-gray-900">VinFast VFG Long An</h1>
          <p className="text-gray-500">Thành viên của Tập đoàn Tương Lai Việt (VFG) – Nhà phân phối VinFast chính hãng</p>
        </div>
      </div>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">

          {/* Giới thiệu + số liệu */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="section-title mb-4">Câu chuyện của chúng tôi</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>VFG Long An</strong> là thành viên của Tập đoàn Tương Lai Việt (VFG), một trong những nhà phân phối VinFast lớn nhất tại Việt Nam. Showroom tọa lạc tại 1163 QL1A, Khu phố Nhơn Cầu, Phường Khánh Hậu, Tỉnh Long An — vị trí thuận tiện kết nối toàn vùng Đồng bằng sông Cửu Long.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Với diện tích <strong>3.600 m²</strong> và vốn đầu tư <strong>22,3 tỷ đồng</strong>, đơn vị do ông <strong>Đặng Thế Kiệt</strong> quản lý — người có hơn <strong>14 năm kinh nghiệm</strong> trong lĩnh vực phân phối ô tô. Chúng tôi cam kết cung cấp sản phẩm và dịch vụ xe điện VinFast chính hãng với trải nghiệm chuyên nghiệp, tận tâm nhất.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Hướng đến trở thành cơ sở <em>"VinFast uy tín hàng đầu khu vực vùng Đồng bằng sông Cửu Long"</em>, chúng tôi không ngừng nâng cao chất lượng dịch vụ và mở rộng trải nghiệm cho khách hàng.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/dang-ky-lai-thu" className="btn-primary">Đăng ký lái thử</Link>
                <Link href="/xe-vinfast" className="btn-outline">Xem xe</Link>
              </div>
            </div>

            {/* Số liệu thực tế */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { num: "3.600 m²", label: "Diện tích showroom" },
                  { num: "22,3 tỷ", label: "Vốn đầu tư" },
                  { num: "14+ năm", label: "Kinh nghiệm quản lý" },
                  { num: "7/7", label: "Ngày phục vụ trong tuần" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl p-5 shadow-sm text-center">
                    <div className="text-xl font-black" style={{ color: "var(--vf-blue)" }}>{stat.num}</div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tầm nhìn & Sứ mệnh */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#005BAC"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
              </div>
              <h3 className="text-lg font-black mb-2" style={{ color: "var(--vf-blue)" }}>Tầm nhìn</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Trở thành cơ sở VinFast uy tín hàng đầu khu vực vùng Đồng bằng sông Cửu Long, mang đến trải nghiệm xe điện đẳng cấp cho mọi khách hàng.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#E30613"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h3 className="text-lg font-black mb-2" style={{ color: "#E30613" }}>Sứ mệnh</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cung cấp sản phẩm và dịch vụ xe điện VinFast chính hãng với chất lượng cao nhất, góp phần thúc đẩy xu hướng giao thông xanh tại Việt Nam.
              </p>
            </div>
          </div>

          {/* Giá trị cốt lõi */}
          <div className="mb-16">
            <h2 className="section-title text-center mb-2">Giá trị cốt lõi</h2>
            <p className="text-gray-500 text-center mb-10">Những nguyên tắc định hướng mọi hoạt động của chúng tôi</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="#005BAC"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>,
                  title: "Khách hàng là trung tâm",
                  desc: "Mọi quyết định và hành động đều hướng đến sự hài lòng tối đa của khách hàng. Lắng nghe, thấu hiểu và phục vụ tận tâm.",
                },
                {
                  icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="#005BAC"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>,
                  title: "Chính trực & Minh bạch",
                  desc: "Cam kết trung thực trong từng giao dịch. Giá cả công khai, thông tin rõ ràng, không phát sinh chi phí ẩn.",
                },
                {
                  icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="#005BAC"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/></svg>,
                  title: "Chuyên nghiệp & Tận tâm",
                  desc: "Đội ngũ được đào tạo bài bản bởi VinFast. Phục vụ nhiệt tình, chu đáo từ lúc tư vấn đến sau khi bàn giao xe.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">{item.icon}</div>
                  <h3 className="text-base font-black mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dịch vụ 3S */}
          <div className="mb-16">
            <h2 className="section-title text-center mb-2">Dịch vụ 3S</h2>
            <p className="text-gray-500 text-center mb-10">Showroom – Sales – Service</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🏪",
                  title: "Showroom",
                  desc: "Không gian trưng bày 3.600m² hiện đại với đầy đủ các dòng xe VinFast. Khách hàng thoải mái trải nghiệm và tìm hiểu từng mẫu xe.",
                  features: ["Diện tích 3.600 m²", "Đầy đủ dòng xe điện VinFast", "Không gian hiện đại", "Trạm sạc điện tại chỗ"],
                },
                {
                  icon: "💼",
                  title: "Sales",
                  desc: "Đội ngũ tư vấn chuyên nghiệp, am hiểu sản phẩm. Hỗ trợ đầy đủ từ lựa chọn xe đến hoàn thiện thủ tục mua xe.",
                  features: ["Tư vấn 1-1 chuyên sâu", "Hỗ trợ vay vốn ngân hàng", "Giao xe tận nơi", "Đổi xe cũ lấy xe mới"],
                },
                {
                  icon: "🔧",
                  title: "Service",
                  desc: "Xưởng dịch vụ trang bị máy móc hiện đại, kỹ thuật viên được VinFast đào tạo và chứng nhận chính hãng.",
                  features: ["Bảo dưỡng định kỳ", "Sửa chữa chính hãng", "Phụ tùng nguyên bản VinFast", "Bảo hành pin 10 năm"],
                },
              ].map((service) => (
                <div key={service.title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-black mb-2" style={{ color: "var(--vf-blue)" }}>{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#005BAC"/><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-12" style={{ background: "var(--vf-blue)" }}>
        <div className="max-w-2xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl font-black mb-3">Sẵn sàng trải nghiệm xe điện?</h2>
          <p className="text-white/80 mb-6">Đặt lịch lái thử miễn phí ngay hôm nay. Đội ngũ chúng tôi luôn sẵn sàng phục vụ bạn 7 ngày trong tuần.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/dang-ky-lai-thu" className="btn-red">Đăng ký lái thử ngay</Link>
            <a href={DEALER_INFO.hotlineLink} className="px-6 py-2.5 rounded font-bold border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-colors">
              Gọi {DEALER_INFO.hotline}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
