export interface User {
    id: string,
    name: string,
    address: string
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
    products: Array<object>,
    refreshing: boolean,
    page: number
}
