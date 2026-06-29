# Hướng dẫn Deploy VinFast Long An Website

## Tech Stack
- Next.js 14 (Static Export)
- Tailwind CSS
- TypeScript
- Deploy: Netlify
- Forms: Netlify Forms

## Cài đặt

```bash
npm install
npm run dev      # Chạy dev server tại localhost:3000
npm run build    # Build static site vào thư mục /out
```

## Deploy lên Netlify

### Cách 1: Kéo thả (đơn giản nhất)
1. Chạy `npm run build`
2. Vào netlify.com → New site → Deploy manually
3. Kéo thư mục `out/` vào

### Cách 2: Kết nối GitHub (khuyến nghị - auto deploy)
1. Push code lên GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: VinFast dealer website"
   git remote add origin https://github.com/YOUR_USERNAME/vinfast-longan.git
   git push -u origin main
   ```
2. Vào Netlify → New site from Git → Chọn repo GitHub
3. Build command: `npm run build`
4. Publish directory: `out`
5. Deploy!

### Đổi tên miền
1. Vào Site settings → Domain management
2. Add custom domain → Nhập tên miền của bạn
3. Cập nhật DNS theo hướng dẫn của Netlify

## Cập nhật nội dung

### Thay thế thông tin đại lý
Sửa file `lib/data.ts` → phần `DEALER_INFO`:
- name: Tên đại lý
- address: Địa chỉ
- phone: Số điện thoại
- hotline: Hotline
- email: Email
- mapEmbed: Link Google Maps embed

### Thêm/sửa xe
Sửa mảng `CARS` trong `lib/data.ts`

### Thêm tin tức
Sửa mảng `NEWS` trong `lib/data.ts`

### Thêm hình ảnh
Đặt ảnh vào thư mục `public/images/cars/[model]/`
Ảnh xe: `main.jpg`, `interior.jpg`, `side.jpg`, `rear.jpg`

## Xem leads (form đăng ký)
Vào Netlify → Forms → Sẽ thấy tất cả form submissions

## Tùy chỉnh màu sắc
Sửa trong `app/globals.css` phần `:root`
