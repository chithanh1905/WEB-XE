import Link from "next/link";
import { DEALER_INFO } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ background: "var(--vf-dark)" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img src="/logo-vinfast-vfg.png" alt="VinFast VFG Long An" className="h-14 w-auto object-contain mb-3" />
              <div className="font-black text-xl text-white">{DEALER_INFO.shortName}</div>
              <div className="text-gray-400 text-sm mt-0.5">Đại lý 3S chính hãng</div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-sm">
              Đại lý xe điện VinFast chính hãng tại Long An. Cam kết mang đến dịch vụ bán hàng và hậu mãi tốt nhất cho khách hàng.
            </p>
            <div className="flex gap-3">
              <a href={DEALER_INFO.facebook} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors"
                aria-label="Facebook">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href={DEALER_INFO.youtube} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-500 transition-colors"
                aria-label="YouTube">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
              </a>
              <a href={DEALER_INFO.zalo} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity text-white font-bold text-xs"
                style={{ background: "#0068FF" }}
                aria-label="Zalo">
                Zalo
              </a>
            </div>
          </div>

          {/* Thông tin */}
          <div>
            <h3 className="font-bold text-lg mb-4">Thông tin</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/ve-chung-toi" className="hover:text-white transition-colors">Giới thiệu VinFast VFG Long An</Link></li>
              <li><Link href="/chinh-sach" className="hover:text-white transition-colors">Chính sách bảo mật & Điều khoản</Link></li>
              <li><Link href="/dich-vu/chinh-sach-bao-hanh" className="hover:text-white transition-colors">Chính sách bảo hành</Link></li>
              <li><Link href="/bang-gia" className="hover:text-white transition-colors">Bảng giá</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liên hệ</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex gap-2">
                <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                <span>{DEALER_INFO.address}</span>
              </li>
              <li className="flex gap-2">
                <svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                <a href={DEALER_INFO.hotlineLink} className="hover:text-white transition-colors">{DEALER_INFO.hotline}</a>
              </li>
              <li className="flex gap-2">
                <svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                <a href={`mailto:${DEALER_INFO.email}`} className="hover:text-white transition-colors">{DEALER_INFO.email}</a>
              </li>
              <li className="flex gap-2">
                <svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
                <span>{DEALER_INFO.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {DEALER_INFO.name}. Bản quyền được bảo lưu.</p>
          <div className="flex gap-4">
            <Link href="/chinh-sach" className="hover:text-white transition-colors">Chính sách bảo mật</Link>
            <Link href="/chinh-sach" className="hover:text-white transition-colors">Điều khoản sử dụng</Link>
            <Link href="/bang-gia" className="hover:text-white transition-colors">Bảng giá</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
