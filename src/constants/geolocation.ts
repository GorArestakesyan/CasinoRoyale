export type Geolocation = 'us' | 'uk' | 'de' | 'fr' | 'it' | 'es' | 'default';

export const GEOLOCATION_FLAGS: Record<Geolocation, string> = {
  us: '🇺🇸',
  uk: '🇬🇧',
  de: '🇩🇪',
  fr: '🇫🇷',
  it: '🇮🇹',
  es: '🇪🇸',
  default: '🌐',
};

export const GEOLOCATIONS: Array<{ value: Geolocation; label: string }> = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'it', label: 'Italy' },
  { value: 'es', label: 'Spain' },
  { value: 'default', label: 'Default' },
];

export const DEFAULT_GEOLOCATION: Geolocation = 'default';

export interface GeolocationStyles {
  primaryColor: string;
  secondaryColor: string;
  backgroundImage?: string;
  backgroundGradient?: string;
  fontFamily?: string;
  buttonGradient?: {
    start: string;
    end: string;
  };
  buttonHoverGradient?: {
    start: string;
    end: string;
  };
  footerGradient?: string;
}

export const GEOLOCATION_STYLES: Record<Geolocation, GeolocationStyles> = {
  us: {
    primaryColor: '#1a237e',
    secondaryColor: '#3f51b5',
    backgroundGradient: 'linear-gradient(135deg, #1a237e 0%, #3f51b5 100%)',
    fontFamily:
      "'SF Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    buttonGradient: { start: '#3f51b5', end: '#1a237e' },
    buttonHoverGradient: { start: '#5c6bc0', end: '#283593' },
    footerGradient: 'linear-gradient(-90deg, #1a237e 0%, #0d1b4d 40%)',
  },
  uk: {
    primaryColor: '#c8102e',
    secondaryColor: '#012169',
    backgroundGradient: 'linear-gradient(135deg, #c8102e 0%, #012169 100%)',
    fontFamily:
      "'SF Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    buttonGradient: { start: '#c8102e', end: '#012169' },
    buttonHoverGradient: { start: '#e01a3a', end: '#023a8a' },
    footerGradient: 'linear-gradient(-90deg, #012169 0%, #000d2e 40%)',
  },
  de: {
    primaryColor: '#000000',
    secondaryColor: '#dd0000',
    backgroundGradient: 'linear-gradient(135deg, #000000 0%, #dd0000 100%)',
    fontFamily:
      "'SF Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    buttonGradient: { start: '#dd0000', end: '#000000' },
    buttonHoverGradient: { start: '#ff1a1a', end: '#1a1a1a' },
    footerGradient: 'linear-gradient(-90deg, #000000 0%, #0a0000 40%)',
  },
  fr: {
    primaryColor: '#002654',
    secondaryColor: '#ed2939',
    backgroundGradient: 'linear-gradient(135deg, #002654 0%, #ed2939 100%)',
    fontFamily:
      "'SF Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    buttonGradient: { start: '#ed2939', end: '#002654' },
    buttonHoverGradient: { start: '#ff3d4d', end: '#003d7a' },
    footerGradient: 'linear-gradient(-90deg, #002654 0%, #001429 40%)',
  },
  it: {
    primaryColor: '#009246',
    secondaryColor: '#ce2b37',
    backgroundGradient: 'linear-gradient(135deg, #009246 0%, #ce2b37 100%)',
    fontFamily:
      "'SF Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    buttonGradient: { start: '#ce2b37', end: '#ff6b6b' },
    buttonHoverGradient: { start: '#e83d4a', end: '#ff8a8a' },
    footerGradient: 'linear-gradient(-90deg, #ce2b37 0%, #8b1a1f 40%)',
  },
  es: {
    primaryColor: '#aa151b',
    secondaryColor: '#f1bf00',
    backgroundGradient: 'linear-gradient(135deg, #aa151b 0%, #f1bf00 100%)',
    fontFamily:
      "'SF Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    buttonGradient: { start: '#aa151b', end: '#f1bf00' },
    buttonHoverGradient: { start: '#c81a21', end: '#ffd700' },
    footerGradient: 'linear-gradient(-90deg, #aa151b 0%, #660d10 40%)',
  },
  default: {
    primaryColor: '#1976d2',
    secondaryColor: '#42a5f5',
    backgroundGradient: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
    fontFamily:
      "'SF Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    buttonGradient: { start: '#ff8d6b', end: '#ffba47' },
    buttonHoverGradient: { start: '#ff9d7b', end: '#ffca57' },
    footerGradient: 'linear-gradient(-90deg, #06225d 0%, #02011f 40%)',
  },
};
