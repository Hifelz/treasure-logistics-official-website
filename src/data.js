// import images

import HeroImg from '../src/assets/img/hero/Group-11.png';
import logo from '../src/assets/img/header/aoclogo.png';
import OverviewProductImg from '../src/assets/img/overview/product.svg';
import FacebookImg from '../src/assets/img/overview/brands/facebook.svg';
import GoogleImg from '../src/assets/img/overview/brands/google.svg';
import CocaColaImg from '../src/assets/img/overview/brands/coca-cola.svg';
import LinkedInImg from '../src/assets/img/overview/brands/linkedin.svg';
import SamsungImg from '../src/assets/img/overview/brands/samsung.svg';
import Feature1Img from '../src/assets/img/features/feature1-img.svg';
import Feature2Img from '../src/assets/img/features/feature2-img.svg';
import Feature3Img from '../src/assets/img/features/feature3-img.svg';
import CardIconImg1 from '../src/assets/img/product/cards/task.svg';
import CardIconImg2 from '../src/assets/img/product/cards/task2.svg';
import CardIconImg3 from '../src/assets/img/product/cards/task3.svg';
import PricingIcon1 from '../src/assets/img/pricing/icon1.svg';
import PricingIcon2 from '../src/assets/img/pricing/icon2.svg';
import PricingIcon3 from '../src/assets/img/pricing/icon3.svg';
import CtaImg1 from '../src/assets/img/cta/Anvisa.svg';
import CtaImg2 from '../src/assets/img/cta/CIAL.svg';
import CtaImg3 from '../src/assets/img/cta/IBAMA.svg';
import CtaImg4 from '../src/assets/img/cta/Inmetro.svg';
import CtaImg5 from '../src/assets/img/cta/MAPA.svg';
import WhatsappIcon from '../src/assets/img/copyright/icons8-whatsapp.svg';
import GmailIcon from '../src/assets/img/copyright/icons8-gmail-logo.svg';
import PhoneIcon from '../src/assets/img/copyright/icons8-phone.svg';

export const header = {
  logo: logo,
  btnText: 'Entre em Contato',
};

export const nav = [
  { name: 'Sobre nós', href: '#feature' }, 
  { name: 'Catalogo', href: '#swipe' },
  { name: 'Certificados', href: '#cta' },
  { name: 'Objetivos', href: '#product' },

];

export const hero = {
  title: 'Soluções em Comércio e Distribuição',
  subtitle: 'A AOC Imports está há mais de 10 anos no mercado, trabalhando constantemente na criação e desenvolvimento de produtos eficazes e inovadores.',
  btnText: 'Contate-nos',
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
    pretitle: 'Porque escolher a AOC Imports?',
    title: 'Melhoria contínua',
    subtitle:
      'Tornamos a opeção mais segura e transparente levando profissionalismo a todo ciclo produtivo',
    image: Feature1Img,
  },
  feature2: {
    title: 'Experiência de Mercado',
    subtitle:
      'Estamos há mais de 10 anos no mercado, trabalhando constantemente na criação e desenvolvimento de produtos eficazes e inovadores.',
    image: Feature2Img,
  },
  feature3: {
    title: 'Flexibilidade nas negociações',
    subtitle:
      'Estamos atentos às novidades do mercado, desde a redução de taxas até os pequenos detalhes no trâmites internacionais',
    image: Feature3Img,
  },
};

export const product = {
  title: 'Experiência que faz diferença ',
  subtitle:
    ' Durante essa longa jornada comercializamos e distribuímos para todo o Brasil, com qualidade em nossos produtos, possibilitando que fortalecemos nossas parcerias e construíssemos conexões duradouras.',
  cards: [
    {
      icon: CardIconImg1,
      title: 'Missão',
      subtitle: 'Diminuir distâncias e contribuir com o crescimento da economia nacional e internacional.',
      delay: 200,
    },
    {
      icon: CardIconImg2,
      title: 'Visão',
      subtitle: 'Ser referência nacional em qualidade e produtos eficazes.',
      delay: 400,
    },
    {
      icon: CardIconImg3,
      title: 'Valores',
      subtitle: 'Fidelidade, foco e competência nas vendas oferecidas aos nossos clientes. Além da valorização de nossos colaboradores.',
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


export const cta = {
  title: 'Certificados',
  subtitle: 'Nossos produtos possuem as certificações exigidas, ao adquirir você está levando segurança para o seu dia',
  btnText: '',
  img1: CtaImg1,
  img2: CtaImg2,
  img3: CtaImg3,
  img4: CtaImg4,
  img5: CtaImg5,
};

export const footer = {
  logo: 'AOC Imports',
 
  atendimento: [
    { name: 'Horário de Atendimento:' },
    { name: 'De segunda à sexta', },
    { name: 'das: 08:00 - 12:00 13:30 - 18:00', },
    
  ], links: [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/' },
    { name: 'Features', href: '/' },

  ],
  legal2: [
    { name: 'Nosso endereço:' },
    { name: 'Filial', },
    { name: 'Rua dona Rua Dr. Nereu Ramos, nº 197, Ed. Seixas Business Tower, Sala 306', },
    { name: 'Telefone :' },
    { name: '(47) 3515-2105',},
  
  ],
  newsletter: {
    title: '',
    subtitle: '',
  },
  form: {
    placeholder: '',
    smallText: '',
  },
};

export const copyright = {
  link1: {
    name: '',
    href: '/',
  },
  link2: {
    name: 'Contate-nos',
    href: '/',
  },
  copyText: 'Copyright @ 2022 hifelz',

  social: [
    { icon: WhatsappIcon, href: '' },
    { icon: GmailIcon, href: '' },
    { icon: PhoneIcon, href: '' },
  ],
};
