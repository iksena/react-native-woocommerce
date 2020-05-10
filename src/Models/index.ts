export interface IReducers {
    [key: string]: any;
}

export interface ProductsState {
    products: Array<object>,
    refreshing: boolean,
    page: number
}
