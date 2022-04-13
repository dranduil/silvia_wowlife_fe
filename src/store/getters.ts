import { GetterTree } from 'vuex'
import { State } from './state'
import { CollectPage, Page, Collection, CollectCollection } from '@/interfaces/store/dataStore'

export type Getters = {
    GetState(state: State): State,
    GetPageData(state: State): Page,
    GetCollectionsData(state: State): Array<CollectCollection>,
    GetCollectionData(state: State): Collection,
    GetPagesData(state: State): Array<CollectPage>
}
 
export const getters: GetterTree<State, State> & Getters = {
    GetState(state) {
        return state
    },
    
    GetPageData: (state) => {
        return state.page
    },

    GetCollectionsData: (state) => {
        return state.collections
    },

    GetCollectionData: (state) => {
        return state.collection
    },

    GetPagesData: (state) => {
        return state.pages
    },
}