export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "list"; items: string[] }
  | { type: "def"; term: string; text: string };

export const KVKK_TITLE = "Aydınlatma Metni";
export const KVKK_SUBTITLE =
  "Kişisel Verilerin İşlenmesine İlişkin Aydınlatma Metni (KVKK)";

export const KVKK_BLOCKS: LegalBlock[] = [
  {
    type: "h",
    text: "ATLAS İSTANBUL TEKNOLOJİ İNOVASYON HİZMETLERİ DANIŞMANLIK İÇ VE DIŞ TİCARET ANONİM ŞİRKETİ KİŞİSEL VERİLERİN İŞLENMESİNE İLİŞKİN AYDINLATMA METNİ",
  },
  {
    type: "p",
    text: "İşbu Aydınlatma Metni, ATLAS İSTANBUL TEKNOLOJİ İNOVASYON HİZMETLERİ DANIŞMANLIK İÇ VE DIŞ TİCARET ANONİM ŞİRKETİ (“ŞİRKET”) tarafından, www.atlasistanbulteknoloji.com internet sitesi (“Site”) üzerinden kişisel verilerinizin 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) madde 10 kapsamında işlenmesine ilişkin olarak, veri sorumlusu sıfatıyla sizi bilgilendirmek amacıyla hazırlanmıştır.",
  },
  {
    type: "p",
    text: "Site, ŞİRKET’in faaliyetlerini tanıtan kurumsal bir internet sitesidir. Site üzerinden kişisel verileriniz, yalnızca iletişim/teklif formunu doldurmanız hâlinde ve sizinle iletişime geçebilmemiz amacıyla toplanır. Metin, mevzuatta yapılabilecek değişiklikler çerçevesinde güncellenebilir; güncel sürümüne her zaman Site üzerinden ulaşabilirsiniz.",
  },

  { type: "h", text: "1. İŞLENEN KİŞİSEL VERİLERİNİZ" },
  {
    type: "p",
    text: "Site üzerinden aşağıdaki kişisel verileriniz işlenebilmektedir:",
  },
  {
    type: "list",
    items: [
      "Kimlik ve iletişim bilgileri: İletişim/teklif formu aracılığıyla ilettiğiniz ad-soyad ve e-posta adresi,",
      "Mesaj içeriği: Talebinizi iletmek amacıyla mesaj alanında paylaşmayı tercih ettiğiniz bilgiler,",
      "İşlem güvenliği verileri: Siteyi ziyaretiniz sırasında güvenlik ve altyapının işletilmesi amacıyla oluşabilecek sınırlı teknik kayıtlar (ör. IP adresi, tarayıcı/log kayıtları).",
    ],
  },

  { type: "h", text: "2. KİŞİSEL VERİLERİN İŞLENME AMAÇLARI" },
  {
    type: "p",
    text: "Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:",
  },
  {
    type: "list",
    items: [
      "İletişim ve teklif taleplerinizin alınması, değerlendirilmesi ve yanıtlanması,",
      "Sorularınızın, talep ve şikâyetlerinizin sonuçlandırılması,",
      "Sizinle iletişim kurulması ve gerektiğinde bilgilendirme yapılması,",
      "Site’nin ve elektronik sistemlerin güvenliğinin sağlanması,",
      "Hukuki yükümlülüklerin yerine getirilmesi ile olası uyuşmazlıklarda bir hakkın tesisi, kullanılması veya korunması.",
    ],
  },

  { type: "h", text: "3. İŞLEMENİN HUKUKİ SEBEPLERİ" },
  {
    type: "p",
    text: "Kişisel verileriniz, KVKK madde 5 kapsamında aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:",
  },
  {
    type: "list",
    items: [
      "İletişim/teklif formunu doldurarak verilerinizi tarafımıza iletmeniz nedeniyle, ilgili kişinin talebinin karşılanması ve ŞİRKET’in meşru menfaati (m.5/2-f),",
      "ŞİRKET’in hukuki yükümlülüklerini yerine getirebilmesi için zorunlu olması (m.5/2-ç),",
      "Bir hakkın tesisi, kullanılması veya korunması için işlemenin zorunlu olması (m.5/2-e),",
      "Yukarıdaki sebeplerin dışında kalan işlemeler bakımından ise açık rızanız.",
    ],
  },

  { type: "h", text: "4. KİŞİSEL VERİLERİN TOPLANMA YÖNTEMİ" },
  {
    type: "p",
    text: "Kişisel verileriniz, Site üzerindeki iletişim/teklif formunu doldurup göndermeniz suretiyle elektronik ortamda, kısmen otomatik yollarla toplanır. Formu doldurmadığınız sürece Site üzerinden tarafımızca kişisel veriniz talep edilmez.",
  },

  { type: "h", text: "5. KİŞİSEL VERİLERİN AKTARILMASI" },
  {
    type: "p",
    text: "Kişisel verileriniz, KVKK madde 8 ve 9’da öngörülen şartlara uygun olarak ve yalnızca gerekli olduğu ölçüde aktarılır. Site’nin ve iletişim altyapısının işletilebilmesi amacıyla; form gönderimi, e-posta iletimi ve sunucu/barındırma (hosting) hizmetleri, yurt içinde veya yurt dışında konumlanabilen hizmet sağlayıcılar (tedarikçiler) aracılığıyla sunulmaktadır. Bu kapsamda kişisel verileriniz, hizmetin gerektirdiği ölçüde ilgili tedarikçilere aktarılabilir; bu tedarikçilerin sunucuları yurt dışında bulunabilir.",
  },
  {
    type: "p",
    text: "Ayrıca kişisel verileriniz, yasal olarak yetkili kamu kurum ve kuruluşlarına, mevzuatın öngördüğü hâllerde ve sınırlarda aktarılabilir.",
  },

  { type: "h", text: "6. SAKLAMA SÜRESİ" },
  {
    type: "p",
    text: "Kişisel verileriniz, işlendikleri amaç için gerekli olan süre boyunca ve ilgili mevzuatta öngörülen zamanaşımı/saklama süreleri gözetilerek muhafaza edilir. İşlenmesini gerektiren sebepler ortadan kalktığında; verileriniz, ilgili mevzuata uygun olarak silinir, yok edilir veya anonim hâle getirilir. İletişim talepleriniz sonuçlandıktan sonra, hukuki bir gereklilik bulunmadıkça verileriniz makul süre içinde imha edilir.",
  },

  { type: "h", text: "7. ÇEREZLER" },
  {
    type: "p",
    text: "Site’nin çalışması ve güvenliği için gerekli olabilecek sınırlı/teknik çerezler dışında; pazarlama, profil oluşturma veya reklam amaçlı çerez kullanılması hedeflenmemektedir. Tarayıcı ayarlarınız üzerinden çerezleri her zaman yönetebilir veya engelleyebilirsiniz.",
  },

  { type: "h", text: "8. KVKK KAPSAMINDAKİ HAKLARINIZ" },
  {
    type: "p",
    text: "KVKK madde 11 uyarınca, veri sorumlusu ŞİRKET’e başvurarak kendinizle ilgili aşağıdaki haklara sahipsiniz:",
  },
  {
    type: "list",
    items: [
      "Kişisel verilerinizin işlenip işlenmediğini öğrenme,",
      "İşlenmişse buna ilişkin bilgi talep etme,",
      "İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,",
      "Yurt içinde veya yurt dışında verilerin aktarıldığı üçüncü kişileri bilme,",
      "Eksik veya yanlış işlenmişse düzeltilmesini isteme,",
      "KVKK’da öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme,",
      "Düzeltme, silme veya yok etme işlemlerinin, verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,",
      "Münhasıran otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonuç doğmasına itiraz etme,",
      "Kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme.",
    ],
  },

  { type: "h", text: "9. BAŞVURU YÖNTEMİ" },
  {
    type: "p",
    text: "Yukarıdaki haklarınıza ilişkin taleplerinizi, kimliğinizi tevsik edici bilgilerle birlikte info@atlasistanbulteknoloji.com adresine e-posta ile veya ŞİRKET’in aşağıda belirtilen adresine yazılı olarak iletebilirsiniz. Talebiniz, niteliğine göre en kısa sürede ve en geç 30 (otuz) gün içinde ücretsiz olarak sonuçlandırılır; işlemin ayrıca bir maliyet gerektirmesi hâlinde Kurul tarifesindeki ücret talep edilebilir.",
  },

  { type: "h", text: "VERİ SORUMLUSUNUN KİMLİĞİ" },
  {
    type: "def",
    term: "Şirket Unvanı",
    text: "ATLAS İSTANBUL TEKNOLOJİ İNOVASYON HİZMETLERİ DANIŞMANLIK İÇ VE DIŞ TİCARET ANONİM ŞİRKETİ",
  },
  {
    type: "def",
    term: "Adres",
    text: "Turgut Özal Mah. 68. Sk. B Blok İş Merkezi No: 42/1 İç Kapı No: 3 Esenyurt / İstanbul",
  },
  { type: "def", term: "İnternet Adresi", text: "www.atlasistanbulteknoloji.com" },
  {
    type: "def",
    term: "Elektronik Posta Adresi",
    text: "info@atlasistanbulteknoloji.com",
  },
];
