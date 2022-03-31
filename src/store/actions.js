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

    CREATE_CUSTOMER: ({ commit }, payload) => {
        commit('SAVING')
        let url = config.url_api + payload.section
        const config = {
            headers: { Authorization: `Bearer ${config.token}` }
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
        let url = config.url_api
        Axios.get(url)
            .then((response) => {
                payload = response.data
                commit('UPDATE_SETTINGS', payload)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    FETCH_PAGE: ({ commit }, payload) => {
        let url = config.url_api + payload.section
        const config = {
            headers: { Authorization: `Bearer ${config.token}` }
        };
        
        const bodyParameters = {
           key: ""
        };
        Axios.get(url, config)
            .then((response) => {
                payload = response.data
                commit('UPDATE_PAGE', payload)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    FETCH_COLLECTIONS: ({ commit }, payload) => {
        let url = config.url_api + payload.section
        const config = {
            headers: { Authorization: `Bearer ${config.token}` }
        };
        
        const bodyParameters = {
           key: ""
        };
        Axios.get(url, config)
            .then((response) => {
                payload = response.data
                commit('UPDATE_PAGE', payload)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    FETCH_NETWORK: ({ commit }, payload) => {
        let url = config.url_api + payload.section
        const config = {
            headers: { Authorization: `Bearer ${config.token}` }
        };
        
        const bodyParameters = {
           key: ""
        };
        Axios.get(url, config)
            .then((response) => {
                payload = response.data
                commit('UPDATE_PAGE', payload)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    FETCH_AUTHOR: ({ commit }, payload) => {
        let url = config.url_api + payload.section
        const config = {
            headers: { Authorization: `Bearer ${config.token}` }
        };
        
        const bodyParameters = {
           key: ""
        };
        Axios.get(url, config)
            .then((response) => {
                payload = response.data
                commit('UPDATE_PAGE', payload)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    FETCH_WALLETS: ({ commit }, payload) => {
        let url = config.url_api + payload.section
        const config = {
            headers: { Authorization: `Bearer ${config.token}` }
        };
        
        const bodyParameters = {
           key: ""
        };
        Axios.get(url, config)
            .then((response) => {
                payload = response.data
                commit('UPDATE_PAGE', payload)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    FETCH_CUSTOMERS: ({ commit }, payload) => {
        let url = config.url_api + payload.section
        const config = {
            headers: { Authorization: `Bearer ${config.token}` }
        };
        
        const bodyParameters = {
           key: ""
        };
        Axios.get(url, config)
            .then((response) => {
                payload = response.data
                commit('UPDATE_PAGE', payload)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    FETCH_CUSTOMER: ({ commit }, payload) => {
        let url = config.url_api + payload.section
        const config = {
            headers: { Authorization: `Bearer ${config.token}` }
        };
        
        const bodyParameters = {
           key: ""
        };
        Axios.get(url, config)
            .then((response) => {
                payload = response.data
                commit('UPDATE_PAGE', payload)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
