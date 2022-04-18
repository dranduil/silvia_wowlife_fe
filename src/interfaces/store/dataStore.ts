export interface ObjectData {
    data:any
}

export interface LogoData {
    imgClass: string,
    logoImg: string,
    path: string
}

export interface Page {
    id: number,
    title: string,
    content: string,
    cover_photo_url: string
}
export interface CollectPage {
    id:number
    title:string
    cover_photo_url:string
}
export interface Author {
    id: number,
    username: string,
    twitter_link: string,
    profile_image: string
}
export interface CollectAuthor {
    id: number,
    username: string,
    profile_image: string
}
export interface Collection {
    id: number,
    name: string
    contract: string,
    author_id: number,
    network_id: number,
    cover_image_url: string
}
export interface CollectCollection {
    id:number
    name:string
    author_id:number,
    author:CollectAuthor,
    cover_image_url:string
}
export interface Network {
    id: number,
    name: string,
    symbol:string,
    logo:string
}

export interface Article {
    id: number,
    title: string
    content: string,
    cover_photo: string
}
export interface Customer {
    id: number,
    username: string,
    wallet: string,
    profile_img: string
}
export interface RPCNetwork {
    id:number,
    kind:String,
    UrlNetWork:String
}

export interface CollectionItemDetail {
    id: number,
    title: string,
    author_id: number,
    description: string,
    network_id: number,
    collection_id: number,
    bg_url: string
}