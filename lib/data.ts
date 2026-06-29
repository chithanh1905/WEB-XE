export const DEALER_INFO = {
  name: "VinFast VFG Long An 3S",
  shortName: "VinFast Long An",
  address: "1163 QL1A, Khu phố Nhơn Cầu, P. Khánh Hậu, Tỉnh Tây Ninh (Long An cũ)",
  phone: "0946 999 286",
  phoneLink: "tel:1900232389",
  email: "vinfastlongan@gmail.com",
  hotline: "0946 999 286",
  hotlineLink: "tel:0946999286",
  workingHours: "7:30 - 18:00 (Tất cả các ngày trong tuần)",
  facebook: "https://facebook.com/vinfastlongan",
  youtube: "https://youtube.com/vinfastlongan",
  zalo: "https://zalo.me/0946999286",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.5!2d106.3693356!3d10.4894942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310ab70015d63aef%3A0x78894daa5b75fc56!2sShowroom%20VinFast%20VFG%20Long%20An!5e0!3m2!1svi!2svn!4v1751183400000",
  googleMapsUrl: "https://www.google.com/maps/place/Showroom+VinFast+VFG+Long+An/@10.4894942,106.3693356,17z/data=!3m1!4b1!4m6!3m5!1s0x310ab70015d63aef:0x78894daa5b75fc56!8m2!3d10.4894889!4d106.3719105!16s%2Fg%2F11z218j2p1",
};

