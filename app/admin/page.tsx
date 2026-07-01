"use client";
import { useState, useCallback } from "react";

interface KhachHang {
  ho_ten: string;
  so_dien_thoai: string;
  dia_chi?: string;
  xe_quan_tam?: string;
  ghi_chu?: string;
  created_at?: string;
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pass, setPass] = useState("");
  const [passError, setPassError] = useState(false);

  const [data, setData] = useState<KhachHang[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filterXe, setFilterXe] = useState("");

  const fetchData = useCallback(async (password: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) return false;
      const json = await res.json();
      setData(json.data || []);
      return true;
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async () => {
    const ok = await fetchData(pass);
    if (ok) {
      setAuthed(true);
      setPassError(false);
    } else {
      setPassError(true);
    }
  };

  const filtered = data.filter((r) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      r.ho_ten?.toLowerCase().includes(q) ||
      r.so_dien_thoai?.includes(q) ||
      r.dia_chi?.toLowerCase().includes(q);
    const matchXe = !filterXe || r.xe_quan_tam === filterXe;
    return matchSearch && matchXe;
  });

  const xeList = Array.from(new Set(data.map((r) => r.xe_quan_tam).filter(Boolean)));

  const exportCSV = () => {
    const header = ["Họ tên", "SĐT", "Địa chỉ", "Xe quan tâm", "Ghi chú", "Thời gian"];
    const rows = filtered.map((r) => [
      r.ho_ten,
      r.so_dien_thoai,
      r.dia_chi || "",
      r.xe_quan_tam || "",
      r.ghi_chu || "",
      r.created_at ? new Date(r.created_at).toLocaleString("vi-VN") : "",
    ]);
    const csv = [header, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `khach-hang-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  // --- LOGIN SCREEN ---
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
          <div className="text-center mb-6">
            <div className="w-14 h-14 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ background: "var(--vf-blue)" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
            </div>
            <h1 className="text-xl font-black text-gray-900">Admin VinFast Long An</h1>
            <p className="text-gray-500 text-sm mt-1">Quản lý khách hàng tiềm năng</p>
          </div>

          <div className="space-y-3">
            <input
              type="password"
              placeholder="Nhập mật khẩu..."
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && login()}
              className={`form-input w-full ${passError ? "border-red-400" : ""}`}
            />
            {passError && <p className="text-red-500 text-sm">Mật khẩu không đúng</p>}
            <button
              onClick={login}
              className="w-full py-3 rounded-xl text-white font-bold text-base"
              style={{ background: "var(--vf-blue)" }}
            >
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- DASHBOARD ---
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "var(--vf-blue)" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
          </div>
          <div>
            <h1 className="font-black text-gray-900 text-base">Quản lý khách hàng</h1>
            <p className="text-gray-400 text-xs">VinFast Long An 3S</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => fetchData(pass)} className="text-sm px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center gap-1.5 font-semibold text-gray-600">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>
            Làm mới
          </button>
          <button onClick={exportCSV} className="text-sm px-3 py-2 rounded-lg text-white font-semibold flex items-center gap-1.5" style={{ background: "var(--vf-blue)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            Xuất Excel
          </button>
          <button onClick={() => { setAuthed(false); setPass(""); setData([]); }} className="text-sm px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-500 font-semibold">
            Đăng xuất
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Tổng khách hàng", value: data.length, color: "var(--vf-blue)" },
            { label: "Hôm nay", value: data.filter((r) => r.created_at && new Date(r.created_at).toDateString() === new Date().toDateString()).length, color: "#16A34A" },
            { label: "Tuần này", value: data.filter((r) => { if (!r.created_at) return false; const d = new Date(r.created_at); const now = new Date(); const diff = (now.getTime() - d.getTime()) / 86400000; return diff <= 7; }).length, color: "#9333EA" },
            { label: "Dòng xe phổ biến", value: xeList[0] || "—", color: "#E30613" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">{s.label}</p>
              <p className="text-2xl font-black" style={{ color: s.color }}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex gap-3 mb-4 flex-wrap">
          <input
            type="text"
            placeholder="Tìm tên, SĐT, địa chỉ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-input flex-1 min-w-[200px] text-sm"
          />
          <select
            value={filterXe}
            onChange={(e) => setFilterXe(e.target.value)}
            className="form-input text-sm min-w-[160px]"
          >
            <option value="">Tất cả dòng xe</option>
            {xeList.map((xe) => <option key={xe} value={xe}>{xe}</option>)}
          </select>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          {loading ? (
            <div className="py-20 text-center text-gray-400">
              <svg className="animate-spin mx-auto mb-3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/></svg>
              Đang tải...
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-20 text-center text-gray-400">
              <p className="text-4xl mb-3">📋</p>
              <p>Chưa có khách hàng nào</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide">#</th>
                    <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide">Họ tên</th>
                    <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide">Số điện thoại</th>
                    <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide">Địa chỉ</th>
                    <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide">Xe quan tâm</th>
                    <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide">Ghi chú</th>
                    <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide">Thời gian</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filtered.map((r, i) => (
                    <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                      <td className="px-4 py-3 text-gray-400 text-xs">{data.length - i}</td>
                      <td className="px-4 py-3 font-semibold text-gray-900">{r.ho_ten}</td>
                      <td className="px-4 py-3">
                        <a href={`tel:${r.so_dien_thoai}`} className="font-mono text-blue-600 hover:underline font-semibold">{r.so_dien_thoai}</a>
                      </td>
                      <td className="px-4 py-3 text-gray-600 max-w-[160px] truncate">{r.dia_chi || <span className="text-gray-300">—</span>}</td>
                      <td className="px-4 py-3">
                        {r.xe_quan_tam ? (
                          <span className="px-2 py-0.5 rounded-full text-xs font-bold text-white" style={{ background: "var(--vf-blue)" }}>{r.xe_quan_tam}</span>
                        ) : <span className="text-gray-300">—</span>}
                      </td>
                      <td className="px-4 py-3 text-gray-500 max-w-[180px] truncate">{r.ghi_chu || <span className="text-gray-300">—</span>}</td>
                      <td className="px-4 py-3 text-gray-400 text-xs whitespace-nowrap">
                        {r.created_at ? new Date(r.created_at).toLocaleString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" }) : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="px-4 py-3 border-t border-gray-100 text-xs text-gray-400">
                Hiển thị {filtered.length} / {data.length} khách hàng
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
