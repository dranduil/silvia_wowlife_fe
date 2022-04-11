import { MutationTree } from 'vuex'
import { State } from '@/store/state'
import { ObjectData } from '@/interfaces/store/dataStore'
// setting Enumerators
export enum MutationType {
    UpdatePages = 'UPDATE_PAGES',
    UpdatePage = 'UPDATE_PAGE',
    UpdateArticles = 'UPDATE_ARTICLES',
    UpdateArticle = 'UPDATE_ARTICLE',
    UpdateCustomers = 'UPDATE_CUSTOMERS',
    UpdateAuthors = 'UPDATE_AUTHORS',
    UpdateWallets = 'UPDATE_WALLETS',
    UpdateCollections = 'UPDATE_COLLECTIONS',
    UpdateCollection = 'UPDATE_COLLECTION',
    UpdateNetworks = 'UPDATE_NETWORKS',
}

// set type of mutations
export type Mutations = {
    // [MutationType.UpdateSettings](state: State, payload: String): void
    [MutationType.UpdatePages](state: State, payload: ObjectData): void
    [MutationType.UpdatePage](state: State, payload: ObjectData): void
    [MutationType.UpdateArticles](state: State, payload: ObjectData): void
    [MutationType.UpdateArticle](state: State, payload: ObjectData): void
    [MutationType.UpdateCustomers](state: State, payload: ObjectData): void
    [MutationType.UpdateAuthors](state: State, payload: ObjectData): void
    [MutationType.UpdateWallets](state: State, payload: ObjectData): void
    [MutationType.UpdateCollections](state: State, payload: ObjectData): void
    [MutationType.UpdateCollection](state: State, payload: ObjectData): void
    [MutationType.UpdateCollection](state: State, payload: ObjectData): void
    [MutationType.UpdateNetworks](state: State, payload: ObjectData): void
}
export const mutations: MutationTree<State> & Mutations = {
    [MutationType.UpdatePages](state, payload) {
        state.pages = payload.data
    },

    [MutationType.UpdatePage](state, payload) {
        state.page = payload.data
    },

    [MutationType.UpdateArticles](state, payload) {
        state.articles = payload.data
    },

    [MutationType.UpdateArticle](state, payload) {
        state.article = payload.data
    },

    [MutationType.UpdateCustomers](state, payload) {
        state.customers = payload.data
    },

    [MutationType.UpdateAuthors](state, payload) {
        state.authors = payload.data
    },

    [MutationType.UpdateWallets](state, payload) {
        state.wallets = payload.data
    },

    [MutationType.UpdateCollections](state, payload) {
        state.collections = payload.data
    },

    [MutationType.UpdateCollection](state, payload) {
        state.collection = payload.data
    },

    [MutationType.UpdateNetworks](state, payload) {
        state.networs = payload.data
    },

}
