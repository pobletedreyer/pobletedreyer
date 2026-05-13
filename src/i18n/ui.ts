// UI strings — flat dictionary indexed by key, per locale.
// Keys are stable; only values change between languages.
// Convention: dot-separated namespaces (nav.work, footer.contact, etc.)

import type { Locale } from './config';

export const ui: Record<Locale, Record<string, string>> = {
  en: {
    // Navigation
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.prints': 'Prints',
    'nav.contact': 'Contact',

    // Footer
    'footer.studio': 'Studio',
    'footer.contact': 'Contact',
    'footer.prints': 'Prints',
    'footer.studio_location': 'Santiago · San Pedro de Atacama',
    'footer.prints_blurb': 'Limited editions available upon request.',
    'footer.inquire': 'Inquire →',
    'footer.copyright': 'All photographs are protected by copyright. Reproduction prohibited without express written permission.',

    // Home
    'home.featured_label': 'Featured Series',
    'home.view_series': 'View Series →',
    'home.all_work_label': 'All Work',
    'home.all_work_heading_pre': 'Selected ',
    'home.all_work_heading_em': 'series',
    'home.all_work_heading_post': ' and ongoing projects.',
    'home.status.ongoing': 'Ongoing',
    'home.status.completed': 'Completed',
    'home.status.in_development': 'In Development',

    // Series page
    'series.breadcrumb_work': 'Work',
    'series.photographs_one': 'photograph shown',
    'series.photographs_many': 'photographs shown',
    'series.byline': '— Photographs by Lucas Poblete Dreyer',
    'series.empty': 'This series is in development. Photographs coming soon.',

    // About
    'about.title': 'About',
    'about.subtitle': 'Lucas Poblete Dreyer · Photographer',
    'about.portrait_caption': 'In the field, Atacama · 2025',
    'about.fact.based_in': 'Based in',
    'about.fact.based_in_value_line1': 'Santiago &',
    'about.fact.based_in_value_line2': 'San Pedro de Atacama',
    'about.fact.working_since': 'Working since',
    'about.fact.working_since_value_line1': '2021',
    'about.fact.working_since_value_line2': 'five years in the desert',
    'about.fact.recognition': 'Recognition',
    'about.fact.recognition_value_line1': 'Submitted to',
    'about.fact.recognition_value_org1': 'NPOTY',
    'about.fact.recognition_value_line2': '& Wildlife Photographer',
    'about.fact.recognition_value_line3': 'of the Year',
    'about.fact.approach': 'Approach',
    'about.fact.approach_value_line1': 'Ethical fieldwork.',
    'about.fact.approach_value_line2': 'Patience.',
    'about.fact.approach_value_line3': 'Slow returns.',
    'about.connect_heading': 'Get in touch',
    'about.channel.email': 'Email',
    'about.channel.instagram': 'Instagram',
    'about.channel.prints_link': 'Inquire about prints',
    'about.channel.prints_label': 'Limited Editions',

    // About — long-form bio paragraphs
    'about.bio_p1': 'Lucas Poblete Dreyer is a Chilean photographer based in Santiago, with deep ties to the Atacama Desert through his family’s hotel in San Pedro de Atacama, founded by his grandfather. A commercial engineer by training, he balances his work managing the hotel’s two properties with monthly journeys to the altiplano, where photography has become his way of engaging with one of the most extreme landscapes on Earth.',
    'about.bio_p2': 'His work focuses on the wildlife, geology, and human presence of the Andean altiplano — vicuñas, flamingos, viscachas, endemic reptiles, traditional shepherds, and the salt flats and volcanic ranges that shape the region. He is particularly drawn to documenting ecosystems currently threatened by lithium extraction and water diversion.',
    'about.quote': 'My approach prioritizes ethical fieldwork, patience, and the documentation of moments that reveal the resilience and fragility of one of the most extreme ecosystems on Earth.',

    // Meta defaults (used by BaseLayout if no override passed)
    'meta.default_title': 'Lucas Poblete Dreyer · Photographer',
    'meta.default_description': 'A continuing study of the Atacama Desert by Chilean photographer Lucas Poblete Dreyer. Wildlife, geology, and the human presence of the Andean altiplano.',
    'meta.about_title': 'About · Lucas Poblete Dreyer',
    'meta.about_description': 'Lucas Poblete Dreyer is a Chilean photographer based in Santiago, with deep ties to the Atacama Desert.',
    'meta.home_description': 'A continuing study of the Atacama Desert — its silences, inhabitants, and the precise life that thrives in what looks, at first, like absence.',

    // Language switcher label (for accessibility)
    'lang.switch_aria': 'Switch language',
  },

  es: {
    // Navigation
    'nav.work': 'Obra',
    'nav.about': 'Acerca',
    'nav.prints': 'Impresiones',
    'nav.contact': 'Contacto',

    // Footer
    'footer.studio': 'Estudio',
    'footer.contact': 'Contacto',
    'footer.prints': 'Impresiones',
    'footer.studio_location': 'Santiago · San Pedro de Atacama',
    'footer.prints_blurb': 'Ediciones limitadas disponibles a solicitud.',
    'footer.inquire': 'Consultar →',
    'footer.copyright': 'Todas las fotografías están protegidas por derechos de autor. Su reproducción está prohibida sin permiso expreso por escrito.',

    // Home
    'home.featured_label': 'Serie destacada',
    'home.view_series': 'Ver serie →',
    'home.all_work_label': 'Toda la obra',
    'home.all_work_heading_pre': 'Selección de ',
    'home.all_work_heading_em': 'series',
    'home.all_work_heading_post': ' y proyectos en curso.',
    'home.status.ongoing': 'En curso',
    'home.status.completed': 'Completada',
    'home.status.in_development': 'En desarrollo',

    // Series page
    'series.breadcrumb_work': 'Obra',
    'series.photographs_one': 'fotografía',
    'series.photographs_many': 'fotografías',
    'series.byline': '— Fotografías de Lucas Poblete Dreyer',
    'series.empty': 'Esta serie está en desarrollo. Las fotografías llegarán pronto.',

    // About
    'about.title': 'Acerca',
    'about.subtitle': 'Lucas Poblete Dreyer · Fotógrafo',
    'about.portrait_caption': 'En terreno, Atacama · 2025',
    'about.fact.based_in': 'Con base en',
    'about.fact.based_in_value_line1': 'Santiago y',
    'about.fact.based_in_value_line2': 'San Pedro de Atacama',
    'about.fact.working_since': 'Trabajando desde',
    'about.fact.working_since_value_line1': '2021',
    'about.fact.working_since_value_line2': 'cinco años en el desierto',
    'about.fact.recognition': 'Reconocimiento',
    'about.fact.recognition_value_line1': 'Postulado a',
    'about.fact.recognition_value_org1': 'NPOTY',
    'about.fact.recognition_value_line2': 'y Wildlife Photographer',
    'about.fact.recognition_value_line3': 'of the Year',
    'about.fact.approach': 'Enfoque',
    'about.fact.approach_value_line1': 'Trabajo de campo ético.',
    'about.fact.approach_value_line2': 'Paciencia.',
    'about.fact.approach_value_line3': 'Regresos lentos.',
    'about.connect_heading': 'Hablemos',
    'about.channel.email': 'Correo',
    'about.channel.instagram': 'Instagram',
    'about.channel.prints_link': 'Consultar por impresiones',
    'about.channel.prints_label': 'Ediciones limitadas',

    // About — long-form bio paragraphs
    'about.bio_p1': 'Lucas Poblete Dreyer es un fotógrafo chileno con base en Santiago, vinculado al desierto de Atacama a través del hotel familiar en San Pedro de Atacama, fundado por su abuelo. Ingeniero comercial de profesión, alterna la gestión de las dos propiedades del hotel con viajes mensuales al altiplano, donde la fotografía se ha vuelto su manera de habitar uno de los paisajes más extremos del planeta.',
    'about.bio_p2': 'Su obra se centra en la fauna, la geología y la presencia humana del altiplano andino — vicuñas, flamencos, viscachas, reptiles endémicos, pastores tradicionales y los salares y cordones volcánicos que dan forma a la región. Le interesa particularmente documentar ecosistemas hoy amenazados por la extracción de litio y el desvío de aguas.',
    'about.quote': 'Mi enfoque privilegia el trabajo de campo ético, la paciencia y el registro de momentos que revelan la resiliencia y la fragilidad de uno de los ecosistemas más extremos del planeta.',

    // Meta defaults
    'meta.default_title': 'Lucas Poblete Dreyer · Fotógrafo',
    'meta.default_description': 'Un estudio continuo del desierto de Atacama por el fotógrafo chileno Lucas Poblete Dreyer. Fauna, geología y presencia humana del altiplano andino.',
    'meta.about_title': 'Acerca · Lucas Poblete Dreyer',
    'meta.about_description': 'Lucas Poblete Dreyer es un fotógrafo chileno con base en Santiago, profundamente vinculado al desierto de Atacama.',
    'meta.home_description': 'Un estudio continuo del desierto de Atacama — sus silencios, sus habitantes y la vida precisa que prospera en lo que parece, a primera vista, ausencia.',

    // Language switcher label
    'lang.switch_aria': 'Cambiar idioma',
  },
};
