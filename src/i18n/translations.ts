export type Lang = "tr" | "en";

type TitleToken = { t: string; accent?: boolean };

const tr = {
  langLabel: { tr: "TR", en: "EN" },
  nav: {
    home: "Ana Sayfa",
    about: "Hakkımızda",
    services: "Hizmetlerimiz",
    contact: "İletişim",
  },
  a11y: {
    backHome: "Ana sayfaya dön",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    switchLang: "Dili değiştir",
  },
  cta: { quote: "Teklif Al" },
  hero: {
    titleTokens: [
      { t: "İşletmeniz" },
      { t: "için" },
      { t: "yazılım," },
      { t: "teknoloji" },
      { t: "ve" },
      { t: "insan kaynakları", accent: true },
      { t: "çözümleri" },
    ] as TitleToken[],
    description:
      "Web ve mobil uygulamalar, veri tabanı sistemleri ve kuruma özel yazılımlar geliştiriyor; özel istihdam bürosu olarak aracılık ve işe yerleştirme hizmetleri sunuyoruz.",
    exploreServices: "Hizmetlerimizi keşfedin",
    getInTouch: "İletişime geçin",
    capabilities: [
      "Web Uygulamaları",
      "Mobil Uygulamalar",
      "Veri Tabanı Sistemleri",
      "Kuruma Özel Yazılım",
      "İşe Yerleştirme",
      "İnsan Kaynakları",
    ],
  },
  about: {
    label: "Hakkımızda",
    heading: "Dijital dönüşümün güvenilir teknoloji ve istihdam ortağı",
    p1: "ATLAS İSTANBUL Teknoloji İnovasyon Hizmetleri Danışmanlık A.Ş., yazılım geliştirme ve teknoloji çözümlerinin yanı sıra insan kaynakları alanında faaliyet göstermektedir. Şirketimiz web yazılımları, mobil uygulamalar, veri tabanı sistemleri ve kuruma özel yazılımlar geliştirmektedir.",
    p2: "Aynı zamanda özel istihdam bürosu olarak, mobil uygulamamız ve web sitemiz üzerinden aracılık ve işe yerleştirme hizmetleri sunuyor; işletmelerin dijital dönüşüm süreçlerine katkı sağlayan ölçeklenebilir ve sürdürülebilir çözümler üretmeyi hedefliyoruz.",
    highlights: [
      "Web yazılımları ve kurumsal uygulamalar",
      "Mobil uygulama geliştirme (iOS & Android)",
      "Veri tabanı ve kuruma özel yazılım çözümleri",
      "Özel istihdam bürosu & işe yerleştirme",
    ],
    iskurTitle: "İŞKUR Onaylı Özel İstihdam Bürosu",
    iskurMeta: "Belge No: 2021 · Tarih: 19/08/2026 · Yasal yetkiye sahip aracılık hizmeti",
    principles: [
      { k: "Vizyon", v: "Kalıcı değer üreten, güvenilir bir teknoloji ve istihdam markası olmak." },
      { k: "Misyon", v: "Yazılım, teknoloji ve insan kaynakları çözümlerini tek çatı altında sunmak." },
      { k: "Yaklaşım", v: "Kullanıcı deneyimini önceleyen, sürdürülebilir mühendislik." },
      { k: "Değerler", v: "Güven, kalite, şeffaflık ve sürekli gelişim." },
    ],
  },
  services: {
    label: "Hizmetlerimiz",
    heading: "Uçtan uca yazılım, teknoloji ve insan kaynakları çözümleri",
    subtitle:
      "İşletmenizin ihtiyaçlarına özel, modern ve ölçeklenebilir çözümler geliştiriyoruz.",
    items: [
      {
        title: "Mobil Uygulama Geliştirme",
        description:
          "Android ve iOS platformları için modern, performanslı ve kullanıcı odaklı mobil uygulamalar geliştiriyoruz.",
      },
      {
        title: "Web Yazılım Geliştirme",
        description:
          "Kurumsal web uygulamaları ve işletmenize özel, ölçeklenebilir yazılım çözümleri tasarlıyoruz.",
      },
      {
        title: "Veri Tabanı Sistemleri",
        description:
          "Güvenli, hızlı ve sürdürülebilir veri yönetimi ile altyapı çözümleri sunuyoruz.",
      },
      {
        title: "Kuruma Özel Yazılım Geliştirme",
        description:
          "İşletmelerin ihtiyaçlarına göre kurgulanan, uçtan uca özel yazılım projeleri üretiyoruz.",
      },
      {
        title: "İnsan Kaynakları Çözümleri",
        description:
          "Özel istihdam bürosu olarak, mobil uygulamamız ve sitemiz üzerinden aracılık ve işe yerleştirme hizmetleri sunuyoruz.",
      },
    ],
    ctaHeading: "Projenizi birlikte konuşalım",
    ctaDescription:
      "İhtiyaçlarınızı değerlendirelim, size en uygun çözümü planlayalım.",
    ctaButton: "Teklif Al",
  },
  contact: {
    label: "İletişime Geçin",
    heading: "Projenizi birlikte hayata geçirelim",
    description:
      "Sorularınız ve teklif talepleriniz için bize ulaşın. En kısa sürede geri dönüş yapalım.",
    companyTitle: "Şirket Unvanı",
    addressLabel: "Adres",
    emailLabel: "E-Posta",
    openMaps: "Google Haritalar'da Aç",
    mapTitle: "ATLAS İSTANBUL Teknoloji konumu",
    nameLabel: "Ad Soyad",
    namePlaceholder: "Adınız ve soyadınız",
    emailPlaceholder: "ornek@eposta.com",
    messageLabel: "Mesaj",
    messagePlaceholder: "Projeniz veya talebiniz hakkında kısaca bilgi verin...",
    send: "Gönder",
    sending: "Gönderiliyor...",
    sent: "Gönderildi",
    successMsg:
      "Mesajınız için teşekkürler! En kısa sürede size geri dönüş yapacağız.",
    errorPre: "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin veya ",
    errorPost: " adresine yazın.",
    kvkkPre: "Bu formu göndererek ",
    kvkkLink: "Aydınlatma Metni (KVKK)",
    kvkkPost: "’ni okuduğunuzu kabul etmiş olursunuz.",
  },
  footer: {
    blurb:
      "İşletmeler için web, mobil, veri tabanı ve kuruma özel yazılım çözümleri geliştiriyoruz.",
    soon: "Çok yakında! 🚀",
    menu: "Menü",
    addressTitle: "Adres",
    iskurTitle: "Özel İstihdam Bürosu",
    dateLabel: "Tarih",
    docLabel: "Belge Numarası",
    rights: "Tüm hakları saklıdır.",
    kvkk: "Aydınlatma Metni (KVKK)",
  },
};

