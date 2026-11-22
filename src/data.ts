export const SITE_URL = 'https://bymevpn-site.duckdns.org/';

export const TELEGRAM_BOT = 'https://t.me/ByMeVPNbot';
export const TELEGRAM_SUPPORT = 'https://t.me/ByMeVPNSupportBot';

export const ANDROID_RELEASE_URL = 'https://github.com/Brof14/ByMeVPN-app/releases/latest';
export const ANDROID_APK_URL = 'https://github.com/Brof14/ByMeVPN-app/releases/download/v1.0.51/ByMeVPN-v1.0.51.apk';
export const ANDROID_REPO_URL = 'https://github.com/Brof14/ByMeVPN-app';
export const WINDOWS_REPO_URL = 'https://github.com/Brof14/ByMeVPN-app-windows';
export const LINUX_REPO_URL = 'https://github.com/Brof14/ByMeVPN-app-Linux';
export const IOS_REPO_URL = 'https://github.com/Brof14/ByMeVPN-app-iOS';

export type PlanData = {
  code: string;
  name: string;
  months: number;
  bonusMonths: number;
  totalMonths: number;
  days: number;
  baseMonthly: number;
  deviceOptions: { devices: number; total: number; monthly: number }[];
  discountPercent: number;
  isPopular: boolean;
};

export const TRIAL = { name: '3 дня бесплатно', days: 3, devices: 2 };

export const PLANS: PlanData[] = [
  {
    code: '1m',
    name: '1 месяц',
    months: 1,
    bonusMonths: 0,
    totalMonths: 1,
    days: 30,
    baseMonthly: 89,
    deviceOptions: [
      { devices: 2, total: 89, monthly: 89 },
      { devices: 5, total: 109, monthly: 109 },
      { devices: 10, total: 129, monthly: 129 },
    ],
    discountPercent: 0,
    isPopular: false,
  },
  {
    code: '3m',
    name: '4 месяца (3+1)',
    months: 3,
    bonusMonths: 1,
    totalMonths: 4,
    days: 120,
    baseMonthly: 79,
    deviceOptions: [
      { devices: 2, total: 316, monthly: 79 },
      { devices: 5, total: 396, monthly: 99 },
      { devices: 10, total: 476, monthly: 119 },
    ],
    discountPercent: 11,
    isPopular: true,
  },
  {
    code: '6m',
    name: '8 месяцев (6+2)',
    months: 6,
    bonusMonths: 2,
    totalMonths: 8,
    days: 240,
    baseMonthly: 69,
    deviceOptions: [
      { devices: 2, total: 552, monthly: 69 },
      { devices: 5, total: 712, monthly: 89 },
      { devices: 10, total: 872, monthly: 109 },
    ],
    discountPercent: 22,
    isPopular: false,
  },
  {
    code: '12m',
    name: '15 месяцев (12+3)',
    months: 12,
    bonusMonths: 3,
    totalMonths: 15,
    days: 450,
    baseMonthly: 59,
    deviceOptions: [
      { devices: 2, total: 885, monthly: 59 },
      { devices: 5, total: 1185, monthly: 79 },
      { devices: 10, total: 1485, monthly: 99 },
    ],
    discountPercent: 34,
    isPopular: false,
  },
];

export const DEVICE_OPTIONS = [2, 5, 10];

export const rub = new Intl.NumberFormat('ru-RU');

export type PlatformStatus = 'available' | 'experimental' | 'development' | 'planned';

export type Platform = {
  id: string;
  name: string;
  device: string;
  description: string;
  status: PlatformStatus;
  statusLabel: string;
  statusNote: string;
  action: { label: string; href: string; external: boolean } | null;
  repoUrl: string;
};

