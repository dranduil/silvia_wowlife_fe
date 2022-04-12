import { Store } from '@/vuex'
declare module '@vue/runtime-core' {
    interface State {
        menus: Object,
        pages: Object,
        page: Object,
        authors: Object,
        collections: Object,
        collection: Object,
        networs: Object,
        articles: Object,
        wallets: Object,
        customers: Object,
    }

    interface ComponentCustomProperties {
        $store: Store<State>
    }
}