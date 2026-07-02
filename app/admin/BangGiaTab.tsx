"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { CARS } from "@/lib/data";

interface XeConfig {
  id: string;
  ten?: string;
  gia: string;
}

export default function BangGiaTab() {
  const [configs, setConfigs] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [saved, setSaved] = useState<string | null>(null);

  useEffect(() => {
    supabase.from("xe_config").select("id,gia").then(({ data }) => {
      if (data) {
        const map: Record<string, string> = {};
        data.forEach((r: XeConfig) => { if (r.gia) map[r.id] = r.gia; });
        setConfigs(map);
      }
      setLoading(false);
    });
  }, []);

  const saveGia = async (carId: string, carName: string, gia: string) => {
    setSaving(carId);
    await supabase.from("xe_config").upsert({ id: carId, ten: carName, gia }, { onConflict: "id" });
    setConfigs((prev) => ({ ...prev, [carId]: gia }));
    setSaving(null);
    setSaved(carId);
    setTimeout(() => setSaved(null), 2000);
  };

  if (loading) return <div className="py-20 text-center text-gray-400">Đang tải...</div>;

  return (
    <div className="space-y-3">
      <p className="text-sm text-gray-500 mb-4">Chỉnh sửa giá hiển thị trên website. Để trống = dùng giá mặc định.</p>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase w-10">#</th>
              <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase">Tên xe</th>
              <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase">Giá hiển thị</th>
              <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase w-28"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {CARS.map((car, i) => {
              const gia = configs[car.id] ?? car.price;
              return (
                <tr key={car.id} className="hover:bg-blue-50/20">
                  <td className="px-4 py-3 text-gray-400 text-xs">{i + 1}</td>
                  <td className="px-4 py-3 font-semibold text-gray-900">{car.name}</td>
                  <td className="px-4 py-3">
                    <input
                      className="border border-gray-200 rounded px-3 py-1.5 text-sm w-full focus:outline-none focus:border-blue-400"
                      defaultValue={gia}
                      onBlur={(e) => {
                        if (e.target.value !== gia) saveGia(car.id, car.name, e.target.value);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") saveGia(car.id, car.name, (e.target as HTMLInputElement).value);
                      }}
                    />
                  </td>
                  <td className="px-4 py-3 text-center">
                    {saving === car.id && <span className="text-xs text-gray-400">Đang lưu...</span>}
                    {saved === car.id && <span className="text-xs text-green-600 font-semibold">✓ Đã lưu</span>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
