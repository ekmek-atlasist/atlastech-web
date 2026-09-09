import {
  MobileIcon,
  WebIcon,
  DatabaseIcon,
  CodeIcon,
  UsersIcon,
} from "../components/icons";
import type { ComponentType, SVGProps } from "react";

// Bölüm bağlantıları — etiketler i18n sözlüğünden gelir (key → t.nav[key])
export const NAV_ITEMS: { key: "home" | "about" | "services" | "contact"; href: string }[] = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "contact", href: "#contact" },
];

// Hizmet ikonları — sıraları çeviri sözlüğündeki services.items ile eşleşir
export const SERVICE_ICONS: ComponentType<SVGProps<SVGSVGElement>>[] = [
  MobileIcon,
  WebIcon,
  DatabaseIcon,
  CodeIcon,
  UsersIcon,
];

// Hakkımızda ilke görselleri — sıraları about.principles ile eşleşir
export const PRINCIPLE_IMAGES = [
  "/about-vizyon.webp",
  "/about-misyon.webp",
  "/about-yaklasim.webp",
  "/about-degerler.webp",
];

export const COMPANY = {
  shortName: "ATLAS İSTANBUL",
  tagline: "Teknoloji ve İnovasyon Hizmetleri",
  legalName:
    "ATLAS İSTANBUL TEKNOLOJİ İNOVASYON HİZMETLERİ DANIŞMANLIK İÇ VE DIŞ TİCARET ANONİM ŞİRKETİ",
  shortLegal:
    "ATLAS İSTANBUL Teknoloji İnovasyon Hizmetleri Danışmanlık A.Ş.",
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
