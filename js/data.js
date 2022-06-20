const quizLimit = 1; // default: 10
const answerTime = 15; //default: 15

const quizData = [
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        a: "Çiçekleride suladı.",
        b: "Bu dünya sana da bana da kalmaz.",
        c: "Bugün okulda eğlence var.",
        d: "Pazardan sepet de almış.",
        correct: "a",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        a: "Siz de bizimle sinemaya gelmek isterseniz gelebilirsiniz.",
        b: "Annem de bu konuda benim kararımı destekliyor.",
        c: "Ece de Esra ile aynı okula başlayacakmış.",
        d: "Televizyonunda sesini kısarsanız iyi olur.",
        correct: "d",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        a: "Sevgide sınır olmaz.",
        b: "Bu işi annemde biliyor.",
        c: "Babam fabrikada çalışıyor.",
        d: "Bugün okulda eğlence vardı.",
        correct: "b",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        a: "Sen de bizimle gel.",
        b: "Başarıya ulaşmak için günde en az sekiz saat çalışacaksın.",
        c: "Hayatta kalabilmek için uğraşıyorlar.",
        d: "Yalnız kalsanda doğru olduğuna inandığın yoldan dönmeyeceksin.",
        correct: "d",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yoktur?",
        a: "Yarın okul da parti varmış.",
        b: "Sende mi hastasın?",
        c: "Annem de komşuyla beraber pazara gitti.",
        d: "Ev de huzur kalmadı.",
        correct: "c",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yoktur?",
        a: "Trende yolculuk yapmayı severim.",
        b: "Benimde saçlarıma kar yağdı bu sonbahar.",
        c: "Sokak da oyun oynuyorlar.",
        d: "Giderkende söylemiştim ama işe yaramadı.",
        correct: "a",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        a: "Yazdığı hikâyeler bir dergide yayımlandı.",
        b: "İki yıl Galatasaray Lisesinde çalıştı.",
        c: "Şiire merakı ilkokulda başlamıştı.",
        d: "Çocuklar için şiirlerde yazdı.",
        correct: "d",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        a: "Ayşe kalemini bende unutmuş.",
        b: "Yarınki geziye ben de geleceğim.",
        c: "Yüzündeki bende irileşme mi olmuş?",
        d: "Kitabın ben de, yarın getiririm.",
        correct: "d",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        a: "Gösteride ön sıralarda olmak çok güzel.",
        b: "Bir de ne göreyim, arkadaşım yanıma gelmiş.",
        c: "Arkadaşlarınız kitaplığı da temizlesin.",
        d: "Gömleğim de mürekkep lekesi var.",
        correct: "d",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        a: "Cem de çok bozdu.",
        b: "Şişli Etfal Hastanesindeki teyzeyi de gördüm.",
        c: "Doktor maaşların da düzeltme olacak mı?",
        d: "İngilizce bilmeyen de kendine akademisyen demesin.",
        correct: "c",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yoktur?",
        a: "Her kelimeyi ayrı yazayımda Türkçe biliyor sansınlar.",
        b: "Sen gidersen bende gelirim.",
        c: "Oysa yoğurtlu sosun da içimi ferahlatması gerekiyordu.",
        d: "Sonun da Nişantaşı Üniversitesini kazandım.",
        correct: "c",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yoktur?",
        a: "Bu insanlar ne yapmak vede nereye varmak istemektedir?",
        b: "Onun karikatürleri de ahlakı gibi kötü.",
        c: "On bin lirada tazminat aldı.",
        d: "Şuradada güzel bir dere varmış.",
        correct: "b",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        a: "Blog yazımda senden bahsettim.",
        b: "Yazımda kışımda sensin benim.",
        c: "Yayında ve yapımda emeği geçenlere teşekkür ederim.",
        d: "Kar da zarar da ihtimal dahilindedir.",
        correct: "b",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        a: "On soruyu doğru cevaplayınca sertifika da veriyorlarmış.",
        b: "Bilene kolay da bilmeyen için çok zor.",
        c: "Kendi dilini yazamayanda var.",
        d: "Ben hamburger ya da tost yiyeceğim.",
        correct: "c",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        a: "Sarı sitede arabalar bir milyon olmuş.",
        b: "Market fiyatları da almış başını gidiyor.",
        c: "Yok mu güzel bir haber sen de?",
        d: "Kurulu düzeniniz olmasa da gelmezdiniz.",
        correct: "c",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yoktur?",
        a: "Netflix'i ay da yıl da bir açıyorum.",
        b: "Yapay zekada önemli ama önce insan olmak lazım.",
        c: "Sporda yapıyorum, diyette yapıyorum.",
        d: "Yüksek kaldırımda güpegündüz, Melahat'i almışım da sonra Alemdar'a gitmişim öyle mi?",
        correct: "d",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        a: "Bu Gülşen de iyice abarttı.",
        b: "Ciddi ciddi gazete alıp da okuyan kaldı mı?",
        c: "Paralel evrenler teorisinide biliyorum.",
        d: "Hiçbiri.",
        correct: "c",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        a: "Ne ad ne de sanın kalır ve unutulur gidersin.",
        b: "Dün annem elimi tutarken bugün yirmi dokuz da doldu.",
        c: "Sade laf edene de at bir çizik ve de badeyi içip sapıtana yazık.",
        d: "Hiçbiri.",
        correct: "d",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        a: "Eksi kırk derece soğuk suda bile yüzerim inan ki.",
        b: "Uzaklarda bir yerlerde güneşler doğuyor.",
        c: "İki düğme iki ayrı kolda, bizim gibi ayrı yolda.",
        d: "Hiçbiri.",
        correct: "d",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        a: "Bilgisayar ekranın da çentiğin ne işi var?",
        b: "Şarj aleti de mi vermiyorsunuz?",
        c: "Alnımızda keriz mi yazıyor?",
        d: "Hiçbiri.",
        correct: "a",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        a: "Şıklar da pek bir anlamlıydı.",
        b: "Köfte yiyeceksen Çatalca'da yiyeceksin.",
        c: "Farkın da mısın içinde bulunduğun durumun?",
        d: "Arabada beş, evde on beş defa tekrar ettim.",
        correct: "c",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        a: "doğru cevap",
        b: "xxxxxxxxxxx",
        c: "xxxxxxxxxxx",
        d: "xxxxxxxxxxx",
        correct: "a",
    },
];
