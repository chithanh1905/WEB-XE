import type { Metadata } from "next";
import Link from "next/link";
import { DEALER_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Giới thiệu – VinFast VFG Long An",
  description: "VFG Long An là đại lý chính thức VinFast thuộc Tập đoàn Tương Lai Việt. Showroom 3.600m² tại Long An.",
};

const GALLERY = [
  {
    src: "https://vinfastvfglongan.com.vn/wp-content/uploads/2026/06/ChatGPT-Image-13_31_18-11-thg-6-2026-1-480x360.png",
    alt: "Showroom VinFast VFG Long An",
  },
  {
    src: "https://vinfastvfglongan.com.vn/wp-content/uploads/2026/06/DJI_0201-1-scaled-480x360.jpg",
    alt: "Toàn cảnh showroom VFG Long An",
  },
  {
    src: "https://vinfastvfglongan.com.vn/wp-content/uploads/2026/06/DJI_0217-1-scaled-480x360.jpg",
    alt: "Cơ sở VFG Long An nhìn từ trên cao",
  },
  {
    src: "https://vinfastvfglongan.com.vn/wp-content/uploads/2026/06/DSCF4134-1-scaled-480x360.jpg",
    alt: "Nội thất showroom VFG Long An",
  },
  {
    src: "https://vinfastvfglongan.com.vn/wp-content/uploads/2026/06/DSCF4132-1-scaled-480x360.jpg",
    alt: "Khu vực trưng bày xe VinFast",
  },
  {
    src: "https://vinfastvfglongan.com.vn/wp-content/uploads/2026/04/gioi-thieu-vfg-long-an-6-480x360.jpg",
    alt: "VFG Long An – Đại lý chính hãng VinFast",
  },
];

