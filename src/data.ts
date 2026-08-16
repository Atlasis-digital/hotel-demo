import p1 from './assets/photos/photo_01.jpg';
import p2 from './assets/photos/photo_02.jpg';
import p3 from './assets/photos/photo_03.jpg';
import p4 from './assets/photos/photo_04.jpg';
import p5 from './assets/photos/photo_05.jpg';
import p6 from './assets/photos/photo_06.jpg';
import p7 from './assets/photos/photo_07.jpg';

export const photos = [p1, p2, p3, p4, p5, p6, p7];

export const contact = {
  name: 'Dar Lekbira',
  phone: '+216 73 000 000',
  phoneDisplay: '+216 73 000 000',
  whatsapp: '21673000000',
  address: 'Médina de Sousse, Tunisie',
  rating: '4.6',
  city: 'Sousse',
  country: 'Tunisie',
};

export type Lang = 'fr' | 'en' | 'ar';

export const i18n: Record<string, any> = {
  nav_about: { fr: 'À propos', en: 'About', ar: 'من نحن' },
  nav_rooms: { fr: 'Suites', en: 'Suites', ar: 'الأجنحة' },
  nav_gallery: { fr: 'Galerie', en: 'Gallery', ar: 'الصور' },
  nav_contact: { fr: 'Contact', en: 'Contact', ar: 'اتصل' },
  eyebrow: { fr: 'Hôtel & Riad', en: 'Hotel & Riad', ar: 'فندق ورياض' },
  hero_lead: { fr: 'Un havre méditerranéen', en: 'A Mediterranean haven', ar: 'ملاذ متوسطي' },
  about_title: { fr: 'Un havre méditerranéen', en: 'A Mediterranean haven', ar: 'ملاذ متوسطي' },
  about: { fr: 'Niché dans la médina de Sousse, Dar Lekbira est une maison de caractère où le temps suspend son vol. Pierres centenaires, zelliges et lumière dorée composent un écrin intime pour un séjour hors du commun.', en: 'Tucked in the medina of Sousse, Dar Lekbira is a house of character where time stands still. Century-old stone, zellige tiles and golden light frame an intimate stay like no other.', ar: 'في مدينة سوسة العتيقة، دار لكبيرة بيت ذو طابع حيث يتوقف الزمن. الحجارة العتيقة والزليج والضوء الذهبي يصنعون إطاراً حميمياً لإقامة استثنائية.' },
  hours: { fr: 'Réception 24h/24', en: 'Front desk 24/7', ar: 'استقبال على مدار الساعة' },
  rooms_title: { fr: 'Nos suites', en: 'Our suites', ar: 'أجنحتنا' },
  rooms: {
    fr: [
      { name: 'Suite Patio', price: 'à partir de 320 TND', desc: 'Donnant sur le patio intérieur, baignée de lumière matinale.' },
      { name: 'Suite Terrasse', price: 'à partir de 410 TND', desc: 'Terrasse privée avec vue sur les toits de la médina.' },
      { name: 'Suite Orientale', price: 'à partir de 380 TND', desc: 'Voûtes en arc, mobilier sculpté et coin salon feutré.' },
    ],
    en: [
      { name: 'Patio Suite', price: 'from 320 TND', desc: 'Overlooking the inner patio, bathed in morning light.' },
      { name: 'Terrace Suite', price: 'from 410 TND', desc: 'Private terrace with views over the medina rooftops.' },
      { name: 'Oriental Suite', price: 'from 380 TND', desc: 'Arched vaults, carved furniture and a cosy lounge corner.' },
    ],
    ar: [
      { name: 'جناح الباتيو', price: 'ابتداءً من 320 د.ت', desc: 'يطل على الباتيو الداخلي، تغمره أشعة الصباح.' },
      { name: 'جناح التراس', price: 'ابتداءً من 410 د.ت', desc: 'تراس خاص بإطلالة على أسطح المدينة العتيقة.' },
      { name: 'الجناح الشرقي', price: 'ابتداءً من 380 د.ت', desc: 'أقواس مكسوة، أثاث منحوت وصالة دافئة.' },
    ],
  } as Record<Lang, { name: string; price: string; desc: string }[]>,
  trust: {
    fr: ['Accès direct plage', 'Petit-déjeuner maison', 'Conciergerie 24/7', 'Wifi fibre'],
    en: ['Beach access', 'Homemade breakfast', '24/7 concierge', 'Fibre wifi'],
    ar: ['وصول مباشر للشاطئ', 'فطور منزلي', 'خدمة على مدار الساعة', 'واي فاي فايبر'],
  } as Record<Lang, string[]>,
  gallery_title: { fr: 'Galerie', en: 'Gallery', ar: 'الصور' },
  contact_title: { fr: 'Votre séjour commence ici', en: 'Your stay begins here', ar: 'إقامتك تبدأ هنا' },
  contact_text: { fr: 'Écrivez-nous pour réserver votre suite ou poser vos questions.', en: 'Message us to book your suite or ask any question.', ar: 'راسلنا لحجز جناحك أو لطرح أسئلتك.' },
  whatsapp: { fr: 'Écrivez-nous sur WhatsApp', en: 'Message us on WhatsApp', ar: 'راسلنا على واتساب' },
  call: { fr: 'Appeler', en: 'Call', ar: 'اتصل' },
  rights: { fr: 'Tous droits réservés', en: 'All rights reserved', ar: 'جميع الحقوق محفوظة' },
};