const en: typeof tr = {
  langLabel: { tr: "TR", en: "EN" },
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
  },
  a11y: {
    backHome: "Back to home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLang: "Switch language",
  },
  cta: { quote: "Get a Quote" },
  hero: {
    titleTokens: [
      { t: "Software," },
      { t: "technology" },
      { t: "and" },
      { t: "human resources", accent: true },
      { t: "solutions" },
      { t: "for" },
      { t: "your business" },
    ] as TitleToken[],
    description:
      "We build web and mobile applications, database systems and custom enterprise software; and as a licensed private employment agency, we provide recruitment and job placement services.",
    exploreServices: "Explore our services",
    getInTouch: "Get in touch",
    capabilities: [
      "Web Applications",
      "Mobile Apps",
      "Database Systems",
      "Custom Software",
      "Job Placement",
      "Human Resources",
    ],
  },
  about: {
    label: "About Us",
    heading: "Your trusted technology and employment partner in digital transformation",
    p1: "ATLAS İSTANBUL Teknoloji İnovasyon Hizmetleri Danışmanlık A.Ş. operates in software development and technology solutions as well as human resources. We build web software, mobile applications, database systems and custom enterprise software.",
    p2: "As a licensed private employment agency, we also provide recruitment and job placement services through our mobile app and website, aiming to deliver scalable, sustainable solutions that support businesses throughout their digital transformation.",
    highlights: [
      "Web software and enterprise applications",
      "Mobile app development (iOS & Android)",
      "Database and custom software solutions",
      "Private employment agency & job placement",
    ],
    iskurTitle: "İŞKUR-Licensed Private Employment Agency",
    iskurMeta: "Licence No: 2021 · Date: 19/08/2026 · Legally authorized agency service",
    principles: [
      { k: "Vision", v: "To be a trusted technology and employment brand that creates lasting value." },
      { k: "Mission", v: "To bring software, technology and human resources solutions together under one roof." },
      { k: "Approach", v: "Sustainable engineering that puts user experience first." },
      { k: "Values", v: "Trust, quality, transparency and continuous improvement." },
    ],
  },
  services: {
    label: "Our Services",
    heading: "End-to-end software, technology and human resources solutions",
    subtitle:
      "We build modern, scalable solutions tailored to your business needs.",
    items: [
      {
        title: "Mobile App Development",
        description:
          "We build modern, high-performance and user-focused mobile apps for Android and iOS.",
      },
      {
        title: "Web Software Development",
        description:
          "We design enterprise web applications and scalable software tailored to your business.",
      },
      {
        title: "Database Systems",
        description:
          "We deliver secure, fast and sustainable data management and infrastructure solutions.",
      },
      {
        title: "Custom Software Development",
        description:
          "We develop end-to-end custom software projects shaped around each business's needs.",
      },
      {
        title: "Human Resources Solutions",
        description:
          "As a private employment agency, we provide recruitment and job placement services through our app and website.",
      },
    ],
    ctaHeading: "Let's talk about your project",
    ctaDescription:
      "Let's assess your needs and plan the best solution for you.",
    ctaButton: "Get a Quote",
  },
  contact: {
    label: "Get in Touch",
    heading: "Let's bring your project to life",
    description:
      "Reach out with your questions or quote requests. We'll get back to you as soon as possible.",
    companyTitle: "Company Name",
    addressLabel: "Address",
    emailLabel: "Email",
    openMaps: "Open in Google Maps",
    mapTitle: "ATLAS İSTANBUL Teknoloji location",
    nameLabel: "Full Name",
    namePlaceholder: "Your full name",
    emailPlaceholder: "example@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Briefly describe your project or request...",
    send: "Send",
    sending: "Sending...",
    sent: "Sent",
    successMsg:
      "Thanks for your message! We'll get back to you as soon as possible.",
    errorPre: "Your message couldn't be sent. Please try again later or write to ",
    errorPost: ".",
    kvkkPre: "By submitting this form, you acknowledge that you have read the ",
    kvkkLink: "Privacy Notice (KVKK)",
    kvkkPost: ".",
  },
  footer: {
    blurb:
      "We build web, mobile, database and custom software solutions for businesses.",
    soon: "Coming soon! 🚀",
    menu: "Menu",
    addressTitle: "Address",
    iskurTitle: "Private Employment Agency",
    dateLabel: "Date",
    docLabel: "Licence No.",
    rights: "All rights reserved.",
    kvkk: "Privacy Notice (KVKK)",
  },
};

export type Translation = typeof tr;

export const translations: Record<Lang, Translation> = { tr, en };