export const PLATFORMS: Platform[] = [
  {
    id: 'android',
    name: 'Android',
    device: 'Смартфоны и планшеты',
    description: 'Нативное приложение на Kotlin и Jetpack Compose. Поддержка VLESS Reality, Hysteria 2 и XHTTP. Подписанные APK-сборки выходят автоматически.',
    status: 'available',
    statusLabel: 'Доступно',
    statusNote: 'Подписанные релизы v1.0.51. Прямая установка APK. Версия для Google Play в подготовке.',
    action: { label: 'Скачать APK', href: ANDROID_APK_URL, external: true },
    repoUrl: ANDROID_REPO_URL,
  },
  {
    id: 'windows',
    name: 'Windows',
    device: 'ПК и ноутбуки',
    description: 'Десктоп-клиент на Tauri и Rust. Интеграция VPN-туннеля и платёжных сценариев в разработке.',
    status: 'experimental',
    statusLabel: 'Экспериментальная',
    statusNote: 'Только предварительные сборки. Не позиционируется как стабильный продукт.',
    action: { label: 'Репозиторий', href: WINDOWS_REPO_URL, external: true },
    repoUrl: WINDOWS_REPO_URL,
  },
  {
    id: 'linux',
    name: 'Linux',
    device: 'Десктоп и серверы',
    description: 'Tauri 2 / Rust с движком sing-box. Поддержка VLESS TCP + REALITY. Требует системного sing-box.',
    status: 'experimental',
    statusLabel: 'Экспериментальная',
    statusNote: 'Без подтверждённой защиты от утечек DNS и IPv6. Kill-switch не гарантируется.',
    action: { label: 'Репозиторий', href: LINUX_REPO_URL, external: true },
    repoUrl: LINUX_REPO_URL,
  },
  {
    id: 'ios',
    name: 'iOS',
    device: 'iPhone и iPad',
    description: 'Нативный SwiftUI-клиент. VPN через NETunnelProviderManager и Libbox. StoreKit и подпись релиза не готовы.',
    status: 'development',
    statusLabel: 'В разработке',
    statusNote: 'CI-сборки без подписи. App Store и покупки через StoreKit не подключены.',
    action: { label: 'Репозиторий', href: IOS_REPO_URL, external: true },
    repoUrl: IOS_REPO_URL,
  },
  {
    id: 'macos',
    name: 'macOS',
    device: 'Mac и MacBook',
    description: 'Отдельное готовое приложение не подтверждено. iOS-клиент не является полноценной версией для macOS.',
    status: 'planned',
    statusLabel: 'Скоро',
    statusNote: 'Полноценная macOS-версия в планах.',
    action: null,
    repoUrl: ANDROID_REPO_URL,
  },
];

export type AppScreen = {
  key: string;
  label: string;
  src: string;
  alt: string;
  description: string;
};

export const APP_SCREENS: AppScreen[] = [
  {
    key: 'home-off',
    label: 'Подключение',
    src: '/assets/app/home-off.png',
    alt: 'Макет экрана ByMeVPN: VPN выключен, показаны выбор сервера и сведения о подписке',
    description: 'Главный экран с состоянием подключения и выбором сервера.',
  },
  {
    key: 'servers',
    label: 'Серверы',
    src: '/assets/app/servers.png',
    alt: 'Дизайн-макет выбора сервера в приложении ByMeVPN',
    description: 'Список серверов с автоматическим выбором и измерением задержки.',
  },
  {
    key: 'account',
    label: 'Аккаунт',
    src: '/assets/app/account.png',
    alt: 'Дизайн-макет аккаунта ByMeVPN со сроком подписки',
    description: 'Срок доступа, лимит устройств и управление аккаунтом.',
  },
  {
    key: 'settings',
    label: 'Настройки',
    src: '/assets/app/settings.png',
    alt: 'Дизайн-макет настроек ByMeVPN',
    description: 'Параметры приложения, обход российских доменов и kill-switch.',
  },
  {
    key: 'pricing',
    label: 'Тарифы',
    src: '/assets/app/pricing.png',
    alt: 'Дизайн-макет выбора тарифа внутри приложения ByMeVPN',
    description: 'Выбор срока доступа и количества устройств прямо в приложении.',
  },
];

export type FaqItem = { question: string; answer: string };

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'На каких устройствах работает ByMeVPN?',
    answer: 'Основное приложение — для Android, с подписанными APK-релизами. Версии для Windows и Linux находятся в экспериментальной стадии. iOS-клиент разрабатывается на SwiftUI, но пока не подписан и не опубликован в App Store. Полноценная macOS-версия в планах.',
  },
  {
    question: 'Как установить приложение на Android?',
    answer: 'Скачайте APK из раздела «Платформы» или со страницы последнего релиза на GitHub. Перед установкой разрешите установку из неизвестных источников в настройках Android. После запуска авторизуйтесь или активируйте пробный период через бота.',
  },
  {
    question: 'Как подключиться к VPN?',
    answer: 'Авторизуйтесь в приложении, выберите сервер из списка и нажмите кнопку подключения. Приложение использует Android VpnService и протоколы VLESS Reality, Hysteria 2 или XHTTP в зависимости от конфигурации сервера.',
  },
  {
    question: 'Как оформить подписку?',
    answer: 'Откройте Telegram-бота, выберите тариф и количество устройств. Оплата проходит через ЮKassa. Итоговую сумму и условия автопродления проверяйте в боте перед оплатой.',
  },
  {
    question: 'Сколько устройств можно использовать?',
    answer: 'Тарифная сетка включает варианты на 2, 5 и 10 устройств в одной подписке. Стоимость растёт при увеличении количества устройств.',
  },
  {
    question: 'Как получить бесплатный пробный период?',
    answer: 'Пробный доступ на 3 дня активируется через Telegram-бота, если он доступен для вашего аккаунта. Привязывать карту не нужно.',
  },
  {
    question: 'Как обратиться в поддержку?',
    answer: 'Напишите в службу поддержки через Telegram-бота @ByMeVPNSupportBot или через основного бота @ByMeVPN_bot.',
  },
];
