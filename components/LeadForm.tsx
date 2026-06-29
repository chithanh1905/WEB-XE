"use client";
import { useState } from "react";

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  carName?: string;
  formType?: "test-drive" | "consult" | "general";
}

export default function LeadForm({
  title = "Đặt lịch lái thử",
  subtitle = "Nhận tư vấn & trải nghiệm xe miễn phí",
  carName = "",
  formType = "general",
}: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Netlify Forms handles submission automatically
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
    } catch {
      alert("Có lỗi xảy ra. Vui lòng thử lại hoặc gọi hotline của chúng tôi.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Đăng ký thành công!</h3>
        <p className="text-green-700">Chúng tôi sẽ liên hệ với bạn trong vòng <strong>30 phút</strong>. Cảm ơn bạn đã tin tưởng VinFast Long An.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{title}</h2>
      <p className="text-gray-500 text-sm mb-6">{subtitle}</p>

      <form
        name={formType}
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value={formType} />
        <input type="hidden" name="xe" value={carName} />
        <p className="hidden">
          <label>Không điền vào đây: <input name="bot-field" /></label>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="ho-ten">
              Họ và tên <span className="text-red-500">*</span>
            </label>
            <input
              id="ho-ten"
              name="ho-ten"
              type="text"
              required
              placeholder="Nguyễn Văn A"
              className="form-input"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="so-dien-thoai">
              Số điện thoại <span className="text-red-500">*</span>
            </label>
            <input
              id="so-dien-thoai"
              name="so-dien-thoai"
              type="tel"
              required
              placeholder="0901 234 567"
              pattern="[0-9]{10,11}"
              className="form-input"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="email@example.com"
            className="form-input"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="dong-xe">
            Dòng xe quan tâm
          </label>
          <select id="dong-xe" name="dong-xe" className="form-input" defaultValue={carName}>
            <option value="">-- Chọn dòng xe --</option>
            <option value="VF3">VinFast VF 3</option>
            <option value="VF5">VinFast VF 5</option>
            <option value="VF6">VinFast VF 6</option>
            <option value="VF7">VinFast VF 7</option>
            <option value="VF8">VinFast VF 8</option>
            <option value="VF9">VinFast VF 9</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="thoi-gian">
            Thời gian muốn đến
          </label>
          <select id="thoi-gian" name="thoi-gian" className="form-input">
            <option value="">-- Chọn thời gian --</option>
            <option>Sáng (7:30 - 12:00)</option>
            <option>Chiều (12:00 - 17:00)</option>
            <option>Tối (17:00 - 21:00)</option>
            <option>Cuối tuần</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="ghi-chu">
            Ghi chú
          </label>
          <textarea
            id="ghi-chu"
            name="ghi-chu"
            rows={3}
            placeholder="Câu hỏi hoặc yêu cầu đặc biệt..."
            className="form-input resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-red w-full justify-center py-3.5 text-base"
        >
          {loading ? (
            <>
              <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
              Đang gửi...
            </>
          ) : (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              Đăng ký ngay – Hoàn toàn miễn phí
            </>
          )}
        </button>

        <p className="text-xs text-gray-400 text-center">
          Thông tin của bạn được bảo mật tuyệt đối. Chúng tôi cam kết không chia sẻ với bên thứ ba.
        </p>
      </form>
    </div>
  );
}
