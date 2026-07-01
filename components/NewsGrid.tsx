"use client";
import Link from "next/link";
import type { News } from "@/lib/data";

export default function NewsGrid({ items }: { items: News[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <Link key={item.id} href={`/tin-tuc/${item.slug}`} className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="h-48 relative overflow-hidden bg-blue-50">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
            <span
              className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white"
              style={{ background: item.category === "khuyen-mai" ? "#E30613" : item.category === "su-kien" ? "#9333EA" : "var(--vf-blue)" }}
            >
              {item.categoryLabel}
            </span>
          </div>
          <div className="p-5">
            <p className="text-xs text-gray-400 mb-2">
              {new Date(item.date).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" })}
            </p>
            <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-blue-700 transition-colors mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 line-clamp-2">{item.excerpt}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
