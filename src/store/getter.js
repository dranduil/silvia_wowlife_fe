export const getters = {
    GET_GENERAL_SETTINGS: (state) => {
        return state
    },

    GET_LOADING_TEXT: (state) => {
        return state
    },

    GET_MENU_LINKS: (state) => {
        return state.menu
    },

    GET_PAGE_DATA: (state) => {
        return state.page.data
    },

    GET_PAGES_DATA: (state) => {
        return state.pages
    }
}
