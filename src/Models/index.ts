export interface User {
    id: number,
    name: string,
    address: string
}

export interface Image {
    src: string,
}

export interface Product {
    id: number,
    name: string,
    price: number,
    images: Array<Image>,
    description: string,
    average_rating: string
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
