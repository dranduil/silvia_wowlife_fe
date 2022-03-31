import Vuex from 'vuex'

import { getters } from '@/store/getter.js'
import { mutations } from '@/store/mutations.js'
import { actions } from '@/store/actions.js'

export default new Vuex.Store({
    state: {
        token: "a2Ap0bm3TYUIMhFquJsOgpmIoZ1MiuvhGEtaHlfZ",
        menu: {},
        loading_text: {},
        general_settings: {},
        logoData: {},
        heroData: {},
        breadcrumbData: {},
        btnData: [],
        headerData: {
            btnText: 'Connect Wallet',
            inputPlaceholderText: 'Search item here...',
            menuList: []
        },
        productData: {
            products: [],
            onSaleList: [],
            ownedList: []
        },
        // Related Product data
        relatedProductData: {
            title: 'Popular Art Assets',
        },
        // creator data
        creatorData: {
            title: 'Featured Creators',
            meta: 'Our Creators',
            content: "Explore on the world's best NFT marketplace with our beautiful NFT products creators. We want to be a part of your smile.",
            creatorList: []
        },
        // collection data
        collectionData: {
            title: 'Collections',
            collectionList: []
        },
        sellBuyData: [],
        // itemDetail data
        itemDetailData: {
            img: require('@/images/thumb/nft-lg.jpg'),
            imgTwo: require('@/images/thumb/item-detail-2.jpg'),
            title: 'The Future is Blossoming - Harlows 2021',
            content: 'Limited Edition *digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
            metaText: 'Not for sale',
            metaTextTwo: '500 editions',
            metaTextThree: 'Highest bid 0.072 ETH',
            btnText: 'Place a Bid',
            btnTextTwo: 'Share',
            itemDetailTabNav: []
        },
        // Freatured creator data
        featuredCreatorsData: {

        },
        // Freatured data
        featuredData: {
            title: 'Exclusive EnftyMart drops',
            content: 'This is just a simple text made for this unique and awesome template, you can replace it with any text. It is a long established fact.',
            featuredList: []
        },
        // counter item data
        countItemData: [],
        // Recent item data
        recentItemData: {
            title: 'Recently Created',
            content: 'This is just a simple text made for this unique and awesome template, you can replace it with any text. It is a long established fact.',
        },
        // how It Work Data
        howItWorkData: {
            title: 'Create and sell your NFTs',
            content: 'This is just a simple text made for this unique and awesome template, you can replace it with any text. It is a long established fact.',
            titleTwo: 'Mint, Buy and Sell or Just Launch <br> Your Own NFT Store',
            titleThree: 'Get Started in 3 simple steps',
            btnText: 'Create Store',
            howItWorkList: []
        },
        // Category Data
        categoryData: {
            title: 'Browse by category',
            content: 'This is just a simple text made for this unique and awesome template, you can replace it with any text. It is a long established fact.',
            categoryList: []
        },
        funfactData: {

        },
        // Newsletter Data
        newsletterData: {
            title: 'Join Our Newsletter'
        },
        // news data
        blogData: {
            title: 'Check Out Our News',
            titleTwo: 'You might have read about us in the news',
            content: 'This is just a simple text made for this unique and awesome template, you can replace it with any text. It is a long established fact.',
            btnText: 'View all articles',
            btnLink: 'blog',
            blogList: []
        },
        blogDetail: {},
        // cta data
        ctaData: {
            title: 'Tyler Givens on making  fantasies a reality',
            content: 'I must explain to you how all this mistaken idea of the denouncing and praising pain was born and I will give you complete.',
            btnText: 'Explore EnftyMart',
            btnLink: 'explore'
        },
        ctaDataTwo: {
            title: 'Interested in joining us?',
            content: 'Hop aboard and view our open positions',
            btnText: 'See open roles',
            btnLink: 'contact'
        },
        // author data
        authorPublicData: {
            title: 'French Montana',
            userName: '@frenchmontana',
            btnText: 'Follow',
            btnLink: '',
            img: require('@/images/thumb/avatar-8.jpg'),
            coverImg: require('@/images/thumb/bread-bg-2.jpg')
        },
        authorSidebarData: {
            authorTabNav: [],
            sidebarWidget: {}
        },
        // author personal data
        authorPersonalData: {},
        // author nav
        authorNav: [],
        // offer sidebar data
        offerSidebarData: {},
        activitySidebarData: {},
        // footer data
        footerData: {
            content: "The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs).",
            footerList: []
        }

    },
    actions,
    getters,
    mutations
})
