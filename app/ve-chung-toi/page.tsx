import type { Metadata } from "next";
import Link from "next/link";
import { DEALER_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Về chúng tôi – VinFast Long An 3S",
};

export default function VeChungToiPage() {
  return (
    <>
      <div style={{ background: "linear-gradient(135deg, var(--vf-blue-dark), var(--vf-blue))" }} className="py-12 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-white/70 mb-2">Trang chủ / Về chúng tôi</div>
          <h1 className="text-3xl md:text-4xl font-black mb-2">Về VinFast Long An</h1>
          <p className="text-white/80">Đại lý 3S chính hãng – Tận tâm phục vụ khách hàng Long An</p>
        </div>
      </div>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="section-title mb-4">Câu chuyện của chúng tôi</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                VinFast Long An là đại lý 3S chính hãng được VinFast ủy quyền tại tỉnh Long An. Với sứ mệnh mang xe điện thương hiệu Việt đến gần hơn với người dân tỉnh Long An và các vùng lân cận, chúng tôi không ngừng nỗ lực cung cấp dịch vụ xuất sắc nhất.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Showroom của chúng tôi được trang bị hiện đại với đầy đủ phòng trưng bày, xưởng dịch vụ và trạm sạc điện. Đội ngũ nhân viên được đào tạo chuyên nghiệp bởi VinFast sẵn sàng tư vấn và hỗ trợ khách hàng 24/7.
              </p>
              <div className="flex gap-4 mt-6">
                <Link href="/lien-he" className="btn-primary">Liên hệ ngay</Link>
                <Link href="/xe-vinfast" className="btn-outline">Xem xe</Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: "2021", label: "Năm thành lập" },
                  { num: "500+", label: "Xe đã bàn giao" },
                  { num: "30+", label: "Nhân viên chuyên nghiệp" },
                  { num: "98%", label: "Khách hàng hài lòng" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl p-5 shadow-sm">
                    <div className="text-2xl font-black" style={{ color: "var(--vf-blue)" }}>{stat.num}</div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3S Services */}
          <div className="mb-16">
            <h2 className="section-title text-center mb-2">Dịch vụ 3S của chúng tôi</h2>
            <p className="text-gray-500 text-center mb-10">Showroom – Sales – Service</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🏪",
                  title: "Showroom",
                  desc: "Không gian trưng bày hiện đại với đầy đủ các dòng xe VinFast. Khách hàng có thể trải nghiệm và tìm hiểu trực tiếp từng mẫu xe.",
                  features: ["Diện tích 2000m²", "Trưng bày 6+ mẫu xe", "Phòng VIP riêng biệt", "Trạm sạc điện miễn phí"],
                },
                {
                  icon: "💼",
                  title: "Sales",
                  desc: "Đội ngũ tư vấn bán hàng chuyên nghiệp, am hiểu sản phẩm. Hỗ trợ đầy đủ từ lựa chọn xe đến hoàn thiện thủ tục.",
                  features: ["Tư vấn 1-1 chuyên sâu", "Hỗ trợ vay vốn", "Giao xe tận nhà", "Đổi xe cũ lấy xe mới"],
                },
                {
                  icon: "🔧",
                  title: "Service",
                  desc: "Xưởng dịch vụ được trang bị máy móc hiện đại, kỹ thuật viên được VinFast đào tạo và chứng nhận.",
                  features: ["Bảo dưỡng định kỳ", "Sửa chữa chính hãng", "Phụ tùng nguyên bản", "Bảo hành pin 10 năm"],
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

          {/* Team */}
          <div>
            <h2 className="section-title text-center mb-2">Đội ngũ của chúng tôi</h2>
            <p className="text-gray-500 text-center mb-10">Những con người tận tâm đứng sau dịch vụ xuất sắc</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Nguyễn Văn An", role: "Giám đốc Kinh doanh", avatar: "👨‍💼" },
                { name: "Trần Thị Bình", role: "Tư vấn Bán hàng cao cấp", avatar: "👩‍💼" },
                { name: "Lê Minh Cường", role: "Kỹ thuật viên trưởng", avatar: "👨‍🔧" },
                { name: "Phạm Thu Dung", role: "Chăm sóc Khách hàng", avatar: "👩‍💻" },
              ].map((member) => (
                <div key={member.name} className="text-center bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-3xl mx-auto mb-3">
                    {member.avatar}
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">{member.name}</h4>
                  <p className="text-xs text-gray-500 mt-1">{member.role}</p>
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
          <p className="text-white/80 mb-6">Đặt lịch lái thử miễn phí ngay hôm nay. Đội ngũ chúng tôi luôn sẵn sàng phục vụ bạn.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/lien-he" className="btn-red">Đặt lịch lái thử ngay</Link>
            <a href={DEALER_INFO.hotlineLink} className="btn-outline border-white text-white hover:bg-white hover:text-blue-900">
              Gọi {DEALER_INFO.hotline}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
