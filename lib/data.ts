const BASE = "https://vinfastlongan3s.com/OTO3602500656/files";

export const DEALER_INFO = {
  name: "Showroom VinFast VFG Long An",
  shortName: "VinFast VFG Long An",
  address: "1163 QL1A, Khu phố Nhơn Cầu, P. Khánh Hậu, Tỉnh Tây Ninh (Long An cũ)",
  phone: "0946 999 286",
  phoneLink: "tel:1900232389",
  email: "phamtuvinfast@gmail.com",
  hotline: "0946 999 286",
  hotlineLink: "tel:0946999286",
  workingHours: "7:30 - 18:00 (Tất cả các ngày trong tuần)",
  facebook: "https://www.facebook.com/profile.php?id=61564536244947",
  youtube: "https://youtube.com/vinfastlongan",
  zalo: "https://zalo.me/0946999286",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.5!2d106.3693356!3d10.4894942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310ab70015d63aef%3A0x78894daa5b75fc56!2sShowroom%20VinFast%20VFG%20Long%20An!5e0!3m2!1svi!2svn!4v1751183400000",
  googleMapsUrl: "https://www.google.com/maps/place/Showroom+VinFast+VFG+Long+An/@10.4894942,106.3693356,17z",
};

export type CarCategory = "o-to-dien" | "xe-dich-vu";

export interface CarVersion {
  name: string;
  price: number;
  discountPrice: number;
  discountNote: string;
}

export interface CarColor {
  name: string;
  image: string;
}

export interface Car {
  id: string;
  slug: string;
  name: string;
  category: "suv" | "sedan" | "hatchback" | "electric" | "mpv";
  group: CarCategory;
  tagline: string;
  price: string;
  priceFrom: number;
  heroImage: string;
  image: string;
  images: string[];
  gallery: string[];
  specImages: string[];
  colorOptions: CarColor[];
  colors: { name: string; hex: string; image: string }[];
  specs: { label: string; value: string }[];
  highlights: string[];
  promotions: string[];
  versions: CarVersion[];
  description: string;
  isNew?: boolean;
  isElectric?: boolean;
  badge?: string;
}