export default function VeChungToiPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 text-sm text-gray-400">
          Trang chủ / <span className="text-gray-600">Giới thiệu</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-12">

        {/* Section 1: Giới thiệu */}
        <section>
          <h1 className="text-2xl md:text-3xl font-black mb-5 pb-3 border-b-2" style={{ borderColor: "var(--vf-blue)", color: "var(--vf-blue)" }}>
            Giới thiệu
          </h1>

          {/* Ảnh chính + text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-6">
            <img
              src="https://vinfastvfglongan.com.vn/wp-content/uploads/2026/06/1111.png"
              alt="VFG Long An"
              className="w-full rounded-lg object-cover"
            />
            <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
              <p>
                <strong>VFG Long An</strong> là đại lý chính thức của VinFast thuộc <strong>Tập đoàn Tương Lai Việt (VFG)</strong> — một trong những nhà phân phối VinFast lớn nhất tại Việt Nam.
              </p>
              <p>
                Showroom tọa lạc tại <strong>1163 QL1A, Khu phố Nhơn Cầu, Phường Khánh Hậu, Tỉnh Long An</strong> với diện tích <strong>3.600 m²</strong> và vốn đầu tư <strong>22,3 tỷ đồng</strong>.
              </p>
              <p>
                Đơn vị do ông <strong>Đặng Thế Kiệt</strong> — Giám đốc với hơn <strong>14 năm kinh nghiệm</strong> trong lĩnh vực phân phối ô tô — quản lý theo triết lý <em>"Đặt khách hàng làm trọng tâm"</em>.
              </p>
              <p>
                VFG Long An hướng đến trở thành cơ sở <strong>"VinFast uy tín hàng đầu khu vực vùng Đồng bằng sông Cửu Long"</strong>, cam kết cung cấp sản phẩm và dịch vụ xe điện VinFast chính hãng với trải nghiệm chuyên nghiệp, minh bạch và tận tâm nhất.
              </p>
            </div>
          </div>

          {/* Ảnh drone toàn cảnh */}
          <img
            src="https://vinfastvfglongan.com.vn/wp-content/uploads/2026/06/DJI_0175-scaled.jpg"
            alt="Toàn cảnh VFG Long An nhìn từ trên cao"
            className="w-full rounded-lg object-cover max-h-96"
          />
        </section>

        {/* Section 2: Đội ngũ nhân sự */}
        <section>
          <h2 className="text-xl md:text-2xl font-black mb-5 pb-3 border-b-2" style={{ borderColor: "var(--vf-blue)", color: "var(--vf-blue)" }}>
            Đội ngũ nhân sự
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Đội ngũ nhân sự của VFG Long An được đào tạo theo tiêu chuẩn VinFast, am hiểu sâu về công nghệ xe điện và chính sách hậu mãi. Được xây dựng với tinh thần <strong>tiên phong, chuyên nghiệp và nhất quán</strong> trong định hướng lấy khách hàng làm trọng tâm — mỗi nhân viên đều cam kết đồng hành cùng khách hàng trong toàn bộ hành trình từ tư vấn, mua xe đến chăm sóc hậu mãi.
          </p>
        </section>

        {/* Section 3: Gallery ảnh 3 cột */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {GALLERY.map((img) => (
              <div key={img.src} className="overflow-hidden rounded-lg aspect-[4/3]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Tầm nhìn & Sứ mệnh */}
        <section>
          <h2 className="text-xl md:text-2xl font-black mb-6 pb-3 border-b-2" style={{ borderColor: "var(--vf-blue)", color: "var(--vf-blue)" }}>
            Tầm nhìn & Sứ mệnh
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4 items-start bg-blue-50 rounded-xl p-5">
              <img
                src="https://vinfastvfglongan.com.vn/wp-content/uploads/2026/03/tam-nhin.png"
                alt="Tầm nhìn"
                className="w-14 h-14 object-contain shrink-0"
              />
              <div>
                <h3 className="font-black text-base mb-2" style={{ color: "var(--vf-blue)" }}>Tầm nhìn</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Trở thành showroom VinFast hàng đầu khu vực, tiên phong lan tỏa giao thông xanh tại vùng Đồng bằng sông Cửu Long.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-red-50 rounded-xl p-5">
              <img
                src="https://vinfastvfglongan.com.vn/wp-content/uploads/2026/03/su-menh.png"
                alt="Sứ mệnh"
                className="w-14 h-14 object-contain shrink-0"
              />
              <div>
                <h3 className="font-black text-base mb-2" style={{ color: "#E30613" }}>Sứ mệnh</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Cung cấp sản phẩm và dịch vụ xe điện VinFast chính hãng, đồng hành cùng khách hàng trong toàn bộ hành trình mua xe và hậu mãi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Giá trị cốt lõi */}
        <section>
          <h2 className="text-xl md:text-2xl font-black mb-6 pb-3 border-b-2" style={{ borderColor: "var(--vf-blue)", color: "var(--vf-blue)" }}>
            Giá trị cốt lõi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: "https://vinfastvfglongan.com.vn/wp-content/uploads/2026/03/gia-tri-cot-loi-1.png",
                title: "Khách hàng là trung tâm",
                desc: "Mọi quyết định và hành động đều hướng đến sự hài lòng tối đa của khách hàng. Lắng nghe, thấu hiểu và phục vụ tận tâm.",
              },
              {
                icon: "https://vinfastvfglongan.com.vn/wp-content/uploads/2026/03/gia-tri-cot-loi-2.png",
                title: "Chính trực & Minh bạch",
                desc: "Cam kết trung thực trong từng giao dịch. Giá cả công khai, thông tin rõ ràng, không phát sinh chi phí ẩn.",
              },
              {
                icon: "https://vinfastvfglongan.com.vn/wp-content/uploads/2026/03/gia-tri-cot-loi-3.png",
                title: "Chuyên nghiệp & Tận tâm",
                desc: "Đội ngũ được đào tạo bài bản bởi VinFast. Phục vụ nhiệt tình, chu đáo từ tư vấn đến sau khi bàn giao xe.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-xl shadow-sm p-5 text-center hover:shadow-md transition-shadow">
                <img src={item.icon} alt={item.title} className="w-16 h-16 object-contain mx-auto mb-3" />
                <h3 className="font-black text-sm mb-2" style={{ color: "var(--vf-blue)" }}>{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Cam kết dịch vụ */}
        <section className="bg-blue-50 rounded-xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-black mb-4 pb-3 border-b-2" style={{ borderColor: "var(--vf-blue)", color: "var(--vf-blue)" }}>
            Cam kết dịch vụ
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            VFG Long An cam kết mang đến <strong>dịch vụ xe điện VinFast chính hãng, minh bạch, chuyên nghiệp</strong> — với trải nghiệm an tâm và bền vững. Chúng tôi không chỉ bán xe mà còn đồng hành cùng khách hàng trong suốt quá trình sử dụng và hậu mãi.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#005BAC"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
              <span>{DEALER_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#005BAC"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              <a href={DEALER_INFO.hotlineLink} className="font-bold text-blue-700 hover:underline">{DEALER_INFO.hotline}</a>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#005BAC"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <a href="mailto:info.la@fvag.com.vn" className="text-blue-700 hover:underline">info.la@fvag.com.vn</a>
            </div>
          </div>
          <div className="mt-6 flex gap-3 flex-wrap">
            <Link href="/dang-ky-lai-thu" className="btn-primary">Đăng ký lái thử miễn phí</Link>
            <Link href="/xe-vinfast" className="btn-outline">Xem tất cả xe VinFast</Link>
          </div>
        </section>

      </div>
    </>
  );
}
