import Link from "next/link";
import { NEWS, DEALER_INFO } from "@/lib/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const news = NEWS.find((n) => n.slug === slug);
  if (!news) notFound();

  return (
    <>
      <div className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-sm text-gray-400 mb-2">
            <Link href="/tin-tuc" className="hover:text-white">Tin tức</Link> / {news.categoryLabel}
          </div>
          <span className="text-xs font-bold px-2.5 py-1 rounded-full text-white inline-block mb-3"
            style={{ background: news.category === "khuyen-mai" ? "#E30613" : news.category === "su-kien" ? "#9333EA" : "rgba(255,255,255,0.2)" }}>
            {news.categoryLabel}
          </span>
          <h1 className="text-2xl md:text-3xl font-black leading-tight">{news.title}</h1>
          <p className="text-white/70 mt-2 text-sm">{new Date(news.date).toLocaleDateString("vi-VN", { weekday: "long", day: "2-digit", month: "long", year: "numeric" })}</p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-10">
        {news.image && (
          <div className="rounded-xl overflow-hidden mb-8">
            <img src={news.image} alt={news.title} className="w-full object-cover max-h-96" />
          </div>
        )}
        <div className="bg-blue-50 rounded-xl p-6 mb-8 border-l-4 border-blue-600">
          <p className="text-gray-700 text-base leading-relaxed font-medium">{news.excerpt}</p>
        </div>
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>{news.excerpt}</p>
          <p>Để biết thêm thông tin chi tiết, vui lòng liên hệ trực tiếp với chúng tôi qua hotline hoặc đến trực tiếp showroom VinFast Long An để được tư vấn tận tình.</p>
        </div>

        <div className="mt-10 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="font-bold text-gray-900 mb-2">Liên hệ để biết thêm chi tiết</h3>
          <p className="text-gray-600 text-sm mb-3">Đội ngũ tư vấn của chúng tôi luôn sẵn sàng hỗ trợ bạn 7 ngày trong tuần.</p>
          <div className="flex flex-wrap gap-3">
            <a href={DEALER_INFO.hotlineLink} className="btn-primary text-sm py-2">Gọi ngay: {DEALER_INFO.hotline}</a>
            <Link href="/lien-he" className="btn-outline text-sm py-2">Đặt lịch tư vấn</Link>
          </div>
        </div>
      </article>

      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title mb-6">Tin tức khác</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NEWS.filter((n) => n.slug !== slug).slice(0, 3).map((item) => (
              <Link key={item.id} href={`/tin-tuc/${item.slug}`} className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 overflow-hidden bg-blue-50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-sm line-clamp-2 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
