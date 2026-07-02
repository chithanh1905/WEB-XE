"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface Banner {
  id: number;
  anh_url: string;
  thu_tu: number;
  active: boolean;
}

export default function BannerTab() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

  const fetchBanners = async () => {
    const { data } = await supabase.from("banner_config").select("*").order("thu_tu");
    if (data) setBanners(data);
  };

  useEffect(() => { fetchBanners(); }, []);

  const handleUpload = async (file: File) => {
    setUploading(true);
    setError(null);
    try {
      const ext = file.name.split(".").pop();
      const path = `banner/banner-${Date.now()}.${ext}`;
      const { error: upErr } = await supabase.storage.from("images").upload(path, file, { upsert: true });
      if (upErr) throw upErr;

      const { data: urlData } = supabase.storage.from("images").getPublicUrl(path);
      const maxThu = banners.length > 0 ? Math.max(...banners.map((b) => b.thu_tu)) + 1 : 0;

      await supabase.from("banner_config").insert({ anh_url: urlData.publicUrl, thu_tu: maxThu, active: true });
      setMsg("✓ Đã thêm banner");
      setTimeout(() => setMsg(null), 2000);
      fetchBanners();
    } catch (e: unknown) {
      setError("Lỗi upload: " + (e instanceof Error ? e.message : String(e)));
    } finally {
      setUploading(false);
    }
  };

  const toggleActive = async (id: number, active: boolean) => {
    await supabase.from("banner_config").update({ active: !active }).eq("id", id);
    setBanners((prev) => prev.map((b) => b.id === id ? { ...b, active: !active } : b));
  };

  const deleteBanner = async (id: number) => {
    if (!confirm("Xoá banner này?")) return;
    await supabase.from("banner_config").delete().eq("id", id);
    setBanners((prev) => prev.filter((b) => b.id !== id));
  };

  const moveUp = async (idx: number) => {
    if (idx === 0) return;
    const a = banners[idx], b = banners[idx - 1];
    await supabase.from("banner_config").update({ thu_tu: b.thu_tu }).eq("id", a.id);
    await supabase.from("banner_config").update({ thu_tu: a.thu_tu }).eq("id", b.id);
    fetchBanners();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">Quản lý ảnh banner trang chủ. Banner active sẽ hiển thị trên website.</p>
        <label className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold cursor-pointer transition-colors ${uploading ? "bg-gray-100 text-gray-400" : "text-white"}`}
          style={uploading ? {} : { background: "var(--vf-blue)" }}>
          {uploading ? (
            <>
              <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/></svg>
              Đang upload...
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
              + Thêm banner
            </>
          )}
          <input type="file" accept="image/*,image/svg+xml" className="hidden" disabled={uploading}
            onChange={(e) => { const f = e.target.files?.[0]; if (f) handleUpload(f); }} />
        </label>
      </div>

      {error && <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-600">{error}</div>}
      {msg && <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm text-green-600">{msg}</div>}

      {banners.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm py-16 text-center text-gray-400">
          <p className="text-3xl mb-2">🖼️</p>
          <p>Chưa có banner nào. Upload ảnh để bắt đầu.</p>
          <p className="text-xs mt-1">Ảnh đang dùng: /banner1.svg (mặc định)</p>
        </div>
      ) : (
        <div className="space-y-3">
          {banners.map((banner, idx) => (
            <div key={banner.id} className={`bg-white rounded-xl border shadow-sm overflow-hidden flex items-center gap-4 p-3 ${banner.active ? "border-blue-200" : "border-gray-100 opacity-60"}`}>
              {/* Ảnh preview */}
              <div className="w-40 h-24 bg-gray-50 rounded-lg overflow-hidden shrink-0">
                <img src={banner.anh_url} alt="Banner" className="w-full h-full object-cover" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-400 truncate mb-1">{banner.anh_url.split("/").pop()}</p>
                <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${banner.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                  {banner.active ? "Đang hiển thị" : "Đã ẩn"}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => moveUp(idx)} disabled={idx === 0}
                  className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-30" title="Lên trên">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6"/></svg>
                </button>
                <button onClick={() => toggleActive(banner.id, banner.active)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${banner.active ? "border-orange-300 text-orange-600 hover:bg-orange-50" : "border-green-300 text-green-600 hover:bg-green-50"}`}>
                  {banner.active ? "Ẩn" : "Hiện"}
                </button>
                <button onClick={() => deleteBanner(banner.id)}
                  className="p-2 rounded-lg border border-red-200 text-red-500 hover:bg-red-50" title="Xoá">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
