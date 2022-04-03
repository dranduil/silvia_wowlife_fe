import Axios from 'axios'
import configuration from '@/config/index.js'

export const actions = {
    SAVE_SETTINGS: ({ commit }, payload) => {
        commit('SAVING')
        let url = configuration.url_api
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

    CREATE_CUSTOMER: ({ commit }, payload) => {
        commit('SAVING')
        let url = configuration.url_api + payload.section
        const config = {
            headers: { Authorization: `Bearer ${configuration.token}` }
        }

        const bodyParameters = {
            username: payload.username,
            wallet: payload.address
        }
        Axios.post(url, bodyParameters, config)
            .then((response) => {
                console.log(response)
                commit('SAVED')
            })
            .catch((error) => {
                console.log(error)
            })
    },

    FETCH_SETTINGS: ({ commit }, payload) => {
        let url = configuration.url_api
        Axios.get(url)
            .then((response) => {
                payload = response.data
                commit('UPDATE_SETTINGS', payload)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    FETCH_PAGES: ({ commit }) => {
        let url = `${configuration.url_api}/pages`
        const config = {
            headers: { Authorization: `Bearer ${configuration.token}` }
        };
        Axios.get(url, config)
            .then((response) => {
                const payload = response.data
                commit('UPDATE_PAGES', payload)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    FETCH_PAGE: ({ commit }, payload) => {
        let url = `${configuration.url_api}/pages/${payload.id}`
        const config = {
            headers: { Authorization: `Bearer ${configuration.token}` }
        };
        Axios.get(url, config)
            .then((response) => {
                const payload = response.data
                commit('UPDATE_PAGE', payload)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    FETCH_COLLECTIONS: ({ commit }, payload) => {
        let url = `${configuration.url_api}/collections`
        const config = {
            headers: { Authorization: `Bearer ${configuration.token}` }
        }

        Axios.get(url, config)
            .then((response) => {
                payload = response.data
                commit('UPDATE_COLLECTIONS', payload)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    FETCH_COLLECTION: ({ commit }, payload) => {
        let url = `${configuration.url_api}/collections/${payload.id}`
        const config = {
            headers: { Authorization: `Bearer ${configuration.token}` }
        }

        Axios.get(url, config)
            .then((response) => {
                const payload = response.data
                commit('UPDATE_COLLECTION', payload)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    FETCH_NETWORKS: ({ commit }, payload) => {
        let url = `${configuration.url_api}/networks`
        const config = {
            headers: { Authorization: `Bearer ${configuration.token}` }
        }

        Axios.get(url, config)
            .then((response) => {
                payload = response.data
                commit('UPDATE_NETWORKS', payload)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    FETCH_AUTHORS: ({ commit }, payload) => {
        let url = `${configuration.url_api}/authors`
        const config = {
            headers: { Authorization: `Bearer ${configuration.token}` }
        }

        Axios.get(url, config)
            .then((response) => {
                payload = response.data
                commit('UPDATE_AUTHORS', payload)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    FETCH_WALLETS: ({ commit }, payload) => {
        let url = `${configuration.url_api}/wallets`
        const config = {
            headers: { Authorization: `Bearer ${configuration.token}` }
        }
        Axios.get(url, config)
            .then((response) => {
                payload = response.data
                commit('UPDATE_WALLETS', payload)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    FETCH_CUSTOMERS: ({ commit }, payload) => {
        let url = `${configuration.url_api}/customers`
        const config = {
            headers: { Authorization: `Bearer ${configuration.token}` }
        }

        Axios.get(url, config)
            .then((response) => {
                payload = response.data
                commit('UPDATE_CUSTOMERS', payload)
            })
            .catch((error) => {
                console.log(error)
            })
    },
}
