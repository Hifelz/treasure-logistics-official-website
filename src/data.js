// import images

import HeroImg from '../src/assets/img/hero/image.svg';
import OverviewProductImg from '../src/assets/img/overview/product.svg';
import FacebookImg from '../src/assets/img/overview/brands/facebook.svg';
import GoogleImg from '../src/assets/img/overview/brands/google.svg';
import CocaColaImg from '../src/assets/img/overview/brands/coca-cola.svg';
import LinkedInImg from '../src/assets/img/overview/brands/linkedin.svg';
import SamsungImg from '../src/assets/img/overview/brands/samsung.svg';
import Feature1Img from '../src/assets/img/features/feature1-img.svg';
import Feature2Img from '../src/assets/img/features/feature2-img.svg';
import Feature3Img from '../src/assets/img/features/feature3-img.svg';
import ArrowRightImg from '../src/assets/img/features/arrow-right.svg';
import CardIconImg1 from '../src/assets/img/product/cards/icon1.svg';
import CardIconImg2 from '../src/assets/img/product/cards/icon2.svg';
import CardIconImg3 from '../src/assets/img/product/cards/icon3.svg';
import PricingIcon1 from '../src/assets/img/pricing/icon1.svg';
import PricingIcon2 from '../src/assets/img/pricing/icon2.svg';
import PricingIcon3 from '../src/assets/img/pricing/icon3.svg';
import AvatarImg1 from '../src/assets/img/testimonial/avatar1.png';
import AvatarImg2 from '../src/assets/img/testimonial/avatar2.png';
import AvatarImg3 from '../src/assets/img/testimonial/avatar3.png';
import AvatarImg4 from '../src/assets/img/testimonial/avatar4.png';
import AvatarImg5 from '../src/assets/img/testimonial/avatar5.png';
import CtaImg1 from '../src/assets/img/cta/image1.svg';
import CtaImg2 from '../src/assets/img/cta/image2.svg';
import WhatsappIcon from '../src/assets/img/copyright/icons8-whatsapp.svg';
import GmailIcon from '../src/assets/img/copyright/icons8-gmail-logo.svg';
import PhoneIcon from '../src/assets/img/copyright/icons8-phone.svg';

export const header = {
  logo: 'Treasure Logistics',
  btnText: 'Request a Delivery',
};

export const nav = [
  { name: 'About us', href: '#feature' },
  { name: 'Features', href: '#cta' },
  { name: 'Location', href: '#product'},
  { name: 'Feedback', href: '#testimonial' },
];

export const hero = {
  title: 'Lets SUPPORT your BUSINESS',
  subtitle: 'Helps you to organize and deliver',
  btnText: 'Place Order',
  compText: '— Web, iOS and Android',
  image: HeroImg,
};

export const overview = {
  productImg: OverviewProductImg,
  brands: [
    {
      image: FacebookImg,
      delay: 300,
    },
    {
      image: GoogleImg,
      delay: 400,
    },
    {
      image: CocaColaImg,
      delay: 500,
    },
    {
      image: LinkedInImg,
      delay: 600,
    },
    {
      image: SamsungImg,
      delay: 700,
    },
  ],
};

export const features = {
  feature1: {
    pretitle: 'Alwalys ontime',
    title: 'Real-time Delivery',
    subtitle:
      'Send your Documents, Merchandise, Textile Material (AsoEbi), Birthday Cards/Presents, Christmas Cards/Presents, Party Invitations, Hampers, Gift Baskets, Wedding Invitations, Diaries, Calendars and Anniversary Presents etc. to any location of your choice',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature1Img,
  },
  feature2: {
    pretitle: 'Free some cost',
    title: 'Save cost for you',
    subtitle:
      'You spend less when you deliver with us',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature2Img,
  },
  feature3: {
    pretitle: 'Available anytime',
    title: 'We are available anytime when you need',
    subtitle:
      '',
    btnLink: '',
    btnIcon: ArrowRightImg,
    image: Feature3Img,
  },
};

export const product = {
  title: 'Now in Ogun State Abekouta.',
  subtitle:
    'No 15 Oluwole street saraki Adigbe, Ogun state Abeokuta.',
  cards: [
    {
      icon: CardIconImg1,
      title: 'Indoor',
      subtitle: 'of Ogun State',
      delay: 200,
    },
    {
      icon: CardIconImg2,
      title: 'All Areas',
      subtitle: 'of Ogun State',
      delay: 400,
    },
    {
      icon: CardIconImg3,
      title: 'Outdoor',
      subtitle: 'of Ogun State',
      delay: 600,
    },
  ],
};

