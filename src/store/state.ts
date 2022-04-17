import { LogoData, CollectPage, Page,  CollectAuthor, Collection, CollectCollection,  Network, Article, Customer, RPCNetwork } from '@/interfaces/store/dataStore'

export type State = {
    pages: Array<CollectPage>,
    page: Page,
    authors: Array<CollectAuthor>,
    collections: Array<CollectCollection>,
    collection: Collection,
    networs: Array<Network>,
    articles: Array<Article>,
    article: Article,
    customers: Array<Customer>,
    RPCNetworks:Array<RPCNetwork>
    logoData:Array<LogoData>,
};
export const state: State = {
    pages: [
      {
        id: 0,
        title: "",
        cover_photo_url: ""
      }
    ],
    page: {
        id: 0,
        title: "",
        content: "",
        cover_photo_url: ""
    },
    authors: [
      {
        id: 0,
        username: "",
        profile_image: ""
      }
    ],
    collections: [
      {
        id: 0,
        name: "",
        author_id: 0,
        author: {
          id: 0,
          username: "",
          profile_image: ""
        },
        cover_image_url: ""
      }
    ],
    collection: {
        id: 0,
        name: "",
        contract: "",
        author_id: 0,
        network_id: 0,
        cover_image_url: ""
    },
    networs: [
      {
        id: 0,
        name: "",
        symbol:"",
        logo:""
      }
    ],
    articles: [
      {
        id: 0,
        title: "",
        content: "",
        cover_photo: ""
      }
    ],
    article: {
        id: 0,
        title: "",
        content: "",
        cover_photo: ""
    },
    customers: [
      {
        id: 0,
        username: "",
        wallet: "",
        profile_img: ""
      }
    ],
    logoData: [
      {
        imgClass: 'logo-dark',
        logoImg: require('@/images/logo-black.png'),
        path: '/home'
      },
      {
        imgClass: 'logo-light',
        logoImg: require('@/images/logo-white.png'),
        path: '/home'
      }
    ],
    RPCNetworks:[
      {
        id:1,
        kind:"devnet",
        UrlNetWork:"https://api.devnet.solana.com",
      },
      {
        id:2,
        kind:"testnet",
        UrlNetWork:"https://api.testnet.solana.com",
      },
      {
        id:3,
        kind:"mainnet-beta",
        UrlNetWork:"https://api.mainnet-beta.solana.com",
      }
    ]
};