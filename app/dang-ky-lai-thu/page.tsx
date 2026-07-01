import type { Metadata } from "next";
import DangKyLaiThuClient from "./DangKyLaiThuClient";

export const metadata: Metadata = {
  title: "Đăng ký lái thử – VinFast Long An",
  description: "Đăng ký lái thử xe VinFast miễn phí tại Long An. Trải nghiệm các dòng xe điện VF3, VF5, VF6, VF7, VF8, VF9.",
};

export default function DangKyLaiThuPage() {
  return <DangKyLaiThuClient />;
}
