import { LogoData, CollectPage, Page,  CollectAuthor, Collection, CollectCollection,  Network, Article, Customer, RPCNetwork, CollectionItemDetail} from '@/interfaces/store/dataStore'

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
    CollectionDetails:Array<CollectionItemDetail>,
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
        candy_machine_hash:"",
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
    ],
    CollectionDetails: [
      {
        id: 1,
        title: "Sfinge del Passato #1",
        author_id: 1,
        description: "Sfinge del passato, 1984 - Credevo fosse passato ma era il presente | cit. @silviadelchiaro",
        network_id: 1,
        collection_id: 1,
        bg_url: require('@/images/collection/tav/bg-sfinge.png')
      },
      {
        id: 2,
        title: "Coscienza Pura",
        author_id: 1,
        description: "Coscienza pura, 2020 - ci fai tornare il senso dell'inizio  | cit. @silviadelchiaro",
        network_id: 1,
        collection_id: 1,
        bg_url: require('@/images/collection/tav/bg-coscienza.png')
      },
      {
        id: 3,
        title: "Gabriel #1",
        author_id: 1,
        description: "Gabriel - 2015 - Ho visto che nel deserto c'era un fiore, questo fiore ha convinto il deserto a ridare i suoi semi ed il deserto è diventato un campo di mille colori | cit. @silviadelchiaro",
        network_id: 1,
        collection_id: 1,
        bg_url: require('@/images/collection/tav/bg-gabriel.png')
      },
      {
        id: 4,
        title: "Una parte di Lei #1",
        author_id: 1,
        description: "Una parte di Lei - 2016 - Conoscere una parte di lei non è tutto | cit. @silviadelchiaro",
        network_id: 1,
        collection_id: 1,
        bg_url: require('@/images/collection/tav/bg-una-parte-dilei.png')
      },
      {
        id: 5,
        title: "Due solitudine #1",
        author_id: 1,
        description: "Due solitudine - 2020 - un occhio può vedere due cuori solitudine | cit. @silviadelchiaro",
        network_id: 1,
        collection_id: 1,
        bg_url: require('@/images/collection/tav/bg-duesolitudine.png')
      }
    ]
};