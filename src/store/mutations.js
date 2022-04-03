export const mutations = {
    UPDATE_SETTINGS: (state, payload) => {
        state.settings.general = payload
    },

    UPDATE_PAGES: (state, payload) => {
        state.pages = payload
    },

    UPDATE_PAGE: (state, payload) => {
        state.page = payload
    },

    UPDATE_ARTICLES: (state, payload) => {
        state.articles = payload
    },

    UPDATE_NETWORKS: (state, payload) => {
        state.networs = payload
    },

    UPDATE_CUSTOMERS: (state, payload) => {
        state.customers = payload
    },

    UPDATE_AUTHORS: (state, payload) => {
        state.authors = payload
    },

    UPDATE_WALLETS: (state, payload) => {
        state.wallets = payload
    },

    UPDATE_COLLECTIONS: (state, payload) => {
        state.collections = payload
    },

    SAVED: (state) => {
        state.loadingText = 'Save Settings'
    },

    SAVING: (state) => {
        state.loadingText = 'Saving...'
    }

}
