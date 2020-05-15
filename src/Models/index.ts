export interface User {
    id: string,
    name: string,
    address: string
}

export interface Image {
    id: string,
    src: string,
    name: string,
    alt: string
}

export interface Product {
    id: string,
    name: string,
    price: number,
    images: Array<Image>,
    description: string
}

export interface IReducers {
    [key: string]: any;
}

export interface AppState {
    isRenderable: boolean
}

export interface AuthState {
    user: User,
}

export interface LoadingState {
    visibility: boolean,
    transparent: boolean,
}

export interface ProductsState {
    products: Array<Product>,
    refreshing: boolean,
    page: number
}
