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
    text: "ATLAS İSTANBUL TEKNOLOJİ İNOVASYON HİZMETLERİ İÇ VE DIŞ TİCARET ANONİM ŞİRKETİ KİŞİSEL VERİLERİN İŞLENMESİNE İLİŞKİN AYDINLATMA METNİ",
  },
  {
    type: "p",
    text: "İşbu Aydınlatma Metni, ATLAS İSTANBUL TEKNOLOJİ İNOVASYON HİZMETLERİ İÇ VE DIŞ TİCARET ANONİM ŞİRKETİ (“ŞİRKET”) tarafından 6698 sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”) (Kabul Tarihi: 24/3/2016 | Yayımlandığı Resmi Gazetenin Tarihi: 7/4/2016 Sayısı: 29677) madde 10 kapsamında kişisel verilerinizin işlenmesine ilişkin amaç, kapsam, süre ve sizi etkileyebilecek diğer hususlar hakkında bilgilendirmek amacıyla hazırlanmıştır.",
  },
  {
    type: "p",
    text: "Kişisel verilerinizin işbu Aydınlatma Metni kapsamında işlenmesine ilişkin detaylı bilgilere www.atlasistanbulteknoloji.com adresinde yer alan Gizlilik ve Kişisel Verilerin Korunması Politikası’ndan ulaşabilirsiniz. ŞİRKET’e aktarılan kişisel verilerin korunması konusundaki temel bilgilere aşağıda yer verilmiştir. ŞİRKET, Kanun’un m. 10’dan doğan aydınlatma yükümlülüğünü yerine getirmek amacıyla aşağıdaki açıklamaları web-sitemizi, mobil siteyi ve/veya mobil uygulamalarımızı kullanan kullanıcı veya ilgili kişinin dikkatine sunar.",
  },
  {
    type: "p",
    text: "ŞİRKET işbu Kişisel Verilerin Korunması Hakkında Açıklama metnini ve Gizlilik ve Kişisel Verilerin Korunması Politikasını (\"Gizlilik Politikasını\") yürürlükteki mevzuatta yapılabilecek değişiklikler çerçevesinde her zaman güncelleme ve Gizlilik Politikasını daha kolay okunabilir hale getirebilmek amacıyla birtakım değişiklikler yapma hakkını saklı tutar.",
  },
  {
    type: "p",
    text: "Gizlilik Politikamızın kapsamı; 6698 sayılı Kanun Madde 10 - Veri Sorumlusunun Aydınlatma Yükümlülüğü hükmü, Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR) ve ilgili sair mevzuat uyarınca düzenlenmiş olup kişisel verilerinizin ne şekilde kullanıldığına ilişkin aydınlatılmanız amacıyla erişiminize sunulmuştur.",
  },
  { type: "p", text: "Gizlilik Politikamız, güncellendiği şekliyle;" },
  {
    type: "list",
    items: [
      "Kişisel verileri işlenen kişi grupları,",
      "Kişisel veri kategorileri,",
      "Kişisel verilerin işlendiği iş süreçleri,",
      "Kişisel veri güvenliği sağlanmasına yönelik alınan tedbirler ve her bir kişisel veri kategorisine ilişkin saklama sürelerine dair detaylı bilgiler içermektedir.",
    ],
  },
  {
    type: "p",
    text: "Yukarıda ve Kişisel Verilerin İşlenmesi Politikası’nda yapılan açıklamalar çerçevesinde işbu Aydınlatma Metni ile Gizlilik ve Kişisel Verilerin Korunması Politikası’nı okuyup anladığınızı ve kişisel verilerinizin işlenmesine rıza gösterdiğinizi, site içerisinde üye olurken işaretlemeniz gereken kutucukları işaretlemeniz ile kabul etmiş olacağınızı tarafınıza bildirmekteyiz.",
  },

  { type: "h", text: "1. TANIMLAR" },
  { type: "p", text: "6698 Sayılı Kişisel Verilerin Korunması Kanunu madde 3 kapsamında;" },
  {
    type: "def",
    term: "Açık rıza",
    text: "Belirli bir konuya ilişkin, bilgilendirilmeye dayanan ve özgür iradeyle açıklanan rızayı (KVK Kurumu rehberine göre açık rızanın, rıza veren kişinin olumlu irade beyanını içermesi gerekmektedir. Diğer mevzuatlardaki düzenlemeler saklı kalmak üzere, açık rızanın yazılı şekilde alınmasına gerek yoktur. Elektronik ortamda alınması da mümkündür.),",
  },
  {
    type: "def",
    term: "Anonim hâle getirme",
    text: "Kişisel verilerin, başka verilerle eşleştirilerek dahi hiçbir surette kimliği belirli veya belirlenebilir bir gerçek kişiyle ilişkilendirilemeyecek hâle getirilmesini,",
  },
  { type: "def", term: "Başkan", text: "Kişisel Verileri Koruma Kurumu Başkanını," },
  { type: "def", term: "İlgili kişi", text: "Kişisel verisi işlenen gerçek kişiyi," },
  {
    type: "def",
    term: "Kişisel veri",
    text: "Kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgiyi,",
  },
  {
    type: "def",
    term: "Kişisel verilerin işlenmesi",
    text: "Kişisel verilerin tamamen veya kısmen otomatik olan ya da herhangi bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla elde edilmesi, kaydedilmesi, depolanması, muhafaza edilmesi, değiştirilmesi, yeniden düzenlenmesi, açıklanması, aktarılması, devralınması, elde edilebilir hâle getirilmesi, sınıflandırılması ya da kullanılmasının engellenmesi gibi veriler üzerinde gerçekleştirilen her türlü işlemi,",
  },
  { type: "def", term: "Kurul", text: "Kişisel Verileri Koruma Kurulunu," },
  { type: "def", term: "Kurum", text: "Kişisel Verileri Koruma Kurumunu," },
  {
    type: "def",
    term: "Veri işleyen",
    text: "Veri sorumlusunun verdiği yetkiye dayanarak onun adına kişisel verileri işleyen gerçek veya tüzel kişiyi,",
  },
  {
    type: "def",
    term: "Veri kayıt sistemi",
    text: "Kişisel verilerin belirli kriterlere göre yapılandırılarak işlendiği kayıt sistemini,",
  },
  {
    type: "def",
    term: "Veri sorumlusu",
    text: "Kişisel verilerin işleme amaçlarını ve vasıtalarını belirleyen, veri kayıt sisteminin kurulmasından ve yönetilmesinden sorumlu olan gerçek veya tüzel kişiyi,",
  },
  {
    type: "def",
    term: "Kullanıcı",
    text: "www.atlasistanbulteknoloji.com internet sitesine üye olarak satıcı (freelancer) ve/veya alıcı (işveren) konumunda bulunan gerçek/tüzel kişiyi ifade etmektedir.",
  },

  { type: "h", text: "2. KİŞİSEL VERİLERİN TOPLANMASININ YASAL DAYANAĞI" },
  {
    type: "p",
    text: "Kişisel verilerin korunması, ATLAS İSTANBUL TEKNOLOJİ İNOVASYON HİZMETLERİ İÇ VE DIŞ TİCARET ANONİM ŞİRKETİ için en üst düzey hassasiyete sahip bir konudur. ŞİRKET, 6698 Sayılı Kişisel Verilerin Korunması Kanunu (“KVK Kanunu”) ve kişisel verilerin korunmasına ilişkin mevzuata uyum sağlanması amacıyla KVK Kanunu’nun, 6563 Sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun’un, 5237 Sayılı Türk Ceza Kanunu’nun kişisel verilere ilişkin öngördüğü ilkeleri benimsemektedir.",
  },
  {
    type: "p",
    text: "ŞİRKET, kişisel verilerin işlenmesi, silinmesi, yok edilmesi, anonim hâle getirilmesi, aktarılması, ilgili kişinin aydınlatılması ve veri güvenliğinin sağlanmasıyla ilgili yükümlülüklerini yerine getirmektedir. Bu kapsamda düzenlenen Gizlilik ve Kişisel Verilerin Korunması Politikası, kişisel verisi işlenen gerçek kişilerin (“İlgili Kişi”) erişimine sunulmaktadır. Kişisel Verilerin İşlenmesi Politikası’nda yapılan açıklamalar çerçevesinde işbu Politikayı okuyup anladığınızı ve kişisel verilerinizin işlenmesine rıza gösterdiğinizi, site içerisinde üye olurken işaretlemeniz gereken kutucukları işaretlemeniz ile kabul etmiş olacağınızı tarafınıza bildirmekteyiz.",
  },

  { type: "h", text: "3. GENEL İLKELER" },
  {
    type: "p",
    text: "Kişisel verilerin işlenmesinde 6698 Sayılı Kişisel Verilerin Korunması Kanunu madde 4’te belirtilen ilkelere uyulması zorunludur:",
  },
  {
    type: "def",
    term: "Hukuka ve dürüstlük kurallarına uygun olma",
    text: "ŞİRKET, kişisel verileri ilgili mevzuata ve dürüstlük kuralının gereklerine uygun olarak, meşru bir temele dayanarak, şeffaflığı ilke edinerek işler ve bu sınırlar içerisinde kullanır. Kişisel veriler, bireylerin makul beklentileri ve öngörüleri doğrultusunda işlenmektedir.",
  },
  {
    type: "def",
    term: "Doğru ve gerektiğinde güncel olma",
    text: "ŞİRKET, kişisel veri sahiplerinin temel haklarını ve meşru menfaatlerini dikkate alarak işlediği kişisel verilerin doğru ve güncel olmasını sağlar. Verilerinizde herhangi bir değişiklik olması halinde, belirtilen iletişim kanalları üzerinden bizimle iletişime geçerek güncellemenizi rica ederiz.",
  },
  {
    type: "def",
    term: "Abonelik ve Platform Süreçleri Düzenlemesi",
    text: "ŞİRKET platformu, belirlenen ücretsiz hizmet süreleri dahilinde kullanıcılarına kendilerine tanımlanan iş hakkı ve ilan hakkı kapsamında hizmet sağlayacaktır. İlgili ücretsiz dönemin sona ermesini takiben, kullanıcıların platformu kullanmaya devam edebilmeleri için ŞİRKET tarafından sunulan uygun abonelik paketlerinden birini satın almaları gerekmektedir. Güncel iletişim adresi: info@atlasistanbulteknoloji.com",
  },
  {
    type: "def",
    term: "Belirli, açık ve meşru amaçlar için işlenme",
    text: "ŞİRKET’in, veri işleme amacını açık ve kesin olarak belirlemesini ve bu amacın meşru olmasını zorunlu kılmaktadır. ŞİRKET, bu ilke çerçevesinde ticari faaliyetlerinin gerektirdiği belirli, açık ve meşru amaçlarla kişisel veri işleme faaliyetleri yürütmektedir.",
  },
  {
    type: "def",
    term: "İşlendikleri amaçla bağlantılı, sınırlı ve ölçülü olma",
    text: "İşlenen verilerin, belirlenen amaçların gerçekleştirilebilmesine elverişli olmasını, amacın gerçekleştirilmesiyle ilgisi olmayan veya ihtiyaç duyulmayan kişisel verilerin işlenmemesini gerektirmektedir.",
  },
  {
    type: "def",
    term: "İlgili mevzuatta öngörülen veya işlendikleri amaç için gerekli olan süre kadar muhafaza edilme",
    text: "ŞİRKET, kişisel verileri, ancak işlendikleri amaç için gerekli olan süre kadar muhafaza etmektedir. Bir kişisel verinin daha fazla saklanması için geçerli bir sebep olmaması durumunda, söz konusu veri silinir, yok edilir veya anonim hâle getirilir.",
  },

  { type: "h", text: "4. KİŞİSEL VERİLERİN İŞLENME ŞARTLARI" },
  {
    type: "p",
    text: "KVK Kanunu kapsamında kişisel veriler, ilgili kişinin açık rızası olmaksızın işlenemez. Ancak, KVK Kanunu madde 5/2 hükmünde sayılan hallerde kişisel verilerin ilgili kişinin açık rızası olmaksızın işlenmesi mümkündür. Aşağıdaki şartlardan birinin varlığı hâlinde, ilgili kişinin açık rızası aranmaksızın kişisel verilerinin işlenmesi mümkündür:",
  },
  {
    type: "list",
    items: [
      "Kanunlarda açıkça öngörülmesi,",
      "Fiili imkânsızlık nedeniyle rızasını açıklayamayacak durumda bulunan veya rızasına hukuki geçerlilik tanınmayan kişinin kendisinin ya da bir başkasının hayatı veya beden bütünlüğünün korunması için zorunlu olması,",
      "Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması,",
      "Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması,",
      "İlgili kişinin kendisi tarafından alenileştirilmiş olması,",
      "Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması,",
      "İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması.",
    ],
  },

  { type: "h", text: "5. KİŞİSEL VERİLERİN TOPLANMASINDA YÖNTEMLER" },
  {
    type: "p",
    text: "ŞİRKET, kişisel verilerinizi; işitsel, elektronik veya yazılı olarak, KVK Kanunu’nda belirtilen kişisel veri işleme şartlarına uygun şekilde ve işbu Gizlilik ve Kişisel Verilerin Korunması Politikası’nda belirtilen hukuki sebepler doğrultusunda toplamaktadır. ŞİRKET, kişisel verilerinizin gizliliği, bütünlüğü ve güvenliğinin sağlanması için gerekli teknik ve idari tedbirleri almayı ve gerekli özeni göstermeyi taahhüt etmektedir.",
  },
  {
    type: "p",
    text: "ŞİRKET, kayıt aşamasında kullanıcılardan talep ettiği ad, soyad, e-posta adresi ve şifre bilgilerini, kullanıcıların açık rızası doğrultusunda; ortaklık içerisinde bulunduğu aracı kurumlar ile pazarlama faaliyetleri kapsamında ve ayrıca ödeme altyapılarının doğru ve güvenli bir şekilde kullanılabilmesi amacıyla paylaşabilir. Kayıt aşamasında girilen bilgiler, satıcı tarafından ilan açılması halinde diğer kullanıcılar tarafından görülebilecektir.",
  },

  { type: "h", text: "6. KİŞİSEL VERİLER HANGİ AMAÇLARLA İŞLENMEKTEDİR?" },
  {
    type: "p",
    text: "ŞİRKET, kişisel verilerinizi başta açık rızanız olmak üzere, devamında ise mevzuatın izin verdiği durumlarda ve ölçüde kaydedebilir, saklayabilir, güncelleyebilir, üçüncü kişilere açıklayabilir, devredebilir, sınıflandırabilir, işleyebilir ve bu amaçların gerektirdiği süre boyunca muhafaza edebilir. Kişisel verileriniz şu amaçlarla kullanılmaktadır:",
  },
  {
    type: "list",
    items: [
      "ŞİRKET ve ŞİRKET ile iş ilişkisi içerisinde olan kişi ve kurumların hukuki ve ticari güvenliğinin temini,",
      "Yasal yükümlülüklerin yerine getirilmesi ve yürürlükteki mevzuattan doğan hakların kullanılabilmesi,",
      "Kamu güvenliğine ilişkin hususlarda talep halinde ve mevzuat gereği kamu görevlilerine bilgi verilmesi,",
      "Üyelik işlemlerinin yapılabilmesi, veri tabanı oluşturulabilmesi,",
      "İnternet sitesi üzerinden sunulan hizmetlerin iyileştirilmesi, yeni hizmetlerin geliştirilmesi ve bununla ilgili bilgilendirme yapılması,",
      "Mesafeli Satış Sözleşmesi ve Tüketicinin Korunması Hakkında Kanun kapsamında akdedilen sözleşmeler uyarınca yükümlülüklerin ifası,",
      "İletişim için gerekli kullanıcı bilgilerinin (ad/soyad, unvan, adres, e-posta vb.) işlenmesi,",
      "Kullanıcı memnuniyetinin artırılması, pazarlama ve reklam faaliyetleri yürütülmesi,",
      "Kullanıcı şikâyet ve önerilerinin değerlendirilmesi,",
      "İnternet sitesi/mobil uygulama üzerinden işlem yapan kullanıcıların kimlik bilgilerinin teyit edilmesi,",
      "Şirket birimleri arasında koordinasyon, iş birliği ve verimliliğin sağlanması,",
      "İnternet sitesi ve diğer elektronik sistemlerin ve fiziki ortamların güvenliğinin sağlanması,",
      "Sözleşmeye ve kanuna aykırılıkların soruşturulması, tespiti, önlenmesi,",
      "Mevcut ve çıkabilecek hukuki uyuşmazlıkların çözümlenmesi,",
      "Talep ve soruların cevaplanması,",
      "İnsan kaynakları politikaları çerçevesinde işe alım süreçlerinin yürütülmesi,",
      "Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması,",
      "ŞİRKET’in meşru menfaatlerinin korunması.",
    ],
  },

  { type: "h", text: "7. KİŞİSEL VERİLERİNİZİN AKTARILMASI" },
  {
    type: "p",
    text: "KVK Kanunu kapsamında kişisel veriler her ne kadar ilgili kişinin açık rızası olmaksızın aktarılamıyor olsa da, KVK Kanunu madde 8 ve 9 hükümleri uyarınca gerekli şartlar sağlandığı takdirde kişisel verilerin ilgilinin açık rızası olmaksızın aktarılması mümkündür.",
  },
  {
    type: "p",
    text: "ŞİRKET, Kanun’un 5. maddesinin 2. fıkrası ve 6. maddesinin 3. fıkrası uyarınca aranan şartlardan birinin varlığı hâlinde ve gerekmesi halinde Kanun’un 9. maddesinin 2. fıkrasına uygunluğu sağlayarak kullanıcının açık rızasını aramaksızın kişisel verileri üçüncü kişilere aktarabilecektir. Kişisel verileriniz; mevcut ve ilerideki iştiraklerimiz, bağlı şirketlerimiz, ortaklarımız, haleflerimiz ve/veya bunların belirleyecekleri üçüncü kişilere/kuruluşlara paylaşılabilir, aktarılabilir, bu kişiler tarafından işlenebilir, saklanabilir, sınıflandırılabilir ve kullanılabilir.",
  },

  { type: "h", text: "8. KİŞİSEL VERİLER NASIL KORUNMAKTADIR?" },
  {
    type: "p",
    text: "ŞİRKET ile paylaşılan kişisel veriler, ŞİRKET’in gözetimi ve kontrolü altındadır. ŞİRKET, yürürlükteki ilgili mevzuat hükümleri gereğince bilginin gizliliğinin ve bütünlüğünün korunması amacıyla gerekli organizasyonu kurmak, teknik ve idari önlemleri almak ve uyarlamak konusunda veri sorumlusu sıfatıyla sorumluluğu üstlenmiştir.",
  },

  { type: "h", text: "9. KİŞİSEL VERİLERİN KORUNMASI KANUNU’NDAN DOĞAN HAKLARINIZ" },
  {
    type: "p",
    text: "KVK Kanunu madde 11 kapsamında herkes, veri sorumlusuna başvurarak kendisiyle ilgili:",
  },
  {
    type: "list",
    items: [
      "Kişisel veri işlenip işlenmediğini öğrenme,",
      "Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,",
      "Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,",
      "Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,",
      "Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,",
      "Öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme,",
      "Düzeltme, silme veya yok etme işlemlerinin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,",
      "İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,",
      "Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme, haklarına sahiptir.",
    ],
  },

  { type: "h", text: "10. ÇEREZLER NASIL KULLANILMAKTADIR?" },
  {
    type: "p",
    text: "Çerezler internet sitesinden gönderilmiş ve kullanıcının ağ tarayıcısına kayıt edilmiş küçük veri parçalarıdır. Çerezler bilgisayarınıza herhangi bir zarar vermemekte ve bazıları belirli bir süreden sonra otomatik olarak silinmektedir. ŞİRKET, “çerezler” yoluyla kullanıcılarının gezinme bilgilerini ve/veya kullanım geçmişini izleyerek, ziyaretçi hareket ve tercihlerini analiz ederek yorumlamaktadır.",
  },
  { type: "p", text: "Kullanılabilecek çerezler, sınırlı olmamakla birlikte aşağıda sayılmıştır:" },
  {
    type: "def",
    term: "a. Tercih Çerezleri",
    text: "Kullanıcıların yaptığı tercihleri hatırlamak ve web sitesi, mobil uygulama ve mobil site kullanımını kişiselleştirmek için kullanılmaktadır.",
  },
  {
    type: "def",
    term: "b. Analitik Çerezler",
    text: "Platforma nereden ve hangi cihazlardan bağlandığınız, hangi içeriği görüntülediğiniz ve ziyaretinizin tarihi, saati, süresi gibi platformu nasıl kullandığınızın tespitini sağlar.",
  },
  {
    type: "def",
    term: "c. Üçüncü Kişi Çerezleri",
    text: "Üyenin sitenin belirli sayfalarında ve kontrolümüz dışında üçüncü kişilerin çerezleri ile de karşılaşması mümkündür.",
  },
  {
    type: "def",
    term: "d. Hedefleme/Reklam Çerezleri",
    text: "Bu çerezler aracılığıyla toplanan veriler değerlendirilerek, daha sonra başka web sitelerini ziyaretiniz sırasında ilgilenebileceğiniz ürünlere ilişkin reklamlar gösterilebilmektedir.",
  },
  {
    type: "p",
    text: "İnternet tarayıcınızın çeşidine göre (Google Chrome, Internet Explorer, Mozilla Firefox, Safari vb.) ilgili ayarlardan çerezler hakkında bilgi edinip, izin verme veya reddetme hakkınızı kullanabilirsiniz. Çerez yönetimi için Privacy Badger uygulamasını da kullanabilirsiniz (https://www.eff.org/tr/privacybadger).",
  },

  { type: "h", text: "11. MEVZUAT DEĞİŞİKLİKLERİNDEN NASIL HABERDAR OLABİLİRİM?" },
  {
    type: "p",
    text: "ŞİRKET platformu, operasyonel ve stratejik planlamaları doğrultusunda abonelik sistemlerini, Kullanım Sözleşmesi'ni, Gizlilik Politikası'nı ve Kişisel Verilerin Korunması (KVKK) Metni gibi dokümanları yasal mevzuata uyum kapsamında güncelleyebilir. Yasal değişikliklerin olması halinde sayfamızda yer alan bu bilgileri yeni mevzuata uygun şekilde güncelleyeceğimizi bildiririz.",
  },

  { type: "h", text: "12. KİŞİSEL VERİNİN YOK EDİLMESİ, SİLİNMESİ VE ANONİMLEŞTİRİLMESİ" },
  {
    type: "p",
    text: "ŞİRKET, web sitesi / mobil uygulaması / mobil sitesi aracılığıyla işlediği kişisel verileri, KVK Kanunu madde 7, 17 ve Türk Ceza Kanunu madde 138 uyarınca ilgili kanunların öngördüğü süreler ve/veya işleme amacının gerekli kıldığı süreler boyunca saklamaktadır. İşlenmesini gerektiren sebeplerin ortadan kalktığı kişisel verileri silmek, yok etmek veya anonim hâle getirmek veri sorumlusunun yükümlülüklerindendir.",
  },
  {
    type: "p",
    text: "KVK Kanunu’nda yer alan kişisel veri işleme şartlarının varlığını ortadan kaldıracak kişisel veri işleme amaçlarının sona ermesi halinde, ŞİRKET tarafından kişisel veriler, “Kişisel Verilerin Silinmesi, Yok Edilmesi veya Anonim Hale Getirilmesi Hakkında Yönetmelik” kapsamında imha edilecektir.",
  },

  { type: "h", text: "13. DEĞİŞİKLİKLER" },
  {
    type: "p",
    text: "İşbu Gizlilik ve Kişisel Verilerin Korunması Politikası’nda muhtelif zamanlarda değişiklik yapmamız mümkündür. Politikanın güncel sürümüne www.atlasistanbulteknoloji.com internet sitesinden ulaşılabilir. Değişiklikler kural olarak, internet sitesine yüklenmek suretiyle yapılacak ve bu tarih itibariyle geçerlilik kazanacaktır.",
  },

  { type: "h", text: "14. SORULARINIZ İÇİN" },
  {
    type: "p",
    text: "Bize kişisel verilerinizle ilgili her türlü soru ve görüşleriniz için destek@atlasistanbulteknoloji.com e-posta adresinden dilediğiniz zaman ulaşabilirsiniz.",
  },

  { type: "h", text: "VERİ SORUMLUSUNUN KİMLİĞİ" },
  {
    type: "def",
    term: "Şirket Unvanı",
    text: "ATLAS İSTANBUL TEKNOLOJİ İNOVASYON HİZMETLERİ İÇ VE DIŞ TİCARET ANONİM ŞİRKETİ",
  },
  {
    type: "def",
    term: "Adres",
    text: "TURGUT ÖZAL MAH. 68. SK. B BLOK İŞ MERKEZİ NO: 42/1 İÇ KAPI NO: 3 ESENYURT / İSTANBUL",
  },
  { type: "def", term: "İnternet Adresi", text: "www.atlasistanbulteknoloji.com" },
  {
    type: "def",
    term: "Elektronik Posta Adresi",
    text: "info@atlasistanbulteknoloji.com",
  },
];
