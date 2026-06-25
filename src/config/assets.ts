import backgroundImg from '@/assets/images/home/Background-01.webp';
import backgroundDesktopImg from '@/assets/images/home/Background-Desktop.webp';
import englishLogoImg from '@/assets/images/home/EnglishLogo-01.webp';
import arabicLogoImg from '@/assets/images/home/ArabicLogo-01.webp';
import dallahImg from '@/assets/images/home/Dallah.png';
import homeHeroImg from '@/assets/images/home/HeroSectionDesign.jpg';
import instagramIconImg from '@/assets/images/home/InstaIcon-01.webp';
import instagramIconEnImg from '@/assets/images/home/InstaIcon-01-EN.webp';
import tiktokIconImg from '@/assets/images/home/TiktokIcon-02.webp';
import tiktokIconEnImg from '@/assets/images/home/TiktokIcon-02-EN.webp';
import snapchatIconImg from '@/assets/images/home/SnapIcon-04.webp';
import snapchatIconEnImg from '@/assets/images/home/SnapIcon-04-EN.webp';
import whatsappIconImg from '@/assets/images/home/WhatsAppIcon-03.webp';
import whatsappIconEnImg from '@/assets/images/home/WhatsAppIcon-03-EN.webp';
import menuCard01Img from '@/assets/images/menu/CardImage-01.webp';
import menuCard02Img from '@/assets/images/menu/CardImage-02.webp';
import menuCard03Img from '@/assets/images/menu/CardImage-03.webp';
import menuCard04Img from '@/assets/images/menu/CardImage-04.webp';
import menuCard05Img from '@/assets/images/menu/CardImage-05.webp';
import menuCard06Img from '@/assets/images/menu/CardImage-06.webp';
import menuCard07Img from '@/assets/images/menu/CardImage-07.webp';
import menuCard08Img from '@/assets/images/menu/CardImage-08.webp';
import menuCard09Img from '@/assets/images/menu/CardImage-09.webp';
import menuCard10Img from '@/assets/images/menu/CardImage-10.webp';
import menuCard11Img from '@/assets/images/menu/CardImage-11.webp';
import storyHeroImg from '@/assets/images/story/story-hero.png';
import mapIllustrationImg from '@/assets/images/locations/map-illustration.png';
import locationCardImg from '@/assets/images/locations/LocationsPageCardImage01-01.webp';
import locationCardIconCarImg from '@/assets/images/locations/CardIcons-01.webp';
import locationCardIconClockImg from '@/assets/images/locations/CardIcons-02.webp';
import locationCardIconWhatsappImg from '@/assets/images/locations/CardIcons-03.webp';
import locationButtonArImg from '@/assets/images/locations/CardLocationButton-AR.webp';
import locationButtonEnImg from '@/assets/images/locations/CardLocationButton-EN-01.webp';
import contactHeroImg from '@/assets/images/contact/contact-hero.png';
import contactCardImg from '@/assets/images/contact/ContactPageCardImge-01.webp';

export const ASSETS = {
  background: backgroundImg,
  backgroundDesktop: backgroundDesktopImg,
  logo: {
    english: englishLogoImg,
    arabic: arabicLogoImg,
  },
  dallah: dallahImg,
  heroes: {
    home: homeHeroImg,
    story: storyHeroImg,
    contact: contactHeroImg,
  },
  contact: {
    card: contactCardImg,
  },
  menu: {
    cards: [
      menuCard01Img,
      menuCard02Img,
      menuCard03Img,
      menuCard04Img,
      menuCard05Img,
      menuCard06Img,
      menuCard07Img,
      menuCard08Img,
      menuCard09Img,
      menuCard10Img,
      menuCard11Img,
    ],
  },
  locations: {
    map: mapIllustrationImg,
    card: locationCardImg,
    icons: {
      car: locationCardIconCarImg,
      clock: locationCardIconClockImg,
      whatsapp: locationCardIconWhatsappImg,
    },
    button: {
      ar: locationButtonArImg,
      en: locationButtonEnImg,
    },
  },
  social: {
    ar: {
      instagram: instagramIconImg,
      tiktok: tiktokIconImg,
      snapchat: snapchatIconImg,
      whatsapp: whatsappIconImg,
    },
    en: {
      instagram: instagramIconEnImg,
      tiktok: tiktokIconEnImg,
      snapchat: snapchatIconEnImg,
      whatsapp: whatsappIconEnImg,
    },
  },
} as const;
