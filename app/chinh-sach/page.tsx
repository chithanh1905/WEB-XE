import type { Metadata } from "next";
import { DEALER_INFO } from "@/lib/data";

export const metadata: Metadata = { title: "Chính sách bảo mật & Điều khoản sử dụng – VinFast Long An" };

export default function ChinhSachPage() {
  return (
    <>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-400 mb-2">Trang chủ / Chính sách</div>
          <h1 className="text-3xl md:text-4xl font-black mb-1 text-gray-900">Chính sách bảo mật & Điều khoản sử dụng</h1>
          <p className="text-gray-500">VinFast VFG Long An – Cam kết bảo vệ thông tin khách hàng</p>
        </div>
      </div>

      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 space-y-10">

          {/* Chính sách bảo mật */}
          <div>
            <h2 className="text-2xl font-black mb-6" style={{ color: "var(--vf-blue)" }}>I. Chính sách bảo mật thông tin</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-3">1. Thu thập thông tin</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Website thu thập các thông tin cá nhân bao gồm: họ tên, số điện thoại, email, địa chỉ và nhu cầu tư vấn xe VinFast nhằm mục đích hỗ trợ tư vấn sản phẩm và chăm sóc khách hàng.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-3">2. Sử dụng thông tin</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Thông tin được sử dụng nội bộ cho các hoạt động tư vấn liên quan đến sản phẩm VinFast. Chúng tôi <strong>không bán hoặc chia sẻ thông tin khách hàng với bên thứ ba</strong> vì mục đích thương mại.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-3">3. Lưu trữ thông tin</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Thông tin được lưu trữ cho đến khi khách hàng yêu cầu xóa hoặc website ngừng hoạt động. Chúng tôi áp dụng các biện pháp kỹ thuật và quản lý để bảo vệ thông tin khỏi truy cập trái phép.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-3">4. Quyền của khách hàng</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    "Yêu cầu xem lại thông tin cá nhân đã cung cấp",
                    "Yêu cầu chỉnh sửa hoặc xóa thông tin",
                    "Từ chối nhận thông tin quảng cáo",
                    "Khiếu nại về việc sử dụng thông tin không đúng mục đích",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: "var(--vf-blue)" }}><path d="M20 6L9 17l-5-5"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Điều khoản sử dụng */}
          <div>
            <h2 className="text-2xl font-black mb-6" style={{ color: "var(--vf-blue)" }}>II. Điều khoản sử dụng</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-3">1. Chấp nhận điều khoản</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Khi sử dụng website này, bạn đồng ý với tất cả các điều khoản và điều kiện được nêu. Đây là website cá nhân của nhân viên kinh doanh VinFast, <strong>không phải website chính thức của VinFast Việt Nam</strong>.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-3">2. Mục đích website</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Website được xây dựng nhằm mục đích giới thiệu xe điện VinFast, chia sẻ thông tin sản phẩm, hỗ trợ đăng ký lái thử và tư vấn. Mọi giao dịch mua bán thực tế diễn ra trực tiếp tại showroom.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-3">3. Trách nhiệm người dùng</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Người dùng phải cung cấp thông tin chính xác và không sử dụng website cho mục đích bất hợp pháp hoặc gây hại đến an ninh hệ thống.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-3">4. Giới hạn trách nhiệm</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Website không chịu trách nhiệm về các gián đoạn kỹ thuật, thiệt hại từ việc sử dụng thông tin hoặc các mối đe dọa bảo mật từ bên ngoài.
                </p>
              </div>
            </div>
          </div>

          {/* Liên hệ */}
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h3 className="font-bold text-gray-900 mb-3">Liên hệ về chính sách</h3>
            <p className="text-gray-600 text-sm mb-1">Nếu có thắc mắc về chính sách, vui lòng liên hệ:</p>
            <p className="text-sm font-semibold text-gray-800">{DEALER_INFO.name}</p>
            <p className="text-sm text-gray-600">{DEALER_INFO.address}</p>
            <a href={DEALER_INFO.hotlineLink} className="text-sm font-bold mt-1 inline-block" style={{ color: "var(--vf-blue)" }}>{DEALER_INFO.hotline}</a>
          </div>
        </div>
      </section>
    </>
  );
}
