// Centralized data file for Project Gunita Digital Hub
// Edit this file to update site content without touching components

export const navLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'News', to: 'news' },
  { label: 'Archives', to: 'archives' },
  { label: 'Events', to: 'events' },
  { label: 'Contact', to: 'contact' },
];

export const heroData = {
  tagline: 'Defend Historical Truth',
  ctaButtons: [
    {
      label: 'Check Out Our Digital Archives',
      href: 'https://drive.google.com/drive/folders/1WGzCtbbBJZkAjWsTxWkETp7FKLD1EvAj?usp=sharing',
      variant: 'primary',
      external: true,
    },
    {
      label: 'Contact Us',
      href: 'mailto:archives@projectgunita.com',
      variant: 'outline',
      external: false,
    },
  ],
};

export const aboutData = {
  title: 'About Us',
  paragraphs: [
    'Project Gunita is an academic research organization focused on debunking myths and countering historical distortion of Philippine contemporary history.',
    'The Project began as an online initiative to archive books, magazines, and other relevant materials that document the abuses during the Marcos dictatorship and expanded to on-the-ground projects such as partnering with schools and organizing different activities that popularize the fight against disinformation and historical distortion.',
  ],
  stats: [
    {
      value: '100+',
      label: 'Newspapers and documents digitized from the Martial Law era',
    },
  ],
};

export const newsArticles = [
  {
    id: 1,
    title: 'Project Gunita seeks to preserve PH\'s Martial Law history',
    excerpt: 'MANILA — While President Ferdinand Marcos Jr. is in New York talking about the Philippines\' future in relation to the world...',
    source: 'ABS-CBN News',
    readUrl: 'https://www.abs-cbn.com/video/news/09/21/22/project-gunita-seeks-to-preserve-phs-martial-law-history',
    category: 'News Coverage',
  },
  {
    id: 2,
    title: 'Not ending with archives: What\'s next for Project Gunita',
    excerpt: 'MANILA, Philippines — Following the launch of Project Gunita, a citizen-led online archive of Martial Law era materials, it seems...',
    source: 'PhilStar',
    readUrl: 'https://www.philstar.com/headlines/2022/07/14/2195391/not-ending-archives-whats-next-project-gunita',
    category: 'News Coverage',
  },
  {
    id: 3,
    title: 'Project Gunita launches Metro Manila map of EDSA People Power history',
    excerpt: 'MANILA, Philippines – In commemoration of the 38th anniversary of the EDSA People Power Revolution, Project Gunita released a map...',
    source: 'Rappler',
    readUrl: 'https://www.rappler.com/moveph/project-gunita-launches-metro-manila-map-history-edsa-people-power-2024/',
    category: 'News Coverage',
  },
  {
    id: 4,
    title: 'Keeping stories of Martial Law victims alive',
    excerpt: 'MANILA, Philippines – Project Gunita started out as a passion project between friends who wanted to digitize books, documents, magazines...',
    source: 'Rappler',
    readUrl: 'https://www.rappler.com/moveph/project-gunita-keeping-stories-martial-law-victims-alive/',
    category: 'News Features',
  },
  {
    id: 5,
    title: 'The truth will outshine the lies',
    excerpt: 'The academic organization Project Gunita and dozens of groups and individuals, including victims of rights violations during martial law, are taking President...',
    source: 'CoverStory',
    readUrl: 'https://coverstory.ph/project-gunita-et-al-the-truth-will-outshine-the-lies/',
    category: 'News Features',
  },
  {
    id: 6,
    title: 'Project Gunita: Marcos, Duterte not anti-corruption advocates',
    excerpt: 'Project Gunita\'s materials are mostly sourced from collectors who have donated or sold archival materials from the era. The group\'s digital archive...',
    source: 'Inquirer',
    readUrl: 'https://newsinfo.inquirer.net/2112029/project-gunita-marcos-duterte-not-anti-corruption-advocates',
    category: 'News Features',
  },
  {
    id: 7,
    title: 'Preserving the memories of the Marcos era',
    excerpt: 'A citizen-led online archive aims to preserve the memories of the Marcos dictatorship era through digitized books, documents, and other materials...',
    source: 'NHK World',
    readUrl: 'https://www3.nhk.or.jp/nhkworld/en/news/backstories/2142/',
    category: 'News Features',
  },
  {
    id: 8,
    title: 'Paggunita ng Ninoy Aquino Day, paalala sa papel ng mamamayan',
    excerpt: 'Ayon kay Atty. Josiah David Quising, co-founder ng advocacy group na Project Gunita, ang paggunita sa Ninoy Aquino Day ay hindi lamang pagbabalik-tanaw...',
    source: 'Bombo Radyo',
    readUrl: 'https://dagupan.bomboradyo.com/paggunita-ng-ninoy-aquino-day-paalala-sa-papel-ng-mamamayan-sa-pagtataguyod-ng-demokrasya/',
    category: 'News Coverage',
  },
  {
    id: 9,
    title: 'EDSA People Power Revolution na hindi na holiday',
    excerpt: 'Dagupan City – Making tanka na baluktutin ang nakaraan. Ito ang naging saloobin ni Karl Patrick Suyat, Project Gunita and August 21 Movement (ATOM).',
    source: 'Bombo Radyo',
    readUrl: 'https://dagupan.bomboradyo.com/kauna-unahang-pagkakataon-na-igugunita-ang-edsa-people-power-revolution-na-hindi-na-holiday-isang-malaking-banta-na-kalimutan-na-ang-kasaysayan-sa-project-gunita-and-august-21-movement-atom/',
    category: 'News Coverage',
  },
  {
    id: 10,
    title: 'Project Gunita appeals to protesters for upcoming September 21 rallies',
    excerpt: 'MANILA, Philippines — Non-government archiving initiative Project Gunita appealed to protesters for the upcoming September 21 rallies...',
    source: 'News Coverage',
    readUrl: '#',
    category: 'News Coverage',
  },
];

