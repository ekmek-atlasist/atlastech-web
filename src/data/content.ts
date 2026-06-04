import {
  MobileIcon,
  WebIcon,
  DatabaseIcon,
  CodeIcon,
  NetworkIcon,
} from "../components/icons";
import type { ComponentType, SVGProps } from "react";

export const NAV_LINKS = [
  { label: "Ana Sayfa", href: "#home" },
  { label: "Hakkımızda", href: "#about" },
  { label: "Hizmetlerimiz", href: "#services" },
  { label: "Ürünlerimiz", href: "#products" },
  { label: "İletişim", href: "#contact" },
];

export type Service = {
  title: string;
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const SERVICES: Service[] = [
  {
    title: "Mobil Uygulama Geliştirme",
    description:
      "Android ve iOS platformları için modern, performanslı ve kullanıcı odaklı mobil uygulamalar geliştiriyoruz.",
    Icon: MobileIcon,
  },
  {
    title: "Web Yazılım Geliştirme",
    description:
      "Kurumsal web uygulamaları ve işletmenize özel, ölçeklenebilir yazılım çözümleri tasarlıyoruz.",
    Icon: WebIcon,
  },
  {
    title: "Veri Tabanı Sistemleri",
    description:
      "Güvenli, hızlı ve sürdürülebilir veri yönetimi ile altyapı çözümleri sunuyoruz.",
    Icon: DatabaseIcon,
  },
  {
    title: "Kuruma Özel Yazılım Geliştirme",
    description:
      "İşletmelerin ihtiyaçlarına göre kurgulanan, uçtan uca özel yazılım projeleri üretiyoruz.",
    Icon: CodeIcon,
  },
  {
    title: "Network ve Sistem Çözümleri",
    description:
      "Kurumsal altyapı, ağ yönetimi ve sistem entegrasyonu konularında uçtan uca destek veriyoruz.",
    Icon: NetworkIcon,
  },
];

export type Product = {
  name: string;
  slogan: string;
  description: string;
  website: string;
  websiteUrl: string;
  status: string;
};

export const PRODUCTS: Product[] = [
  {
    name: "EKMEK",
    slogan: "İşe Giden Yolun En Kısası",
    description:
      "Ekmek, iş arayanlar ile işverenleri daha hızlı ve etkili şekilde buluşturmayı hedefleyen mobil platformdur. Kullanıcı deneyimini ön planda tutan yapısıyla iş arama süreçlerini kolaylaştırmayı amaçlamaktadır.",
    website: "ekmekisbul.com",
    websiteUrl: "https://ekmekisbul.com",
    status: "Mobil Platform",
  },
];

export const COMPANY = {
  shortName: "ATLAS İSTANBUL",
  tagline: "Teknoloji ve İnovasyon Hizmetleri",
  legalName:
    "ATLAS İSTANBUL TEKNOLOJİ İNOVASYON HİZMETLERİ İÇ VE DIŞ TİCARET ANONİM ŞİRKETİ",
  shortLegal: "ATLAS İSTANBUL Teknoloji ve İnovasyon Hizmetleri A.Ş.",
  email: "info@atlasistanbulteknoloji.com",
  address:
    "Turgut Özal Mah. 68. Sk. B Blok İş Merkezi No: 42/1 İç Kapı No: 3 Esenyurt / İstanbul",
};

// Google Haritalar — adresin gömülü (embed) ve tıklanabilir bağlantı sürümleri
const MAPS_QUERY = encodeURIComponent(
  "Turgut Özal Mah. 68. Sk. B Blok İş Merkezi No 42 Esenyurt İstanbul"
);
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${MAPS_QUERY}&z=16&output=embed`;
export const MAPS_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;

// Formspree form uç noktası.
// https://formspree.io adresinde info@atlasistanbulteknoloji.com için bir form
// oluşturduktan sonra verilen form ID'sini aşağıya yapıştırın (örn. "xmyzabcd").
export const FORMSPREE_FORM_ID = "xpqezaoz";
export const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;
