import { MutationTree } from 'vuex'
import { State } from '@/store/state'
import { Page, Author, Collection, Network, Article, Customer, CollectCollection } from '@/interfaces/store/dataStore'
// setting Enumerators
export enum MutationType {
    UpdatePages = 'UPDATE_PAGES',
    UpdatePage = 'UPDATE_PAGE',
    UpdateArticles = 'UPDATE_ARTICLES',
    UpdateArticle = 'UPDATE_ARTICLE',
    UpdateCustomers = 'UPDATE_CUSTOMERS',
    UpdateAuthors = 'UPDATE_AUTHORS',
    UpdateCollections = 'UPDATE_COLLECTIONS',
    UpdateCollection = 'UPDATE_COLLECTION',
    UpdateNetworks = 'UPDATE_NETWORKS',
}

// set type of mutations
export type Mutations = {
    // [MutationType.UpdateSettings](state: State, payload: String): void
    [MutationType.UpdatePages](state: State, payload: Array<Page>): void
    [MutationType.UpdatePage](state: State, payload: Page): void
    [MutationType.UpdateArticles](state: State, payload: Array<Article>): void
    [MutationType.UpdateArticle](state: State, payload: Article): void
    [MutationType.UpdateCustomers](state: State, payload: Array<Customer>): void
    [MutationType.UpdateAuthors](state: State, payload: Array<Author>): void
    [MutationType.UpdateCollections](state: State, payload: Array<CollectCollection>): void
    [MutationType.UpdateCollection](state: State, payload: Collection): void
    [MutationType.UpdateNetworks](state: State, payload: Array<Network>): void
}
export const mutations: MutationTree<State> & Mutations = {
    [MutationType.UpdatePages](state, payload) {
        state.pages = payload
    },

    [MutationType.UpdatePage](state, payload) {
        state.page = payload
    },

    [MutationType.UpdateArticles](state, payload) {
        state.articles = payload
    },

    [MutationType.UpdateArticle](state, payload) {
        state.article = payload
    },

    [MutationType.UpdateCustomers](state, payload) {
        state.customers = payload
    },

    [MutationType.UpdateAuthors](state, payload) {
        state.authors = payload
    },

    [MutationType.UpdateCollections](state, payload) {
        state.collections = payload
    },

    [MutationType.UpdateCollection](state, payload) {
        state.collection = payload
    },

    [MutationType.UpdateNetworks](state, payload) {
        state.networs = payload
    },

}