export const archiveCategories = [
  {
    id: 1,
    title: 'Newspapers',
    description: 'Access periodicals that reported—and sometimes resisted—the narratives of the Martial Law era.',
    icon: 'bi-newspaper',
  },
  {
    id: 2,
    title: 'Books',
    description: 'Delve into scholarly works and testimonies that dissect the complexities of dictatorship and resistance.',
    icon: 'bi-book',
  },
  {
    id: 3,
    title: 'Leaflets, Posters, Etc.',
    description: 'Explore campaign and protest materials that fueled the struggle for truth and freedom.',
    icon: 'bi-file-earmark-richtext',
  },
  {
    id: 4,
    title: 'Official Reports',
    description: 'Review critical investigations and government records that document abuses and accountability efforts.',
    icon: 'bi-file-earmark-text',
  },
  {
    id: 5,
    title: 'Retrieved Collections',
    description: 'Uncover rare and salvaged materials donated by private individuals that preserve the memories often erased from official history.',
    icon: 'bi-archive',
  },
  {
    id: 6,
    title: 'Documentaries',
    description: 'Experience powerful visual accounts capturing the voices, events, and legacies of Martial Law.',
    icon: 'bi-camera-reels',
  },
];

export const events = [
  {
    id: 1,
    title: 'Cross-Border Sharing Session from Martial Law Survivors in the Philippines and Taiwan',
    description: 'A hybrid event held simultaneously in the Philippines and Taiwan where martial law survivors from both countries shared their experiences.',
    date: '09.20.2024',
  },
  {
    id: 2,
    title: 'Alipato at Muog Blockscreening with Talkback',
    description: 'A special screening for the movie-documentary Alipato at Muog in Iloilo City with special talk back from its Director JL Burgos and local victims of enforced disappearances.',
    date: '11.30.2024',
  },
  {
    id: 3,
    title: 'Martial Law History Lectures and Archive Exhibit',
    description: 'Educational discussions on Martial Law history and its lasting impact, coupled with a short exhibit of archival collection of Project Gunita.',
    date: '03.09.2025',
  },
  {
    id: 4,
    title: 'Writing for Justice and Human Rights',
    description: 'Human rights research writing workshop at the FEU Institute of Law, in partnership with FEU-ILSC, FELR, and Bulatlat.',
    date: '09.20.2025',
  },
];

export const socialLinks = [
  { platform: 'Facebook', url: 'https://www.facebook.com/projectgunita', icon: 'bi-facebook' },
  { platform: 'Twitter / X', url: 'https://x.com/projectgunita', icon: 'bi-twitter-x' },
  { platform: 'Instagram', url: 'https://www.instagram.com/projectgunita', icon: 'bi-instagram' },
  { platform: 'TikTok', url: 'https://www.tiktok.com/@projectgunita', icon: 'bi-tiktok' },
];

export const contactData = {
  heading: "Let's work together to counter historical distortion.",
  email: 'archives@projectgunita.com',
  partnershipText: 'For Partnerships and Collaborations:',
  messengerText: 'Join our Messenger Channel here.',
  messengerUrl: '#',
};

export const footerData = {
  copyright: `© ${new Date().getFullYear()} Project Gunita. All rights reserved.`,
  links: [
    { label: 'Terms & Support', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ],
};
