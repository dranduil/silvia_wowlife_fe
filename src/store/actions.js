import Axios from 'axios'
import config from '@/config'
export const actions = {
    SAVE_SETTINGS: ({ commit }, payload) => {
        commit('SAVING')
        let url = config.url_api
        Axios.post(url, {
            firstname: payload.firstname,
            lastname: payload.lastname,
            email: payload.email,
        })
            .then((response) => {
                console.log(response)
                commit('SAVED')
            })
            .catch((error) => {
                console.log(error)
            })
    },

    FETCH_SETTINGS: ({ commit }, payload) => {
        let url = config.url_api
        Axios.get(url)
            .then((response) => {
                payload = response.data
                commit('UPDATE_SETTINGS', payload)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