export const pricing = {
  title: 'Choose your flexible plan.',
  cards: [
    {
      icon: PricingIcon1,
      title: 'Starter Plan',
      services: [
        { name: 'Store unlimited data' },
        { name: 'Export to pdf, xls, csv' },
        { name: 'Cloud server support' },
      ],
      price: '$9.99',
      userAmount: 'up to 3 user + 1.99 per user',
      btnText: 'Get this',
      delay: 300,
    },
    {
      icon: PricingIcon2,
      title: 'Silver Plan',
      services: [
        { name: 'Store unlimited data' },
        { name: 'Export to pdf, xls, csv' },
        { name: 'Cloud server support' },
      ],
      price: '$19.99',
      userAmount: 'up to 3 user + 1.99 per user',
      btnText: 'Get this',
      delay: 600,
    },
    {
      icon: PricingIcon3,
      title: 'Diamond Plan',
      services: [
        { name: 'Store unlimited data' },
        { name: 'Export to pdf, xls, csv' },
        { name: 'Cloud server support' },
      ],
      price: '$29.99',
      userAmount: 'up to 3 user + 1.99 per user',
      btnText: 'Get this',
      delay: 900,
    },
  ],
};

export const testimonials = {
  title: 'We have Thousands of best wishers',
  clients: [
    {
      message:
        'Treasure logistic has accomplished in a few days what we expected would take 1–2 weeks. They have outstanding skills and experience."',
      image: AvatarImg1,
      name: 'George',
      position: 'CEO',
      borderColor: '#FF7235',
    },
    {
      message:
        'You delivery is swiftHave been having issues with rider,picking up is wahala,delivering in package will take 24-48hrs before the item get to the receiver What I do much like about your delivery is truth,your 12pm is 12pm..if I place a call for delivery if you tell me the item will be pickup 10am,it won’t exit that time and within 30mins the package is delivered. Thanks for making my business go smoothly,I really appreciate,God bless your business',
      image: AvatarImg2,
      name: 'Tanny moh',
      position: 'CEO',
      borderColor: '#FFBE21',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg3,
      name: 'Dr. Olivia Hansen',
      position: 'CEO',
      borderColor: '#4756DF',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg4,
      name: 'Aubrey Sanford',
      position: 'CEO',
      borderColor: '#3EC1F3',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg5,
      name: 'Terri Conroy',
      position: 'CEO',
      borderColor: '#BB7259',
    },
  ],
};

export const cta = {
  title: '20,000+ Delivered merchandise goods across Nigeria',
  subtitle: 'Treasure logistics Company Limited',
  btnText: '',
  img1: CtaImg1,
  img2: CtaImg2,
};

export const footer = {
  logo: 'Treasure Logistics',
  links: [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/' },
    // { name: 'Careers', href: '/' },
    // { name: 'Pricing', href: '/' },
    { name: 'Features', href: '/' },
    // { name: 'Blog', href: '/' },
  ],
  legal: [
    { name: 'Our office Address:'},
    { name: 'No 15 Oluwole street saraki Adigbe, Ogun state Abeokuta.', href: '/' },
    { name: 'Telephone :'},
    { name: '+234-905-127-4834 +234-7089862698', href: '/' },
    { name: 'G-mail:'},
    { name: 'stephanaduma60@gmail.com', href: '/' },
  ],
  newsletter: {
    title: 'Newsletter',
    subtitle: 'Over 25000 people have subscribed',
  },
  form: {
    placeholder: 'Enter your email',
    btnText: 'Subscribe',
    smallText: 'We don’t sell your email and spam',
  },
};

export const copyright = {
  link1: {
    name: 'Privacy & Terms',
    href: '/',
  },
  link2: {
    name: 'Contact us',
    href: '/',
  },
  copyText: 'Copyright @ 2022 damel design',
  social: [
    { icon: WhatsappIcon, href: 'https://wa.me/+2349051274834' },
    { icon: GmailIcon, href: 'stephenduma60@gmail.com' },
    { icon: PhoneIcon, href: '+2347089862698' },
  ],
};
