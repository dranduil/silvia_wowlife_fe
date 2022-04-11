
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
};