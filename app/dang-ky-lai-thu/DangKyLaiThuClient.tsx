"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { DEALER_INFO } from "@/lib/data";

const MODELS = [
  "VinFast VF 3",
  "VinFast VF 5",
  "VinFast VF 6",
  "VinFast VF 7",
  "VinFast VF 8",
  "VinFast VF 9",
  "VinFast EC Van",
  "VinFast Minio Green",
  "VinFast Herio Green",
  "VinFast Limo Green",
  "VinFast VF MPV 7",
];

export default function DangKyLaiThuClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      ho_ten: data.get("ho-ten") as string,
      so_dien_thoai: data.get("so-dien-thoai") as string,
      email: (data.get("email") as string) || null,
      dia_chi: (data.get("dia-chi") as string) || null,
      xe_quan_tam: (data.get("dong-xe") as string) || null,
      ghi_chu: (data.get("ghi-chu") as string) || null,
    };

    try {
      const { error: sbError } = await supabase
        .from("khach_hang_tiem_nang")
        .insert([payload]);
      if (sbError) throw sbError;
      setSubmitted(true);
    } catch (err: unknown) {
      console.error(err);
      setError("Có lỗi xảy ra. Vui lòng thử lại hoặc gọi hotline của chúng tôi.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h2 className="text-2xl font-black text-green-800 mb-3">Đăng ký thành công!</h2>
          <p className="text-gray-600 mb-6">
            Chúng tôi sẽ liên hệ xác nhận lịch lái thử trong vòng <strong>30 phút</strong>.<br />
            Cảm ơn bạn đã tin tưởng <strong>VinFast Long An</strong>!
          </p>
          <a href="/" className="btn-primary justify-center">Về trang chủ</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Cột trái — logo + thông tin */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6">
            <img
              src="/logo-vinfast-vfg.png"
              alt="VinFast Long An"
              className="h-32 w-auto object-contain"
            />
            <div className="text-center lg:text-left space-y-3">
              <div className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="#005BAC">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <p className="text-sm text-gray-700">{DEALER_INFO.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="#005BAC">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <a href={DEALER_INFO.hotlineLink} className="text-sm font-bold text-blue-700 hover:underline">
                  HOTLINE: {DEALER_INFO.hotline}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="#005BAC">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                </svg>
                <p className="text-sm text-gray-700">{DEALER_INFO.workingHours}</p>
              </div>
            </div>
          </div>

          {/* Cột phải — form */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-2">
              Đăng ký lái thử
            </h1>
            <p className="text-center text-gray-500 text-sm mb-6">
              Điền vào mẫu dưới đây và gửi yêu cầu của bạn. Chúng tôi sẽ liên hệ
              với bạn để xác nhận ngày và thời gian đăng ký lái thử của bạn.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Mẫu xe */}
              <div>
                <label className="block text-xs font-bold text-blue-700 uppercase tracking-widest mb-1.5">
                  LỰA CHỌN MẪU XE
                </label>
                <select name="dong-xe" className="form-input" required>
                  <option value="">Mẫu xe (*)</option>
                  {MODELS.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              {/* Địa điểm */}
              <div>
                <label className="block text-xs font-bold text-blue-700 uppercase tracking-widest mb-1.5">
                  LỰA CHỌN ĐỊA ĐIỂM
                </label>
                <input
                  name="dia-chi"
                  type="text"
                  placeholder="Địa chỉ"
                  className="form-input"
                />
              </div>

              {/* Thông tin khách hàng */}
              <div>
                <label className="block text-xs font-bold text-blue-700 uppercase tracking-widest mb-1.5">
                  THÔNG TIN KHÁCH HÀNG
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <input
                    name="ho-ten"
                    type="text"
                    required
                    placeholder="Họ tên (*)"
                    className="form-input"
                  />
                  <input
                    name="so-dien-thoai"
                    type="tel"
                    required
                    placeholder="Điện thoại (*)"
                    pattern="[0-9]{10,11}"
                    className="form-input"
                  />
                </div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="form-input w-full"
                />
              </div>

              {/* Yêu cầu khác */}
              <div>
                <label className="block text-xs font-bold text-blue-700 uppercase tracking-widest mb-1.5">
                  YÊU CẦU KHÁC
                </label>
                <textarea
                  name="ghi-chu"
                  rows={3}
                  placeholder="Ghi yêu cầu của Quý khách tại đây"
                  className="form-input resize-none w-full"
                />
              </div>

              {/* Chính sách */}
              <p className="text-xs text-gray-500">
                Bằng việc gửi biểu mẫu này, bạn xác nhận đã đọc và đồng ý với{" "}
                <a href="/chinh-sach" className="text-blue-700 font-semibold hover:underline">
                  Chính sách bảo mật
                </a>
                , đồng thời cho phép chúng tôi liên hệ tư vấn.
              </p>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-lg text-white font-bold text-base tracking-wider transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ background: "var(--vf-blue)" }}
              >
                {loading ? "ĐANG GỬI..." : "ĐĂNG KÝ LÁI THỬ"}
              </button>

              <p className="text-center text-sm text-gray-600">
                Mọi thắc mắc xin liên hệ HOTLINE :{" "}
                <a href={DEALER_INFO.hotlineLink} className="text-blue-700 font-bold hover:underline">
                  {DEALER_INFO.hotline}
                </a>
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
