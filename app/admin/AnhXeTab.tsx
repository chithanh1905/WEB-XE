"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { CARS } from "@/lib/data";

export default function AnhXeTab() {
  const [anhMap, setAnhMap] = useState<Record<string, string>>({});
  const [uploading, setUploading] = useState<string | null>(null);
  const [saved, setSaved] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    supabase.from("xe_config").select("id,anh_xe").then(({ data }) => {
      if (data) {
        const map: Record<string, string> = {};
        data.forEach((r: { id: string; anh_xe: string }) => { if (r.anh_xe) map[r.id] = r.anh_xe; });
        setAnhMap(map);
      }
    });
  }, []);

  const handleUpload = async (carId: string, carName: string, file: File) => {
    setUploading(carId);
    setError(null);
    try {
      const ext = file.name.split(".").pop();
      const path = `xe/${carId}-${Date.now()}.${ext}`;
      const { error: upErr } = await supabase.storage.from("images").upload(path, file, { upsert: true });
      if (upErr) throw upErr;

      const { data: urlData } = supabase.storage.from("images").getPublicUrl(path);
      const publicUrl = urlData.publicUrl;

      await supabase.from("xe_config").upsert({ id: carId, ten: carName, anh_xe: publicUrl }, { onConflict: "id" });
      setAnhMap((prev) => ({ ...prev, [carId]: publicUrl }));
      setSaved(carId);
      setTimeout(() => setSaved(null), 2000);
    } catch (e: unknown) {
      setError("Lỗi upload: " + (e instanceof Error ? e.message : String(e)));
    } finally {
      setUploading(null);
    }
  };

  return (
    <div className="space-y-3">
      <p className="text-sm text-gray-500 mb-4">Upload ảnh xe mới. Ảnh sẽ thay thế ảnh mặc định trên website.</p>
      {error && <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-600">{error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {CARS.map((car) => {
          const currentImg = anhMap[car.id] || car.image;
          return (
            <div key={car.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              {/* Ảnh hiện tại */}
              <div className="bg-gray-50 aspect-[4/3] flex items-center justify-center overflow-hidden">
                <img src={currentImg} alt={car.name} className="w-full h-full object-contain p-2" />
              </div>
              <div className="p-3">
                <p className="font-bold text-sm text-gray-900 mb-2">{car.name}</p>
                {anhMap[car.id] && (
                  <p className="text-xs text-green-600 mb-2">✓ Đã dùng ảnh tuỳ chỉnh</p>
                )}
                <label className={`flex items-center justify-center gap-2 w-full py-2 rounded-lg text-xs font-bold cursor-pointer transition-colors ${uploading === car.id ? "bg-gray-100 text-gray-400" : "bg-blue-50 text-blue-700 hover:bg-blue-100"}`}>
                  {uploading === car.id ? (
                    <>
                      <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/></svg>
                      Đang upload...
                    </>
                  ) : saved === car.id ? (
                    <span className="text-green-600">✓ Đã cập nhật</span>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
                      Chọn ảnh mới
                    </>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    disabled={uploading !== null}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleUpload(car.id, car.name, file);
                    }}
                  />
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
