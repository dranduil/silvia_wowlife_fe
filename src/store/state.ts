import { LogoData } from '@/interfaces/store/dataStore'
export type Collections = {
  id: number;
  title: string;
  description: string;
  createdBy: string;
  assignedTo: string;
  completed: boolean;
  editing: boolean;
};
export type State = {
    menus: Object,
    pages: Object,
    page: Object,
    authors: Object,
    collections: Object,
    collection: Object,
    networs: Object,
    articles: Object,
    article: Object,
    wallets: Object,
    customers: Object,
    logoData:Array<LogoData>,
};
export const state: State = {
    menus: {},
    pages: {},
    page: {},
    authors: {},
    collections: {},
    collection: {},
    networs: {},
    articles: {},
    article: {},
    wallets: {},
    customers: {},
    logoData: [
      {
        imgClass: 'logo-dark',
        logoImg: require('@/images/logo-black.png'),
        path: '/home'
      },
      {
        imgClass: 'logo-light',
        logoImg: require('@/images/logo-white.png'),
        path: '/home'
      }
    ],
};