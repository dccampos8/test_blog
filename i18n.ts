export const languages = {
  pt: {
    label: 'Português',
    path: '/pt'
  },
  en: {
    label: 'English',
    path: '/en'
  }
} as const;

export const defaultLang = 'pt';

export const ui = {
  pt: {
    siteName: 'Conversa de Tasca',
    tagline: 'Reflexões sobre política e sociedade',
    nav: {
      home: 'Início',
      about: 'Sobre',
      contact: 'Contacto',
      archive: 'Arquivo'
    },
    categories: {
      'politica-nacional': 'Política Nacional',
      'sociedade': 'Sociedade',
      'livros': 'Livros'
    },
    newsletterCta: 'Subscreve a newsletter',
    search: 'Pesquisar',
    comments: 'Comentários'
  },
  en: {
    siteName: 'Conversa de Tasca',
    tagline: 'Reflections on politics and society',
    nav: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      archive: 'Archive'
    },
    categories: {
      'politica-nacional': 'National Politics',
      'sociedade': 'Society',
      'livros': 'Books'
    },
    newsletterCta: 'Subscribe to the newsletter',
    search: 'Search',
    comments: 'Comments'
  }
} as const;
