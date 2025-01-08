interface RegionConfig {
  currency: string;
  phoneFormat: string;
  dateFormat: string;
  timezone: string;
}

const regionConfigs: Record<string, RegionConfig> = {
  'en-US': {
    currency: 'USD',
    phoneFormat: '+1 (###) ###-####',
    dateFormat: 'MM/DD/YYYY',
    timezone: 'America/New_York',
  },
  'en-GB': {
    currency: 'GBP',
    phoneFormat: '+44 #### ######',
    dateFormat: 'DD/MM/YYYY',
    timezone: 'Europe/London',
  },
  'es-ES': {
    currency: 'EUR',
    phoneFormat: '+34 ### ### ###',
    dateFormat: 'DD/MM/YYYY',
    timezone: 'Europe/Madrid',
  },
  'fr-FR': {
    currency: 'EUR',
    phoneFormat: '+33 # ## ## ## ##',
    dateFormat: 'DD/MM/YYYY',
    timezone: 'Europe/Paris',
  },
  'de-DE': {
    currency: 'EUR',
    phoneFormat: '+49 ### #######',
    dateFormat: 'DD.MM.YYYY',
    timezone: 'Europe/Berlin',
  },
};

export const getRegionConfig = (locale: string): RegionConfig => {
  return regionConfigs[locale] || regionConfigs['en-US'];
};

export const formatPrice = (price: number, locale: string): string => {
  const config = getRegionConfig(locale);
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: config.currency,
  }).format(price);
};

export const formatDate = (date: Date, locale: string): string => {
  const config = getRegionConfig(locale);
  return new Intl.DateTimeFormat(locale, {
    dateStyle: 'full',
    timeZone: config.timezone,
  }).format(date);
};

export const formatPhoneNumber = (phone: string, locale: string): string => {
  const config = getRegionConfig(locale);
  // Basic phone formatting - in a real app, you'd want more sophisticated formatting
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, config.phoneFormat);
};