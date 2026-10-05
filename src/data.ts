export const SITE = 'https://jodavcleaningservice.com.ng';
export const PHONE = '08072234895';
export const EMAIL = 'davidakamjoseph79@gmail.com';
export const INSTAGRAM = 'https://www.instagram.com/jodav_cleaningservices/';
export const wa = (msg: string) => `https://wa.me/2348072234895?text=${encodeURIComponent(msg)}`;
export const WA_GENERAL = wa('Hello Jodav Cleaning Services, I would like to ask about your cleaning services and pricing.');
export const waService = (name: string) => wa(`Hello Jodav Cleaning Services, I would like pricing for ${name}.`);

export type Service = { slug: string; name: string; group: string; desc: string; seo: string };
export const SERVICES: Service[] = [
  { slug: 'home-cleaning', name: 'Home Cleaning', group: 'Residential', desc: 'Reliable cleaning for homes, apartments and living spaces.', seo: 'Home cleaning services in Lagos for apartments, houses and living spaces.' },
  { slug: 'deep-cleaning', name: 'Deep Cleaning', group: 'Residential and Commercial', desc: 'A detailed clean for spaces that need more than everyday maintenance.', seo: 'Deep cleaning in Lagos for homes, offices and shops.' },
  { slug: 'upholstery-cleaning', name: 'Upholstery Cleaning', group: 'Residential', desc: 'Refresh sofas and other upholstered furniture by removing accumulated dirt and stains.', seo: 'Upholstery and sofa cleaning in Lagos.' },
  { slug: 'carpet-cleaning', name: 'Carpet Cleaning', group: 'Residential', desc: 'Thorough cleaning for carpets and rugs to help restore a fresh, clean appearance.', seo: 'Carpet and rug cleaning in Lagos.' },
  { slug: 'office-cleaning', name: 'Office Cleaning', group: 'Commercial', desc: 'Keep your workplace clean, organised and comfortable for staff and visitors.', seo: 'Office cleaning in Lagos for workplaces of different sizes.' },
  { slug: 'shop-cleaning', name: 'Shop Cleaning', group: 'Commercial', desc: 'Cleaning support for shops and commercial spaces across Lagos.', seo: 'Shop cleaning in Lagos for retail and commercial spaces.' },
  { slug: 'post-construction-cleaning', name: 'Post-Construction Cleaning', group: 'Specialised', desc: 'Remove construction dust, dirt and leftover mess before your space is put to use.', seo: 'Post-construction cleaning in Lagos after building or renovation.' },
  { slug: 'fumigation', name: 'Fumigation', group: 'Specialised', desc: 'Professional fumigation services for homes, offices and other spaces.', seo: 'Fumigation services in Lagos for homes and offices.' },
  { slug: 'pest-control', name: 'Pest Control', group: 'Specialised', desc: 'Practical pest-control services for unwanted pests in residential and commercial environments.', seo: 'Pest control in Lagos for homes and businesses.' },
];
export const STEPS = [
  ['Choose a Service', 'Pick the service you need from our list.'],
  ['Tell Us What You Need', 'Send your location, property type and any details on WhatsApp.'],
  ['Get Your Pricing', 'We reply with pricing information for your job.'],
  ['Schedule Your Cleaning', 'Agree a date and time that suits you.'],
];