export interface Car {
  id: string;
  slug: string;
  name: string;
  category: "suv" | "sedan" | "hatchback" | "electric" | "mpv";
  tagline: string;
  price: string;
  priceFrom: number;
  image: string;
  images: string[];
  colors: { name: string; hex: string; image: string }[];
  specs: { label: string; value: string }[];
  highlights: string[];
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
    tagline: "Xe điện mini – Đô thị thông minh",
    price: "Từ 299.000.000 đ",
    priceFrom: 299000000,
    image: "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF3.webp",
    images: [
      "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF3.webp",
      "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF3.webp",
      "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF3.webp",
    ],
    colors: [
      { name: "Trắng Ngọc Trai", hex: "#F5F5F0", image: "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF3.webp" },
      { name: "Xanh Đại Dương", hex: "#1B4F8C", image: "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF3.webp" },
      { name: "Đỏ Ruby", hex: "#C0392B", image: "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF3.webp" },
    ],
    specs: [
      { label: "Loại xe", value: "Xe điện" },
      { label: "Phạm vi", value: "Lên đến 210 km" },
      { label: "Công suất", value: "42 mã lực" },
      { label: "Tăng tốc 0-100", value: "< 12 giây" },
      { label: "Tốc độ tối đa", value: "110 km/h" },
      { label: "Số chỗ ngồi", value: "4 chỗ" },
      { label: "Pin", value: "19.6 kWh" },
      { label: "Sạc nhanh", value: "Hỗ trợ DC 30kW" },
    ],
    highlights: ["Xe điện mini thân thiện môi trường", "Chi phí vận hành siêu tiết kiệm", "Dễ đỗ xe trong đô thị", "Kết nối thông minh"],
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
    tagline: "SUV điện đô thị – Phong cách hiện đại",
    price: "Từ 529.000.000 đ",
    priceFrom: 529000000,
    image: "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF5.webp",
    images: [
      "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF5.webp",
      "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF5.webp",
      "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF5.webp",
    ],
    colors: [
      { name: "Trắng Tinh Khôi", hex: "#FFFFFF", image: "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF5.webp" },
      { name: "Xám Bạc", hex: "#8E9EAB", image: "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF5.webp" },
      { name: "Đen Huyền", hex: "#1A1A1A", image: "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF5.webp" },
    ],
    specs: [
      { label: "Loại xe", value: "SUV điện" },
      { label: "Phạm vi", value: "Lên đến 326 km" },
      { label: "Công suất", value: "134 mã lực" },
      { label: "Tăng tốc 0-100", value: "< 11 giây" },
      { label: "Tốc độ tối đa", value: "130 km/h" },
      { label: "Số chỗ ngồi", value: "5 chỗ" },
      { label: "Pin", value: "37.23 kWh" },
      { label: "Sạc nhanh", value: "Hỗ trợ DC 50kW" },
    ],
    highlights: ["Công nghệ lái hỗ trợ thông minh", "Nội thất sang trọng tiện nghi", "Pin dung lượng lớn", "Kết nối 4G & WiFi"],
    description: "VinFast VF 5 – SUV điện cỡ nhỏ với thiết kế hiện đại, nội thất thông minh. Phù hợp cho gia đình trẻ năng động tại đô thị.",
    isElectric: true,
  },
  {
    id: "vf6",
    slug: "vf6",
    name: "VinFast VF 6",
    category: "suv",
    tagline: "SUV điện B – Cân bằng hoàn hảo",
    price: "Từ 689.000.000 đ",
    priceFrom: 689000000,
    image: "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF6.webp",
    images: [
      "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF6.webp",
      "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF6.webp",
      "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF6.webp",
    ],
    colors: [
      { name: "Trắng Ngọc", hex: "#F0F0EC", image: "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF6.webp" },
      { name: "Xanh Sapphire", hex: "#1A3A6B", image: "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF6.webp" },
      { name: "Xám Titan", hex: "#6B7280", image: "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF6.webp" },
      { name: "Đen Jet", hex: "#111111", image: "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF6.webp" },
    ],
    specs: [
      { label: "Loại xe", value: "SUV điện" },
      { label: "Phạm vi", value: "Lên đến 399 km" },
      { label: "Công suất", value: "201 mã lực" },
      { label: "Tăng tốc 0-100", value: "< 8.5 giây" },
      { label: "Tốc độ tối đa", value: "170 km/h" },
      { label: "Số chỗ ngồi", value: "5 chỗ" },
      { label: "Pin", value: "59.6 kWh" },
      { label: "Sạc nhanh", value: "Hỗ trợ DC 70kW" },
    ],
    highlights: ["Phạm vi hành trình ấn tượng", "Hệ thống ADAS tiên tiến", "Màn hình trung tâm 12.9 inch", "Ghế sưởi & làm mát"],
    description: "VinFast VF 6 – SUV điện cỡ B với thiết kế tinh tế, công nghệ hàng đầu. Lựa chọn lý tưởng cho gia đình hiện đại.",
    isElectric: true,
    badge: "Bán chạy",
  },
  {
    id: "vf7",
    slug: "vf7",
    name: "VinFast VF 7",
    category: "suv",
    tagline: "SUV điện C – Đẳng cấp thể thao",
    price: "Từ 789.000.000 đ",
    priceFrom: 789000000,
    image: "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF7.webp",
    images: [
      "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF7.webp",
      "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF7.webp",
      "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF7.webp",
    ],
    colors: [
      { name: "Xanh Neptune", hex: "#0B3D6B", image: "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF7.webp" },
      { name: "Trắng Arctic", hex: "#F8F8F5", image: "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF7.webp" },
      { name: "Đỏ Passion", hex: "#B91C1C", image: "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF7.webp" },
    ],
    specs: [
      { label: "Loại xe", value: "SUV điện" },
      { label: "Phạm vi", value: "Lên đến 431 km" },
      { label: "Công suất", value: "349 mã lực (2WD) / 402 mã lực (AWD)" },
      { label: "Tăng tốc 0-100", value: "< 5.9 giây (AWD)" },
      { label: "Tốc độ tối đa", value: "200 km/h" },
      { label: "Số chỗ ngồi", value: "5 chỗ" },
      { label: "Pin", value: "75.3 kWh" },
      { label: "Sạc nhanh", value: "Hỗ trợ DC 150kW" },
    ],
    highlights: ["Dẫn động 4 bánh AWD tùy chọn", "Tăng tốc 0-100 dưới 6 giây", "Màn hình kép 15.6 inch", "Hệ thống âm thanh cao cấp"],
    description: "VinFast VF 7 – SUV điện cỡ C thể thao với hiệu suất vượt trội. Sự kết hợp hoàn hảo giữa phong cách và công nghệ.",
    isElectric: true,
  },
  {
    id: "vf8",
    slug: "vf8",
    name: "VinFast VF 8",
    category: "suv",
    tagline: "SUV điện D – Sang trọng đỉnh cao",
    price: "Từ 1.019.000.000 đ",
    priceFrom: 1019000000,
    image: "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF8.webp",
    images: [
      "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF8.webp",
      "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF8.webp",
      "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF8.webp",
    ],
    colors: [
      { name: "Xanh Midnight", hex: "#0A2744", image: "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF8.webp" },
      { name: "Trắng Crystal", hex: "#FAFAF8", image: "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF8.webp" },
      { name: "Xám Graphite", hex: "#4B5563", image: "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF8.webp" },
    ],
    specs: [
      { label: "Loại xe", value: "SUV điện" },
      { label: "Phạm vi", value: "Lên đến 471 km" },
      { label: "Công suất", value: "402 mã lực" },
      { label: "Tăng tốc 0-100", value: "< 5.5 giây" },
      { label: "Tốc độ tối đa", value: "200 km/h" },
      { label: "Số chỗ ngồi", value: "7 chỗ" },
      { label: "Pin", value: "87.7 kWh" },
      { label: "Sạc nhanh", value: "Hỗ trợ DC 150kW" },
    ],
    highlights: ["7 chỗ ngồi rộng rãi", "AWD chuẩn mực", "Autopilot thế hệ mới", "Nội thất da cao cấp Nappa"],
    description: "VinFast VF 8 – SUV điện đầu bảng với không gian 7 chỗ và trang bị đẳng cấp hàng đầu phân khúc.",
    isElectric: true,
    badge: "Hot",
  },
  {
    id: "vf9",
    slug: "vf9",
    name: "VinFast VF 9",
    category: "suv",
    tagline: "SUV điện E – Hành trình không giới hạn",
    price: "Từ 1.499.000.000 đ",
    priceFrom: 1499000000,
    image: "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF9.webp",
    images: [
      "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF9.webp",
      "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF9.webp",
      "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF9.webp",
    ],
    colors: [
      { name: "Trắng Phantom", hex: "#F9F9F7", image: "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF9.webp" },
      { name: "Đen Carbon", hex: "#0D0D0D", image: "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF9.webp" },
      { name: "Xanh Royal", hex: "#1E3A5F", image: "https://vinfastlongan3s.com/OTO3602500656/files/san_pham/ICON/VF9.webp" },
    ],
    specs: [
      { label: "Loại xe", value: "SUV điện cỡ lớn" },
      { label: "Phạm vi", value: "Lên đến 568 km" },
      { label: "Công suất", value: "402 mã lực" },
      { label: "Tăng tốc 0-100", value: "< 6.5 giây" },
      { label: "Tốc độ tối đa", value: "200 km/h" },
      { label: "Số chỗ ngồi", value: "6/7 chỗ" },
      { label: "Pin", value: "123 kWh" },
      { label: "Sạc nhanh", value: "Hỗ trợ DC 150kW" },
    ],
    highlights: ["Pin khổng lồ 123 kWh", "Phạm vi 568 km mỗi lần sạc", "6/7 chỗ ngồi hạng thương gia", "Hệ thống giải trí sau xe"],
    description: "VinFast VF 9 – SUV điện flagship cỡ lớn với pin khổng lồ, phạm vi hành trình vượt trội và không gian sang trọng bậc nhất.",
    isElectric: true,
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
    slug: "khuyen-mai-thang-7-2024",
    title: "Khuyến mãi tháng 7: Ưu đãi lên đến 50 triệu đồng khi mua VinFast VF 6",
    excerpt: "Trong tháng 7/2024, VinFast Long An triển khai chương trình ưu đãi đặc biệt với mức giảm giá lên đến 50 triệu đồng cho dòng VF 6.",
    content: "",
    image: "https://vinfastlongan3s.com/OTO3602500656/files/tin_tuc/703296634_122209422710550434_772.webp",
    date: "2026-06-01",
    category: "khuyen-mai",
    categoryLabel: "Khuyến mãi",
  },
  {
    id: "2",
    slug: "vinfast-vf3-ra-mat",
    title: "VinFast VF 3 chính thức ra mắt tại thị trường Việt Nam",
    excerpt: "VinFast VF 3 – xe điện mini giá rẻ nhất của VinFast đã chính thức có mặt tại đại lý Long An với giá từ 235 triệu đồng.",
    content: "",
    image: "https://vinfastlongan3s.com/OTO3602500656/files/tin_tuc/662012978_1258230596525192_24895.webp",
    date: "2026-05-20",
    category: "tin-tuc",
    categoryLabel: "Tin tức",
  },
  {
    id: "3",
    slug: "lai-thu-cuoi-tuan",
    title: "Sự kiện lái thử xe điện VinFast cuối tuần tại Long An",
    excerpt: "Đến trải nghiệm xe điện VinFast hoàn toàn miễn phí tại showroom Long An. Nhận ngay quà tặng hấp dẫn khi tham gia sự kiện.",
    content: "",
    image: "https://vinfastlongan3s.com/OTO3602500656/files/tin_tuc/661679011_1258229603191958_24368.webp",
    date: "2026-05-15",
    category: "su-kien",
    categoryLabel: "Sự kiện",
  },
  {
    id: "4",
    slug: "chinh-sach-bao-hanh-pin",
    title: "Chính sách bảo hành pin xe điện VinFast – Yên tâm tuyệt đối",
    excerpt: "VinFast cam kết bảo hành pin xe điện lên đến 10 năm hoặc 200,000 km, đảm bảo an tâm tuyệt đối cho khách hàng.",
    content: "",
    image: "https://vinfastlongan3s.com/OTO3602500656/files/tin_tuc/image_1774413928087.webp",
    date: "2026-05-10",
    category: "tin-tuc",
    categoryLabel: "Tin tức",
  },
  {
    id: "5",
    slug: "ho-tro-vay-0-lai-suat",
    title: "Hỗ trợ vay mua xe với lãi suất 0% trong 12 tháng đầu",
    excerpt: "Chương trình hỗ trợ tài chính đặc biệt: vay mua xe VinFast với lãi suất 0% trong 12 tháng đầu, thủ tục đơn giản, phê duyệt nhanh.",
    content: "",
    image: "https://vinfastlongan3s.com/OTO3602500656/files/tin_tuc/image_1774413687624.webp",
    date: "2026-05-05",
    category: "khuyen-mai",
    categoryLabel: "Khuyến mãi",
  },
  {
    id: "6",
    slug: "vinfast-longan-khai-truong",
    title: "VinFast Long An khai trương cơ sở vật chất mới hiện đại",
    excerpt: "Đại lý VinFast Long An chính thức khai trương showroom mới với diện tích 2000m², trang thiết bị hiện đại, phục vụ khách hàng tốt hơn.",
    content: "",
    image: "https://vinfastlongan3s.com/OTO3602500656/files/tin_tuc/image_1774412729758.webp",
    date: "2026-04-28",
    category: "su-kien",
    categoryLabel: "Sự kiện",
  },
];

export const PROMOTIONS = [
  {
    id: "1",
    title: "Ưu đãi lên đến 50 triệu",
    description: "Áp dụng cho VF 6, VF 7, VF 8 trong tháng 7/2024",
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
    title: "Miễn phí bảo dưỡng 3 năm",
    description: "Gói bảo dưỡng định kỳ miễn phí trong 3 năm đầu",
    badge: "",
    color: "#16A34A",
    icon: "shield",
  },
  {
    id: "4",
    title: "Tặng thẻ sạc 5 triệu",
    description: "Tặng kèm thẻ sạc VinFast trị giá 5 triệu đồng",
    badge: "",
    color: "#9333EA",
    icon: "zap",
  },
];
