import Vuex from 'vuex'

import { getters } from '@/store/getter.js'
import { mutations } from '@/store/mutations.js'
import { actions } from '@/store/actions.js'

export default new Vuex.Store({
    state: {
        ciao: ""
    },
    actions,
    getters,
    mutations
})
