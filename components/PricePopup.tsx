"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

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

export default function PricePopup() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", address: "", car: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setLoading(true);
    await supabase.from("khach_hang_tiem_nang").insert([{
      ho_ten: form.name,
      so_dien_thoai: form.phone,
      dia_chi: form.address || null,
      xe_quan_tam: form.car || null,
    }]);
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.55)" }}>
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="px-6 pt-8 pb-4 text-center" style={{ background: "#fff" }}>
          <h2 className="text-2xl font-black uppercase" style={{ color: "var(--vf-blue)" }}>
            Đăng ký nhận thông tin
          </h2>
          <p className="text-gray-600 text-sm mt-2">Đăng ký nhận thông tin báo giá và khuyến mãi</p>
        </div>

        {/* Body */}
        <div className="px-6 pb-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <p className="font-bold text-lg text-gray-800">Đăng ký thành công!</p>
              <p className="text-gray-500 text-sm mt-1">Chúng tôi sẽ liên hệ bạn trong vòng 30 phút.</p>
              <button
                onClick={() => setShow(false)}
                className="mt-6 px-8 py-2 rounded border font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
              >
                Đóng lại
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 mt-2">
              <input
                type="text"
                placeholder="HỌ TÊN (*)"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-500 uppercase placeholder:normal-case"
              />
              <input
                type="tel"
                placeholder="ĐIỆN THOẠI (*)"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-500 uppercase placeholder:normal-case"
              />
              <input
                type="text"
                placeholder="ĐỊA CHỈ"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-500 uppercase placeholder:normal-case"
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
                <span className="font-semibold not-italic">Chính sách bảo mật</span>, đồng thời cho phép chúng tôi liên hệ tư vấn.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 font-bold text-sm tracking-widest border-2 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors disabled:opacity-60"
                style={{ borderColor: "var(--vf-blue)", color: "var(--vf-blue)" }}
              >
                {loading ? "Đang gửi..." : "GỬI NGAY"}
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setShow(false)}
                  className="text-sm underline text-gray-600 hover:text-gray-800"
                >
                  Đóng lại
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
