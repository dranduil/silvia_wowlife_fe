import { GetterTree } from 'vuex'
import { State } from './state'
 
export type Getters = {
    GetState(state: State): Object,
    GetMenuLinks(state: State): Object,
    GetPageData(state: State): Object,
    GetCollectionsData(state: State): Object,
    GetCollectionData(state: State): Object,
    GetPagesData(state: State): Object
}
 
export const getters: GetterTree<State, State> & Getters = {
    GetState(state) {
        return state
    },

    GetMenuLinks: (state) => {
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