import type { Metadata } from "next";
import "./globals.css";
import ConditionalLayout from "@/components/ConditionalLayout";
import { DEALER_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: {
    default: `${DEALER_INFO.name} – Đại lý xe điện VinFast chính hãng tại Long An`,
    template: `%s | ${DEALER_INFO.name}`,
  },
  description:
    "Đại lý xe điện VinFast chính hãng tại Long An. Trưng bày đầy đủ các dòng xe VF3, VF5, VF6, VF7, VF8, VF9. Đặt lịch lái thử miễn phí. Ưu đãi hấp dẫn mỗi tháng.",
  keywords: [
    "VinFast Long An",
    "đại lý VinFast Long An",
    "xe điện VinFast",
    "VF6",
    "VF8",
    "mua xe VinFast",
    "lái thử VinFast Long An",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: DEALER_INFO.name,
    title: `${DEALER_INFO.name} – Đại lý xe điện VinFast chính hãng`,
    description: "Đại lý xe điện VinFast chính hãng tại Long An với đầy đủ dòng xe và dịch vụ hậu mãi tốt nhất.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
