import Axios from 'axios'
import configuration from '@/config/index.js'
import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationType } from './mutations'
import { State } from './state'
import { RequestCreateCustomer, RequestSingleItem } from '@/interfaces/store/request'
//define enumerators
export enum ActionTypes {
  CreateCustomer = 'CREATE_CUSTOMER',
  FetchPages = 'FETCH_PAGES',
  FetchPage = 'FETCH_PAGE',
  FetchCollections = 'FETCH_COLLECTIONS',
  FetchCollection = 'FETCH_COLLECTION',
  FetchNetworks = 'FETCH_NETWORKS',
  FetchAuthors = 'FETCH_AUTHORS',
  FetchWallets = 'FETCH_WALLETS',
  FetchCustomers = 'FETCH_CUSTOMERS'
}



//define { commit } Params
type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
    commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>
}

// define Actions Type
export type Actions = {
  [ActionTypes.CreateCustomer](context: ActionAugments, payload:RequestCreateCustomer): void
  [ActionTypes.FetchPages](context: ActionAugments): void
  [ActionTypes.FetchPage](context: ActionAugments, payload:RequestSingleItem): void
  [ActionTypes.FetchCollections](context: ActionAugments): void
  [ActionTypes.FetchCollection](context: ActionAugments, payload:RequestSingleItem): void
  [ActionTypes.FetchNetworks](context: ActionAugments): void
  [ActionTypes.FetchAuthors](context: ActionAugments): void
  [ActionTypes.FetchWallets](context: ActionAugments): void
  [ActionTypes.FetchCustomers](context: ActionAugments): void

}
export const actions: ActionTree<State, State> & Actions = {
    [ActionTypes.CreateCustomer]( {commit}, payload ) {
        const url = configuration.url_api + payload.section
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
            })
            .catch((error) => {
                console.log(error)
            })
    },
    [ActionTypes.FetchPages] ({ commit }) {
        const url = `${configuration.url_api}/pages`
        const config = {
            headers: { Authorization: `Bearer ${configuration.token}` }
        };
        Axios.get(url, config)
            .then((response) => {
                const payload = response.data
                commit(MutationType.UpdatePages, payload)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    [ActionTypes.FetchPage] ({ commit }, payload) {
        const url = `${configuration.url_api}/pages/${payload.id}`
        const config = {
            headers: { Authorization: `Bearer ${configuration.token}` }
        };
        Axios.get(url, config)
            .then((response) => {
                const payload = response.data
                commit(MutationType.UpdatePage, payload)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    [ActionTypes.FetchCollections] ({ commit }) {
        const url = `${configuration.url_api}/collections`
        const config = {
            headers: { Authorization: `Bearer ${configuration.token}` }
        }

        Axios.get(url, config)
            .then((response) => {
                const payload = response.data
                commit(MutationType.UpdateCollections, payload)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    [ActionTypes.FetchCollection] ({ commit }, payload) {
        const url = `${configuration.url_api}/collections/${payload.id}`
        const config = {
            headers: { Authorization: `Bearer ${configuration.token}` }
        }
        Axios.get(url, config)
            .then((response) => {
                const payload = response.data
                commit(MutationType.UpdateCollection, payload)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    [ActionTypes.FetchNetworks] ({ commit }) {
        const url = `${configuration.url_api}/networks`
        const config = {
            headers: { Authorization: `Bearer ${configuration.token}` }
        }

        Axios.get(url, config)
            .then((response) => {
                const payload = response.data
                commit(MutationType.UpdateNetworks, payload)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    [ActionTypes.FetchAuthors] ({ commit }) {
        const url = `${configuration.url_api}/authors`
        const config = {
            headers: { Authorization: `Bearer ${configuration.token}` }
        }

        Axios.get(url, config)
            .then((response) => {
                const payload = response.data
                commit(MutationType.UpdateAuthors, payload)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    [ActionTypes.FetchWallets] ({ commit }) {
        const url = `${configuration.url_api}/wallets`
        const config = {
            headers: { Authorization: `Bearer ${configuration.token}` }
        }
        Axios.get(url, config)
            .then((response) => {
                const payload = response.data
                commit(MutationType.UpdateWallets, payload)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    [ActionTypes.FetchCustomers] ({ commit }) {
        const url = `${configuration.url_api}/customers`
        const config = {
            headers: { Authorization: `Bearer ${configuration.token}` }
        }

        Axios.get(url, config)
            .then((response) => {
                const payload = response.data
                commit(MutationType.UpdateCustomers, payload)
            })
            .catch((error) => {
                console.log(error)
            })
    },
}