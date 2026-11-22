export type DemoServer = {
  id: string;
  name: string;
  location: string;
  ping: number;
  flag: string;
};

export const DEMO_SERVERS: DemoServer[] = [
  { id: 'nl', name: 'Нидерланды', location: 'Амстердам', ping: 42, flag: '🇳🇱' },
  { id: 'de', name: 'Германия', location: 'Франкфурт', ping: 38, flag: '🇩🇪' },
  { id: 'fi', name: 'Финляндия', location: 'Хельсинки', ping: 56, flag: '🇫🇮' },
  { id: 'se', name: 'Швеция', location: 'Стокгольм', ping: 61, flag: '🇸🇪' },
  { id: 'us', name: 'США', location: 'Нью-Йорк', ping: 120, flag: '🇺🇸' },
  { id: 'tr', name: 'Турция', location: 'Стамбул', ping: 85, flag: '🇹🇷' },
];

export type DemoTab = 'home' | 'servers' | 'account' | 'settings';

export type DemoToggle = {
  id: string;
  label: string;
  description: string;
  value: boolean;
};