export const CARS: Car[] = [
  {
    id: "vf3",
    slug: "vf3",
    name: "VinFast VF 3",
    category: "hatchback",
    group: "o-to-dien",
    tagline: "Xe điện mini – Đô thị thông minh",
    price: "Từ 299.000.000 đ",
    priceFrom: 299000000,
    heroImage: `${BASE}/san_pham/vf3_do_xanh_1920px.webp`,
    image: `${BASE}/san_pham/ICON/VF3.webp`,
    images: [`${BASE}/san_pham/vf3_do_xanh_1920px.webp`],
    gallery: Array.from({ length: 11 }, (_, i) =>
      `${BASE}/san_pham/VF3/${i === 0 ? "00_1" : String(i + 1).padStart(2, "0")}.webp`
    ),
    specImages: [
      `${BASE}/san_pham/VF3/09.webp`,
      `${BASE}/san_pham/VF3/10.webp`,
      `${BASE}/san_pham/VF3/11.webp`,
    ],
    colorOptions: [
      { name: "Đỏ Ruby", image: `${BASE}/san_pham/VF3/mau_xe/00_do.webp` },
      { name: "Trắng Tinh Khôi", image: `${BASE}/san_pham/VF3/mau_xe/00_trang.webp` },
      { name: "Xám Graphite", image: `${BASE}/san_pham/VF3/mau_xe/00_xam.webp` },
      { name: "Hồng Phấn", image: `${BASE}/san_pham/VF3/mau_xe/01_hong_phan.webp` },
      { name: "Vàng Mật Ong", image: `${BASE}/san_pham/VF3/mau_xe/01_vang.webp` },
      { name: "Xanh Dương Nhạt", image: `${BASE}/san_pham/VF3/mau_xe/01_xanh_duong_nhat.webp` },
      { name: "Xanh Lá Nhạt", image: `${BASE}/san_pham/VF3/mau_xe/01_xanh_la_nhat.webp` },
    ],
    colors: [
      { name: "Đỏ Ruby", hex: "#C0392B", image: `${BASE}/san_pham/VF3/mau_xe/00_do.webp` },
      { name: "Trắng Tinh Khôi", hex: "#F5F5F0", image: `${BASE}/san_pham/VF3/mau_xe/00_trang.webp` },
      { name: "Xám Graphite", hex: "#6B7280", image: `${BASE}/san_pham/VF3/mau_xe/00_xam.webp` },
      { name: "Hồng Phấn", hex: "#F9A8D4", image: `${BASE}/san_pham/VF3/mau_xe/01_hong_phan.webp` },
      { name: "Vàng Mật Ong", hex: "#F5C518", image: `${BASE}/san_pham/VF3/mau_xe/01_vang.webp` },
      { name: "Xanh Dương Nhạt", hex: "#93C5FD", image: `${BASE}/san_pham/VF3/mau_xe/01_xanh_duong_nhat.webp` },
      { name: "Xanh Lá Nhạt", hex: "#86EFAC", image: `${BASE}/san_pham/VF3/mau_xe/01_xanh_la_nhat.webp` },
    ],
    specs: [
      { label: "Quãng đường (NEDC)", value: "215 km/lần sạc đầy" },
      { label: "Công suất tối đa", value: "42 mã lực" },
      { label: "Mô men xoắn", value: "110 Nm" },
      { label: "Tốc độ tối đa", value: "110 km/h" },
      { label: "Tăng tốc 0-100 km/h", value: "< 12 giây" },
      { label: "Dung lượng pin", value: "19,6 kWh" },
      { label: "Tiêu thụ điện", value: "10 kWh/100 km" },
      { label: "Số chỗ ngồi", value: "4 chỗ" },
      { label: "La-zăng", value: "14 inch" },
      { label: "Sạc nhanh DC", value: "30 kW" },
    ],
    highlights: [
      "Xe điện mini thân thiện môi trường",
      "Chi phí vận hành siêu tiết kiệm chỉ 10 kWh/100 km",
      "Dễ đỗ xe trong đô thị với kích thước nhỏ gọn",
      "Kết nối thông minh, màn hình cảm ứng hiện đại",
    ],
    promotions: [
      "Giảm 6% giá xe đến 31/12/2026",
      "Miễn phí sạc pin đến 10/02/2029",
      "Miễn 100% lệ phí trước bạ",
      "Mua xe 0 Đồng (theo điều kiện áp dụng)",
      "Tặng 2 năm bảo hiểm thân xe trị giá 15 triệu",
    ],
    versions: [
      { name: "VF 3 Plus", price: 299000000, discountPrice: 281060000, discountNote: "Giảm 6% đến 31/12/2026" },
    ],
    description: "VinFast VF 3 – chiếc xe điện mini với thiết kế trẻ trung, năng động. Lý tưởng cho việc di chuyển trong đô thị, tiết kiệm chi phí và bảo vệ môi trường.",
    isElectric: true,
    badge: "Mới",
    isNew: true,
  },
  {
    id: "vf5",
    slug: "vf5",
    name: "VinFast VF 5",
    category: "suv",
    group: "o-to-dien",
    tagline: "SUV điện đô thị – Phong cách hiện đại",
    price: "Từ 529.000.000 đ",
    priceFrom: 529000000,
    heroImage: `${BASE}/san_pham/vf5_vang_1920px.webp`,
    image: `${BASE}/san_pham/ICON/VF5.webp`,
    images: [`${BASE}/san_pham/vf5_vang_1920px.webp`],
    gallery: Array.from({ length: 15 }, (_, i) =>
      `${BASE}/san_pham/VF5/${String(i + 1).padStart(2, "0")}.webp`
    ),
    specImages: [
      `${BASE}/san_pham/VF5/13.webp`,
      `${BASE}/san_pham/VF5/14.webp`,
      `${BASE}/san_pham/VF5/15.webp`,
    ],
    colorOptions: [
      { name: "Trắng Tinh Khôi", image: `${BASE}/san_pham/VF5/mau_xe/111U.webp` },
      { name: "Vàng Mật Ong", image: `${BASE}/san_pham/VF5/mau_xe/181Y.webp` },
      { name: "Xanh Sapphire", image: `${BASE}/san_pham/VF5/mau_xe/CE18.webp` },
      { name: "Xám Titanium", image: `${BASE}/san_pham/VF5/mau_xe/CE1M.webp` },
      { name: "Đen Huyền Bí", image: `${BASE}/san_pham/VF5/mau_xe/CE1V.webp` },
      { name: "Đỏ Passion", image: `${BASE}/san_pham/VF5/mau_xe/CE1W.webp` },
    ],
    colors: [
      { name: "Trắng Tinh Khôi", hex: "#F5F5F0", image: `${BASE}/san_pham/VF5/mau_xe/111U.webp` },
      { name: "Vàng Mật Ong", hex: "#F5C518", image: `${BASE}/san_pham/VF5/mau_xe/181Y.webp` },
      { name: "Xanh Sapphire", hex: "#1A3A6B", image: `${BASE}/san_pham/VF5/mau_xe/CE18.webp` },
      { name: "Xám Titanium", hex: "#8E9EAB", image: `${BASE}/san_pham/VF5/mau_xe/CE1M.webp` },
      { name: "Đen Huyền Bí", hex: "#1A1A1A", image: `${BASE}/san_pham/VF5/mau_xe/CE1V.webp` },
      { name: "Đỏ Passion", hex: "#C0392B", image: `${BASE}/san_pham/VF5/mau_xe/CE1W.webp` },
    ],
    specs: [
      { label: "Quãng đường (NEDC)", value: "326,4 km/lần sạc đầy" },
      { label: "Công suất tối đa", value: "134 mã lực" },
      { label: "Mô men xoắn", value: "135 Nm" },
      { label: "Tốc độ tối đa", value: "130 km/h" },
      { label: "Tăng tốc 0-100 km/h", value: "< 11 giây" },
      { label: "Dung lượng pin", value: "37,23 kWh" },
      { label: "Tiêu thụ điện", value: "13 kWh/100 km" },
      { label: "Số chỗ ngồi", value: "5 chỗ" },
      { label: "La-zăng", value: "17 inch" },
      { label: "Sạc nhanh (10%-70%)", value: "33 phút" },
      { label: "Số túi khí", value: "6 túi" },
      { label: "Kích thước (D×R×C)", value: "3.967 × 1.723 × 1.579 mm" },
    ],
    highlights: [
      "Công nghệ lái hỗ trợ thông minh ADAS",
      "Phạm vi 326,4 km mỗi lần sạc đầy",
      "Sạc nhanh DC 50 kW – chỉ 33 phút 10%-70%",
      "6 túi khí, cảnh báo điểm mù, phanh khẩn cấp tự động",
    ],
    promotions: [
      "Giảm 6% giá xe đến 31/12/2026",
      "Tặng 2 năm bảo hiểm thân xe trị giá 15 triệu đồng",
      "Miễn phí sạc pin đến 10/02/2029",
      "Miễn 100% lệ phí trước bạ",
      "Mua xe 0 Đồng (theo điều kiện áp dụng đến 31/12/2026)",
      "Giảm thêm 5% cho Công an/Quân đội",
    ],
    versions: [
      { name: "VF 5 Plus", price: 529000000, discountPrice: 497260000, discountNote: "Giảm 6% đến 31/12/2026" },
    ],
    description: "VinFast VF 5 – SUV điện cỡ nhỏ với thiết kế hiện đại, nội thất thông minh. Phù hợp cho gia đình trẻ năng động tại đô thị.",
    isElectric: true,
  },
  {
    id: "vf6",
    slug: "vf6",
    name: "VinFast VF 6",
    category: "suv",
    group: "o-to-dien",
    tagline: "SUV điện B – Cân bằng hoàn hảo",
    price: "Từ 689.000.000 đ",
    priceFrom: 689000000,
    heroImage: `${BASE}/san_pham/vf6_do_xam_1920.webp`,
    image: `${BASE}/san_pham/ICON/VF6.webp`,
    images: [`${BASE}/san_pham/vf6_do_xam_1920.webp`],
    gallery: Array.from({ length: 16 }, (_, i) =>
      `${BASE}/san_pham/VF6/${String(i + 1).padStart(2, "0")}.webp`
    ),
    specImages: [
      `${BASE}/san_pham/VF6/14.webp`,
      `${BASE}/san_pham/VF6/15.webp`,
      `${BASE}/san_pham/VF6/16.webp`,
    ],
    colorOptions: [
      { name: "Trắng Bạch Ngọc", image: `${BASE}/san_pham/VF6/mau_xe/CE11.webp` },
      { name: "Xanh Sapphire", image: `${BASE}/san_pham/VF6/mau_xe/CE18.webp` },
      { name: "Xám Titanium", image: `${BASE}/san_pham/VF6/mau_xe/CE1M.webp` },
      { name: "Đen Huyền Bí", image: `${BASE}/san_pham/VF6/mau_xe/CE1V.webp` },
      { name: "Đỏ Passion", image: `${BASE}/san_pham/VF6/mau_xe/CE1W.webp` },
    ],
    colors: [
      { name: "Trắng Bạch Ngọc", hex: "#F0F0EC", image: `${BASE}/san_pham/VF6/mau_xe/CE11.webp` },
      { name: "Xanh Sapphire", hex: "#1A3A6B", image: `${BASE}/san_pham/VF6/mau_xe/CE18.webp` },
      { name: "Xám Titanium", hex: "#8E9EAB", image: `${BASE}/san_pham/VF6/mau_xe/CE1M.webp` },
      { name: "Đen Huyền Bí", hex: "#1A1A1A", image: `${BASE}/san_pham/VF6/mau_xe/CE1V.webp` },
      { name: "Đỏ Passion", hex: "#C0392B", image: `${BASE}/san_pham/VF6/mau_xe/CE1W.webp` },
    ],
    specs: [
      { label: "Quãng đường (NEDC)", value: "480 km/lần sạc đầy" },
      { label: "Công suất tối đa", value: "201 mã lực" },
      { label: "Mô men xoắn", value: "310 Nm" },
      { label: "Tốc độ tối đa", value: "170 km/h" },
      { label: "Tăng tốc 0-100 km/h", value: "< 8,5 giây" },
      { label: "Dung lượng pin", value: "59,6 kWh" },
      { label: "Tiêu thụ điện", value: "14 kWh/100 km" },
      { label: "Số chỗ ngồi", value: "5 chỗ" },
      { label: "La-zăng", value: "18 inch" },
      { label: "Sạc nhanh DC", value: "70 kW" },
      { label: "Số túi khí", value: "6 túi" },
    ],
    highlights: [
      "Phạm vi hành trình ấn tượng 480 km/lần sạc",
      "Hệ thống ADAS – hỗ trợ lái tiên tiến",
      "Màn hình trung tâm 12,9 inch cảm ứng",
      "Ghế sưởi & làm mát cao cấp",
    ],
    promotions: [
      "Giảm 6% giá xe đến 31/12/2026",
      "Miễn phí sạc pin đến 10/02/2029",
      "Miễn 100% lệ phí trước bạ",
      "Mua xe 0 Đồng (theo điều kiện áp dụng)",
      "Giảm thêm 5% cho Công an/Quân đội",
    ],
    versions: [
      { name: "VF 6 Base", price: 689000000, discountPrice: 647660000, discountNote: "Giảm 6% đến 31/12/2026" },
      { name: "VF 6 Plus", price: 759000000, discountPrice: 713460000, discountNote: "Giảm 6% đến 31/12/2026" },
    ],
    description: "VinFast VF 6 – SUV điện cỡ B với thiết kế tinh tế, công nghệ hàng đầu. Lựa chọn lý tưởng cho gia đình hiện đại.",
    isElectric: true,
    badge: "Bán chạy",
  },
  {
    id: "vf7",
    slug: "vf7",
    name: "VinFast VF 7",
    category: "suv",
    group: "o-to-dien",
    tagline: "SUV điện C – Đẳng cấp thể thao",
    price: "Từ 789.000.000 đ",
    priceFrom: 789000000,
    heroImage: `${BASE}/san_pham/vf7_do.webp`,
    image: `${BASE}/san_pham/ICON/VF7.webp`,
    images: [`${BASE}/san_pham/vf7_do.webp`],
    gallery: Array.from({ length: 13 }, (_, i) =>
      `${BASE}/san_pham/VF7/${String(i + 1).padStart(2, "0")}.webp`
    ),
    specImages: [
      `${BASE}/san_pham/VF7/14.webp`,
      `${BASE}/san_pham/VF7/15.webp`,
      `${BASE}/san_pham/VF7/16.webp`,
    ],
    colorOptions: [
      { name: "Trắng Bạch Ngọc", image: `${BASE}/san_pham/VF7/mau_xe/CE11.webp` },
      { name: "Xanh Sapphire", image: `${BASE}/san_pham/VF7/mau_xe/CE18.webp` },
      { name: "Xám Titanium", image: `${BASE}/san_pham/VF7/mau_xe/CE1M.webp` },
      { name: "Đen Huyền Bí", image: `${BASE}/san_pham/VF7/mau_xe/CE1V.webp` },
      { name: "Đỏ Passion", image: `${BASE}/san_pham/VF7/mau_xe/CE1W.webp` },
    ],
    colors: [
      { name: "Trắng Bạch Ngọc", hex: "#F0F0EC", image: `${BASE}/san_pham/VF7/mau_xe/CE11.webp` },
      { name: "Xanh Sapphire", hex: "#1A3A6B", image: `${BASE}/san_pham/VF7/mau_xe/CE18.webp` },
      { name: "Xám Titanium", hex: "#8E9EAB", image: `${BASE}/san_pham/VF7/mau_xe/CE1M.webp` },
      { name: "Đen Huyền Bí", hex: "#1A1A1A", image: `${BASE}/san_pham/VF7/mau_xe/CE1V.webp` },
      { name: "Đỏ Passion", hex: "#C0392B", image: `${BASE}/san_pham/VF7/mau_xe/CE1W.webp` },
    ],
    specs: [
      { label: "Quãng đường (NEDC)", value: "440 km/lần sạc đầy" },
      { label: "Công suất (ECO)", value: "174 mã lực" },
      { label: "Công suất (PLUS AWD)", value: "349 mã lực" },
      { label: "Mô men xoắn", value: "250 – 500 Nm" },
      { label: "Tốc độ tối đa", value: "200 km/h" },
      { label: "Tăng tốc 0-100 km/h", value: "< 5,9 giây (AWD)" },
      { label: "Dung lượng pin", value: "59,6 – 75,3 kWh" },
      { label: "Số chỗ ngồi", value: "5 chỗ" },
      { label: "La-zăng", value: "19 – 20 inch" },
      { label: "Số túi khí", value: "4 – 8 túi" },
    ],
    highlights: [
      "Dẫn động 4 bánh AWD tùy chọn cho phiên bản Plus",
      "Tăng tốc 0-100 dưới 6 giây với phiên bản AWD",
      "Màn hình kép 15,6 inch hiện đại",
      "Hệ thống âm thanh cao cấp 8 loa",
    ],
    promotions: [
      "Giảm 6% giá xe đến 31/12/2026",
      "Miễn phí sạc pin đến 10/02/2029",
      "Miễn 100% lệ phí trước bạ",
      "Mua xe 0 Đồng (theo điều kiện áp dụng)",
      "Giảm thêm 5% cho Công an/Quân đội",
    ],
    versions: [
      { name: "VF 7 ECO", price: 789000000, discountPrice: 741660000, discountNote: "Giảm 6%" },
      { name: "VF 7 Plus 1 cầu", price: 949000000, discountPrice: 892060000, discountNote: "Giảm 6%" },
      { name: "VF 7 Plus 2 cầu AWD", price: 999000000, discountPrice: 939060000, discountNote: "Giảm 6%" },
    ],
    description: "VinFast VF 7 – SUV điện cỡ C thể thao với hiệu suất vượt trội. Sự kết hợp hoàn hảo giữa phong cách và công nghệ.",
    isElectric: true,
  },
  {
    id: "vf8",
    slug: "vf8",
    name: "VinFast VF 8",
    category: "suv",
    group: "o-to-dien",
    tagline: "SUV điện D – Sang trọng đỉnh cao",
    price: "Từ 999.000.000 đ",
    priceFrom: 999000000,
    heroImage: `${BASE}/san_pham/VF_8_Do.webp`,
    image: `${BASE}/san_pham/ICON/VF8.webp`,
    images: [`${BASE}/san_pham/VF_8_Do.webp`],
    gallery: Array.from({ length: 15 }, (_, i) =>
      `${BASE}/san_pham/VF8/${String(i + 1).padStart(2, "0")}.webp`
    ),
    specImages: [
      `${BASE}/san_pham/VF8/16.webp`,
      `${BASE}/san_pham/VF8/17.webp`,
      `${BASE}/san_pham/VF8/18.webp`,
    ],
    colorOptions: [
      { name: "Trắng Bạch Ngọc", image: `${BASE}/san_pham/VF8/mau_xe/CE11.webp` },
      { name: "Xám Bạc", image: `${BASE}/san_pham/VF8/mau_xe/CE17.webp` },
      { name: "Xanh Sapphire", image: `${BASE}/san_pham/VF8/mau_xe/CE18.webp` },
      { name: "Xám Titanium", image: `${BASE}/san_pham/VF8/mau_xe/CE1M.webp` },
      { name: "Đen Huyền Bí", image: `${BASE}/san_pham/VF8/mau_xe/CE1V.webp` },
      { name: "Đỏ Passion", image: `${BASE}/san_pham/VF8/mau_xe/CE1W.webp` },
      { name: "Nâu Trầm", image: `${BASE}/san_pham/VF8/mau_xe/CE22.webp` },
    ],
    colors: [
      { name: "Trắng Bạch Ngọc", hex: "#F0F0EC", image: `${BASE}/san_pham/VF8/mau_xe/CE11.webp` },
      { name: "Xám Bạc", hex: "#C0C0C0", image: `${BASE}/san_pham/VF8/mau_xe/CE17.webp` },
      { name: "Xanh Sapphire", hex: "#1A3A6B", image: `${BASE}/san_pham/VF8/mau_xe/CE18.webp` },
      { name: "Xám Titanium", hex: "#8E9EAB", image: `${BASE}/san_pham/VF8/mau_xe/CE1M.webp` },
      { name: "Đen Huyền Bí", hex: "#1A1A1A", image: `${BASE}/san_pham/VF8/mau_xe/CE1V.webp` },
      { name: "Đỏ Passion", hex: "#C0392B", image: `${BASE}/san_pham/VF8/mau_xe/CE1W.webp` },
      { name: "Nâu Trầm", hex: "#7B5E4A", image: `${BASE}/san_pham/VF8/mau_xe/CE22.webp` },
    ],
    specs: [
      { label: "Quãng đường (NEDC)", value: "562 km/lần sạc đầy" },
      { label: "Công suất (ECO)", value: "201 mã lực" },
      { label: "Công suất (PLUS AWD)", value: "402 mã lực" },
      { label: "Mô men xoắn", value: "310 – 620 Nm" },
      { label: "Tốc độ tối đa", value: "200 km/h" },
      { label: "Tăng tốc 0-100 km/h", value: "11,8 giây (ECO) / 5,58 giây (Plus)" },
      { label: "Dung lượng pin", value: "82 – 87,7 kWh" },
      { label: "Số chỗ ngồi", value: "7 chỗ" },
      { label: "La-zăng", value: "20 – 21 inch" },
      { label: "Sạc nhanh DC", value: "150 kW" },
      { label: "Số túi khí", value: "8 túi" },
    ],
    highlights: [
      "7 chỗ ngồi rộng rãi, không gian cabin sang trọng",
      "AWD chuẩn mực, tăng tốc 5,58 giây",
      "Hệ thống Autopilot thế hệ mới",
      "Nội thất da cao cấp Nappa, ghế chỉnh điện",
    ],
    promotions: [
      "ƯU ĐÃI GIẢM 10% GIÁ XE",
      "Miễn phí sạc pin đến 02/10/2029",
      "Miễn 100% lệ phí trước bạ",
      "Mua xe 0 Đồng (theo điều kiện áp dụng)",
      "Giảm thêm 5% cho Công an/Quân đội",
    ],
    versions: [
      { name: "VF 8 Eco", price: 1019000000, discountPrice: 917100000, discountNote: "Giảm 10%" },
      { name: "VF 8 Plus", price: 1199000000, discountPrice: 1079100000, discountNote: "Giảm 10%" },
    ],
    description: "VinFast VF 8 – SUV điện đầu bảng với không gian 7 chỗ và trang bị đẳng cấp hàng đầu phân khúc. Thế hệ mới với giá bán chính thức từ 999 triệu đồng.",
    isElectric: true,
    badge: "Hot",
  },
  {
    id: "vf9",
    slug: "vf9",
    name: "VinFast VF 9",
    category: "suv",
    group: "o-to-dien",
    tagline: "SUV điện E – Hành trình không giới hạn",
    price: "Từ 1.499.000.000 đ",
    priceFrom: 1499000000,
    heroImage: `${BASE}/san_pham/VF_9_xanh_mint.webp`,
    image: `${BASE}/san_pham/ICON/VF9.webp`,
    images: [`${BASE}/san_pham/VF_9_xanh_mint.webp`],
    gallery: Array.from({ length: 13 }, (_, i) =>
      `${BASE}/san_pham/VF9/${String(i + 1).padStart(2, "0")}.webp`
    ),
    specImages: [
      `${BASE}/san_pham/VF9/14.webp`,
      `${BASE}/san_pham/VF9/15.webp`,
      `${BASE}/san_pham/VF9/16.webp`,
    ],
    colorOptions: [
      { name: "Trắng Bạch Ngọc", image: `${BASE}/san_pham/VF9/mau_xe/CE11.webp` },
      { name: "Xám Bạc", image: `${BASE}/san_pham/VF9/mau_xe/CE17.webp` },
      { name: "Xanh Sapphire", image: `${BASE}/san_pham/VF9/mau_xe/CE18.webp` },
      { name: "Xám Titanium", image: `${BASE}/san_pham/VF9/mau_xe/CE1M.webp` },
      { name: "Đen Huyền Bí", image: `${BASE}/san_pham/VF9/mau_xe/CE1V.webp` },
      { name: "Đỏ Passion", image: `${BASE}/san_pham/VF9/mau_xe/CE1W.webp` },
      { name: "Nâu Trầm", image: `${BASE}/san_pham/VF9/mau_xe/CE22.webp` },
    ],
    colors: [
      { name: "Trắng Bạch Ngọc", hex: "#F0F0EC", image: `${BASE}/san_pham/VF9/mau_xe/CE11.webp` },
      { name: "Xám Bạc", hex: "#C0C0C0", image: `${BASE}/san_pham/VF9/mau_xe/CE17.webp` },
      { name: "Xanh Sapphire", hex: "#1A3A6B", image: `${BASE}/san_pham/VF9/mau_xe/CE18.webp` },
      { name: "Xám Titanium", hex: "#8E9EAB", image: `${BASE}/san_pham/VF9/mau_xe/CE1M.webp` },
      { name: "Đen Huyền Bí", hex: "#1A1A1A", image: `${BASE}/san_pham/VF9/mau_xe/CE1V.webp` },
      { name: "Đỏ Passion", hex: "#C0392B", image: `${BASE}/san_pham/VF9/mau_xe/CE1W.webp` },
      { name: "Nâu Trầm", hex: "#7B5E4A", image: `${BASE}/san_pham/VF9/mau_xe/CE22.webp` },
    ],
    specs: [
      { label: "Quãng đường (WLTP)", value: "626 km/lần sạc đầy" },
      { label: "Công suất (ECO)", value: "300 mã lực" },
      { label: "Công suất (PLUS AWD)", value: "402 mã lực" },
      { label: "Mô men xoắn", value: "500 – 620 Nm" },
      { label: "Tốc độ tối đa", value: "200 km/h" },
      { label: "Tăng tốc 0-100 km/h", value: "< 6,5 giây" },
      { label: "Dung lượng pin", value: "123 kWh" },
      { label: "Số chỗ ngồi", value: "6/7 chỗ" },
      { label: "La-zăng", value: "22 inch" },
      { label: "Sạc nhanh DC", value: "150 kW" },
    ],
    highlights: [
      "Pin khổng lồ 123 kWh – phạm vi 626 km",
      "6/7 chỗ ngồi hạng thương gia",
      "Hệ thống giải trí màn hình sau cao cấp",
      "Trang bị an toàn cấp độ cao nhất",
    ],
    promotions: [
      "Giảm 10% từ chương trình Mãnh liệt vì Tương lai Xanh",
      "Miễn phí sạc pin đến 10/02/2029",
      "Miễn 100% lệ phí trước bạ",
      "Mua xe 0 Đồng (theo điều kiện áp dụng đến 31/12/2026)",
      "Giảm thêm 5% cho Công an/Quân đội",
    ],
    versions: [
      { name: "VF 9 Eco", price: 1499000000, discountPrice: 1349100000, discountNote: "Giảm 10%" },
      { name: "VF 9 Plus", price: 1699000000, discountPrice: 1529100000, discountNote: "Giảm 10%" },
    ],
    description: "VinFast VF 9 – SUV điện flagship cỡ lớn với pin khổng lồ, phạm vi hành trình vượt trội và không gian sang trọng bậc nhất.",
    isElectric: true,
  },
  // ========= DÒNG XE DỊCH VỤ =========
  {
    id: "ec-van",
    slug: "ec-van",
    name: "VinFast EC Van",
    category: "electric",
    group: "xe-dich-vu",
    tagline: "Xe tải điện – Giải pháp logistics xanh",
    price: "Từ 285.000.000 đ",
    priceFrom: 285000000,
    heroImage: `${BASE}/san_pham/ecvan_xanh.webp`,
    image: `${BASE}/san_pham/ICON/ecvan_xanh.webp`,
    images: [`${BASE}/san_pham/ecvan_xanh.webp`],
    gallery: [],
    specImages: [],
    colorOptions: [
      { name: "Xanh", image: `${BASE}/san_pham/ecvan_xanh.webp` },
    ],
    colors: [
      { name: "Xanh", hex: "#005BAC", image: `${BASE}/san_pham/ecvan_xanh.webp` },
    ],
    specs: [
      { label: "Quãng đường (NEDC)", value: "175 km/lần sạc đầy" },
      { label: "Tải trọng", value: "345 kg" },
      { label: "Thể tích thùng hàng", value: "2,8 m³" },
      { label: "Tốc độ tối đa", value: "100 km/h" },
      { label: "Dung lượng pin", value: "19,6 kWh" },
      { label: "Số chỗ ngồi", value: "2 chỗ" },
    ],
    highlights: [
      "Giải pháp vận chuyển hàng hóa xanh, bền vững",
      "Chi phí vận hành thấp hơn 70% so với xe xăng",
      "Thể tích thùng hàng 2,8 m³ rộng rãi",
      "Không phát thải CO2 trong quá trình vận hành",
    ],
    promotions: [
      "Miễn 100% lệ phí trước bạ",
      "Hỗ trợ vay vốn lãi suất ưu đãi",
      "Miễn phí sạc pin đến 10/02/2029",
    ],
    versions: [
      { name: "EC Van", price: 285000000, discountPrice: 285000000, discountNote: "" },
    ],
    description: "VinFast EC Van – xe tải điện mini lý tưởng cho các doanh nghiệp vận chuyển hàng hóa trong đô thị. Tiết kiệm chi phí vận hành tối đa.",
    isElectric: true,
    badge: "Dịch vụ",
  },
  {
    id: "minio-green",
    slug: "minio-green",
    name: "VinFast Minio Green",
    category: "electric",
    group: "xe-dich-vu",
    tagline: "Xe buýt điện mini – Linh hoạt đô thị",
    price: "Từ 269.000.000 đ",
    priceFrom: 269000000,
    heroImage: `${BASE}/san_pham/MinioGreen.webp`,
    image: `${BASE}/san_pham/ICON/MinioGreen.webp`,
    images: [`${BASE}/san_pham/MinioGreen.webp`],
    gallery: [],
    specImages: [],
    colorOptions: [
      { name: "Xanh lá", image: `${BASE}/san_pham/MinioGreen.webp` },
    ],
    colors: [
      { name: "Xanh lá", hex: "#16A34A", image: `${BASE}/san_pham/MinioGreen.webp` },
    ],
    specs: [
      { label: "Quãng đường (NEDC)", value: "210 km/lần sạc đầy" },
      { label: "Số chỗ ngồi", value: "16 chỗ" },
      { label: "Tốc độ tối đa", value: "100 km/h" },
      { label: "Dung lượng pin", value: "35 kWh" },
    ],
    highlights: [
      "Phương tiện vận tải hành khách điện cỡ nhỏ",
      "16 chỗ ngồi, phù hợp khu du lịch, resort, trường học",
      "Phạm vi 210 km, vận hành linh hoạt",
      "Không khí thải, êm ái, thân thiện môi trường",
    ],
    promotions: [
      "Miễn 100% lệ phí trước bạ",
      "Hỗ trợ vay vốn ưu đãi",
    ],
    versions: [
      { name: "Minio Green", price: 269000000, discountPrice: 269000000, discountNote: "" },
    ],
    description: "VinFast Minio Green – xe buýt điện cỡ nhỏ phù hợp cho khu du lịch, trường học, bệnh viện và các khu dân cư. Giải pháp vận tải xanh linh hoạt.",
    isElectric: true,
    badge: "Dịch vụ",
  },
  {
    id: "herio-green",
    slug: "herio-green",
    name: "VinFast Herio Green",
    category: "electric",
    group: "xe-dich-vu",
    tagline: "Xe buýt điện – Vận tải công cộng xanh",
    price: "Từ 499.000.000 đ",
    priceFrom: 499000000,
    heroImage: `${BASE}/san_pham/HerioGreen.webp`,
    image: `${BASE}/san_pham/ICON/HerioGreen.webp`,
    images: [`${BASE}/san_pham/HerioGreen.webp`],
    gallery: [],
    specImages: [],
    colorOptions: [
      { name: "Xanh", image: `${BASE}/san_pham/HerioGreen.webp` },
    ],
    colors: [
      { name: "Xanh", hex: "#005BAC", image: `${BASE}/san_pham/HerioGreen.webp` },
    ],
    specs: [
      { label: "Quãng đường (NEDC)", value: "326 km/lần sạc đầy" },
      { label: "Số chỗ ngồi", value: "30 chỗ" },
      { label: "Tốc độ tối đa", value: "90 km/h" },
      { label: "Dung lượng pin", value: "87 kWh" },
    ],
    highlights: [
      "Xe buýt điện trung bình cho tuyến vận tải công cộng",
      "30 chỗ ngồi, phạm vi 326 km",
      "Hệ thống điều hòa không khí tích hợp",
      "Giảm 70% chi phí vận hành so với buýt diesel",
    ],
    promotions: [
      "Miễn 100% lệ phí trước bạ",
      "Hỗ trợ vay vốn ưu đãi",
    ],
    versions: [
      { name: "Herio Green", price: 499000000, discountPrice: 499000000, discountNote: "" },
    ],
    description: "VinFast Herio Green – xe buýt điện trung đô phù hợp cho tuyến vận tải hành khách công cộng, khu công nghiệp và trường đại học.",
    isElectric: true,
    badge: "Dịch vụ",
  },
  {
    id: "limo-green",
    slug: "limo-green",
    name: "VinFast Limo Green",
    category: "electric",
    group: "xe-dich-vu",
    tagline: "Xe limousine điện – Đẳng cấp dịch vụ",
    price: "Từ 749.000.000 đ",
    priceFrom: 749000000,
    heroImage: `${BASE}/san_pham/LimoGreen.webp`,
    image: `${BASE}/san_pham/ICON/LimoGreen.webp`,
    images: [`${BASE}/san_pham/LimoGreen.webp`],
    gallery: [],
    specImages: [],
    colorOptions: [
      { name: "Trắng", image: `${BASE}/san_pham/LimoGreen.webp` },
    ],
    colors: [
      { name: "Trắng", hex: "#F5F5F0", image: `${BASE}/san_pham/LimoGreen.webp` },
    ],
    specs: [
      { label: "Quãng đường (NEDC)", value: "450 km/lần sạc đầy" },
      { label: "Số chỗ ngồi", value: "7 chỗ VIP" },
      { label: "Tốc độ tối đa", value: "160 km/h" },
      { label: "Dung lượng pin", value: "100 kWh" },
    ],
    highlights: [
      "Xe limousine VIP điện 7 chỗ sang trọng",
      "Phạm vi 450 km cho chuyến đi liên tỉnh",
      "Nội thất da cao cấp, ghế massage",
      "Màn hình giải trí riêng cho hàng ghế sau",
    ],
    promotions: [
      "Miễn 100% lệ phí trước bạ",
      "Hỗ trợ vay vốn ưu đãi",
    ],
    versions: [
      { name: "Limo Green", price: 749000000, discountPrice: 749000000, discountNote: "" },
    ],
    description: "VinFast Limo Green – xe limousine điện VIP dành cho dịch vụ đưa đón sân bay, hội nghị và du lịch cao cấp.",
    isElectric: true,
    badge: "Dịch vụ",
  },
  {
    id: "vf-mpv7",
    slug: "vf-mpv7",
    name: "VinFast VF MPV 7",
    category: "mpv",
    group: "xe-dich-vu",
    tagline: "MPV điện 7 chỗ – Gia đình & Dịch vụ",
    price: "Từ 819.000.000 đ",
    priceFrom: 819000000,
    heroImage: `${BASE}/san_pham/VF_MPV7.webp`,
    image: `${BASE}/san_pham/ICON/VF_MPV7.webp`,
    images: [`${BASE}/san_pham/VF_MPV7.webp`],
    gallery: [],
    specImages: [],
    colorOptions: [
      { name: "Trắng Bạch Ngọc", image: `${BASE}/san_pham/VF9/mau_xe/product_CE11.webp` },
      { name: "Nâu Trầm", image: `${BASE}/san_pham/VF9/mau_xe/product_CE22.webp` },
      { name: "Đen Huyền Bí", image: `${BASE}/san_pham/VF9/mau_xe/product_CE1V.webp` },
    ],
    colors: [
      { name: "Trắng Bạch Ngọc", hex: "#F0F0EC", image: `${BASE}/san_pham/VF9/mau_xe/product_CE11.webp` },
      { name: "Nâu Trầm", hex: "#7B5E4A", image: `${BASE}/san_pham/VF9/mau_xe/product_CE22.webp` },
      { name: "Đen Huyền Bí", hex: "#1A1A1A", image: `${BASE}/san_pham/VF9/mau_xe/product_CE1V.webp` },
    ],
    specs: [
      { label: "Quãng đường (NEDC)", value: "450 km/lần sạc đầy" },
      { label: "Công suất tối đa", value: "300 mã lực" },
      { label: "Mô men xoắn", value: "500 Nm" },
      { label: "Tốc độ tối đa", value: "180 km/h" },
      { label: "Tăng tốc 0-100 km/h", value: "< 7 giây" },
      { label: "Dung lượng pin", value: "94 kWh" },
      { label: "Số chỗ ngồi", value: "7 chỗ" },
      { label: "La-zăng", value: "20 inch" },
      { label: "Sạc nhanh DC", value: "150 kW" },
    ],
    highlights: [
      "MPV điện 7 chỗ cho gia đình và dịch vụ đưa đón",
      "Phạm vi 450 km, phù hợp liên tỉnh",
      "Hàng ghế thứ 2 dạng captain seats cao cấp",
      "Trang bị an toàn ADAS đầy đủ",
    ],
    promotions: [
      "Giảm 10% từ chương trình Mãnh liệt vì Tương lai Xanh",
      "Miễn 100% lệ phí trước bạ",
      "Miễn phí sạc pin đến 10/02/2029",
    ],
    versions: [
      { name: "VF MPV 7", price: 819000000, discountPrice: 737100000, discountNote: "Giảm 10%" },
    ],
    description: "VinFast VF MPV 7 – xe MPV điện 7 chỗ đa dụng, phù hợp cho gia đình đông người và các dịch vụ vận tải hành khách cao cấp.",
    isElectric: true,
    badge: "Mới",
  },
];

