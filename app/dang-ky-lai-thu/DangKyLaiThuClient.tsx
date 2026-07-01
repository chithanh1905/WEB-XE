"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { DEALER_INFO } from "@/lib/data";

const CAR_OPTIONS = [
  "VinFast VF 3",
  "VinFast VF 5",
  "VinFast VF 6",
  "VinFast VF 7",
  "VinFast VF 8",
  "VinFast VF 9",
  "EC Van",
  "Minio Green",
  "Herio Green",
  "Limo Green",
  "VF MPV 7",
];

const INPUT = "w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-500 uppercase placeholder:normal-case";

export default function DangKyLaiThuClient() {
  const [form, setForm] = useState({ name: "", phone: "", address: "", car: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setLoading(true);
    await supabase.from("khach_hang_tiem_nang").insert([{
      ho_ten: form.name,
      so_dien_thoai: form.phone,
      dia_chi: form.address || null,
      xe_quan_tam: form.car || null,
      ghi_chu: "Đăng ký lái thử",
    }]);
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">

        {/* Header */}
        <div className="px-6 pt-8 pb-4 text-center">
          <img
            src="/logo-vinfast-vfg.png"
            alt="VinFast Long An"
            className="h-16 w-auto object-contain mx-auto mb-4"
          />
          <h2 className="text-2xl font-black uppercase" style={{ color: "var(--vf-blue)" }}>
            Đăng ký lái thử
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Điền thông tin bên dưới, chúng tôi sẽ liên hệ xác nhận lịch trong vòng 30 phút
          </p>
        </div>

        {/* Body */}
        <div className="px-6 pb-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <p className="font-bold text-lg text-gray-800">Đăng ký thành công!</p>
              <p className="text-gray-500 text-sm mt-1">Chúng tôi sẽ liên hệ bạn trong vòng 30 phút.</p>
              <a
                href="/"
                className="mt-6 inline-block px-8 py-2 rounded border font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
              >
                Về trang chủ
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 mt-2">
              <input
                type="text"
                placeholder="HỌ TÊN (*)"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={INPUT}
              />
              <input
                type="tel"
                placeholder="ĐIỆN THOẠI (*)"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={INPUT}
              />
              <input
                type="text"
                placeholder="ĐỊA CHỈ"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className={INPUT}
              />
              <select
                value={form.car}
                onChange={(e) => setForm({ ...form, car: e.target.value })}
                className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-500 text-gray-500"
              >
                <option value="">CHỌN DÒNG XE QUAN TÂM</option>
                {CAR_OPTIONS.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>

              <p className="text-xs text-gray-500 italic text-center">
                Bằng việc gửi biểu mẫu này, bạn xác nhận đã đọc và đồng ý với{" "}
                <a href="/chinh-sach" className="font-semibold not-italic text-blue-700 hover:underline">
                  Chính sách bảo mật
                </a>
                , đồng thời cho phép chúng tôi liên hệ tư vấn.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 font-bold text-sm tracking-widest border-2 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors disabled:opacity-60"
                style={{ borderColor: "var(--vf-blue)", color: "var(--vf-blue)" }}
              >
                {loading ? "Đang gửi..." : "GỬI NGAY"}
              </button>

              <p className="text-center text-sm text-gray-600 pt-1">
                Hotline:{" "}
                <a href={DEALER_INFO.hotlineLink} className="font-bold text-blue-700 hover:underline">
                  {DEALER_INFO.hotline}
                </a>
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
