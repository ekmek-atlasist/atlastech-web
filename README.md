# ATLAS İSTANBUL Teknoloji — Kurumsal Web Sitesi

ATLAS İSTANBUL Teknoloji ve İnovasyon Hizmetleri A.Ş. için geliştirilmiş, modern,
premium ve tek sayfalık (single-page) kurumsal web sitesi.

## Teknolojiler

- **React 19** + **TypeScript**
- **Vite 7** (hızlı geliştirme & optimize üretim derlemesi)
- **Tailwind CSS 4** (koyu tema, responsive tasarım)
- IntersectionObserver tabanlı smooth scroll-reveal animasyonları

## Kurulum

```bash
npm install
```

## Geliştirme

```bash
npm run dev
```

Site `http://localhost:5173` adresinde açılır.

## Üretim Derlemesi

```bash
npm run build      # dist/ klasörüne statik çıktı üretir
npm run preview    # üretim derlemesini yerelde önizler
```

`dist/` klasörü herhangi bir statik barındırma servisine (Vercel, Netlify,
Cloudflare Pages, GitHub Pages vb.) doğrudan yüklenebilir.

## Proje Yapısı

```
src/
  components/   # Header, Hero, About, Services, Products, Contact, Footer, Logo, icons
  data/         # content.ts — tüm metin, hizmet ve ürün verileri tek yerde
  hooks/        # useReveal — scroll animasyon hook'u
  App.tsx       # sayfa kompozisyonu
public/
  logo.png      # favicon ve sosyal medya önizleme görseli
```

## İçeriği Güncelleme

- **Hizmetler / Ürünler / Şirket bilgileri:** `src/data/content.ts` dosyasından
  düzenlenebilir. Ürünler bölümü dizi yapısı sayesinde ölçeklenebilirdir; yeni bir
  ürün eklemek için `PRODUCTS` dizisine yeni bir nesne eklemeniz yeterlidir.
- **Renkler / Tipografi:** `src/index.css` içindeki `@theme` bloğundan yönetilir.
- **Logo:** `public/logo.png` ile favicon/OG görseli; header & footer'daki marka
  işareti `src/components/Logo.tsx` içinde SVG olarak yer alır.

## Notlar

- İletişim formu, sunucu gerektirmemesi için `mailto:` üzerinden çalışır.
  `info@atlasistanbulteknoloji.com` adresini gerçek e-posta ile güncelleyin
  (`src/components/Contact.tsx`).
- Harita alanı şu an placeholder olarak eklenmiştir; gerçek adres koordinatları
  belli olduğunda bir Google Maps embed'i ile değiştirilebilir.