export interface News {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: "khuyen-mai" | "tin-tuc" | "su-kien";
  categoryLabel: string;
}

export const NEWS: News[] = [
  {
    id: "1",
    slug: "mua-he-ruc-ro-2026",
    title: "Chương trình Mùa Hè Rực Rỡ 2026 – VINFASCINATION",
    excerpt: "Hàng nghìn quà tặng và ưu đãi hấp dẫn dành cho khách hàng mua xe VinFast trong mùa hè 2026. Đừng bỏ lỡ!",
    content: "",
    image: `${BASE}/khuyen_mai/mua_he_ruc_ro.webp`,
    date: "2026-06-15",
    category: "khuyen-mai",
    categoryLabel: "Khuyến mãi",
  },
  {
    id: "2",
    slug: "vf8-gia-ban-chinh-thuc",
    title: "VF 8 THẾ HỆ MỚI: GIÁ BÁN CHÍNH THỨC – 999 TRIỆU ĐỒNG",
    excerpt: "VinFast chính thức công bố giá bán VF 8 thế hệ mới với mức giá 999 triệu đồng, cạnh tranh mạnh mẽ trong phân khúc SUV điện.",
    content: "",
    image: "/banner1.svg",
    date: "2026-06-10",
    category: "tin-tuc",
    categoryLabel: "Tin tức",
  },
  {
    id: "3",
    slug: "vf-mpv7-nau-tram",
    title: "VF MPV 7 – Nâu Trầm Tinh Tế, Vững Vàng Trên Mọi Hành Trình",
    excerpt: "Phiên bản màu Nâu Trầm mới của VF MPV 7 mang đến vẻ đẹp sang trọng, tinh tế cho dòng xe gia đình đa dụng hàng đầu.",
    content: "",
    image: `${BASE}/tin_tuc/662012978_1258230596525192_24895.webp`,
    date: "2026-06-05",
    category: "tin-tuc",
    categoryLabel: "Tin tức",
  },
  {
    id: "4",
    slug: "chinh-sach-bao-hanh-pin",
    title: "Chính sách bảo hành pin xe điện VinFast – Yên tâm tuyệt đối",
    excerpt: "VinFast cam kết bảo hành pin xe điện lên đến 10 năm hoặc 200,000 km.",
    content: "",
    image: `${BASE}/tin_tuc/image_1774413928087.webp`,
    date: "2026-05-10",
    category: "tin-tuc",
    categoryLabel: "Tin tức",
  },
  {
    id: "5",
    slug: "ho-tro-vay-0-lai-suat",
    title: "Hỗ trợ vay mua xe với lãi suất 0% trong 12 tháng đầu",
    excerpt: "Chương trình hỗ trợ tài chính đặc biệt: vay mua xe VinFast với lãi suất 0% trong 12 tháng đầu.",
    content: "",
    image: `${BASE}/tin_tuc/image_1774413687624.webp`,
    date: "2026-05-05",
    category: "khuyen-mai",
    categoryLabel: "Khuyến mãi",
  },
  {
    id: "6",
    slug: "vinfast-longan-khai-truong",
    title: "VinFast Long An khai trương cơ sở vật chất mới hiện đại",
    excerpt: "Đại lý VinFast Long An chính thức khai trương showroom mới với diện tích 2000m².",
    content: "",
    image: `${BASE}/tin_tuc/image_1774412729758.webp`,
    date: "2026-04-28",
    category: "su-kien",
    categoryLabel: "Sự kiện",
  },
];

export const PROMOTIONS = [
  {
    id: "1",
    title: "Ưu đãi lên đến 10%",
    description: "Áp dụng cho VF 8, VF 9 đến hết năm 2026",
    badge: "HOT",
    color: "#E30613",
    icon: "gift",
  },
  {
    id: "2",
    title: "Lãi suất 0% 12 tháng",
    description: "Hỗ trợ vay mua xe với lãi suất 0% trong năm đầu tiên",
    badge: "NEW",
    color: "#005BAC",
    icon: "percent",
  },
  {
    id: "3",
    title: "Miễn 100% trước bạ",
    description: "Miễn hoàn toàn lệ phí trước bạ cho tất cả dòng xe điện",
    badge: "",
    color: "#16A34A",
    icon: "shield",
  },
  {
    id: "4",
    title: "Miễn phí sạc đến 2029",
    description: "Sạc pin miễn phí tại hệ thống VinFast đến 10/02/2029",
    badge: "",
    color: "#9333EA",
    icon: "zap",
  },
];
