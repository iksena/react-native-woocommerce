export interface User {
    id: number;
    name: string;
    address: string;
}

export interface Image {
    src: string;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    images: Array<Image>;
    description: string;
    // eslint-disable-next-line camelcase
    average_rating: string;
}

export interface CartItem extends Product{
    quantity: number;
}

export interface Reducers {
    [key: string]: any;
}

export interface AppState {
    isRenderable: boolean;
}

export interface AuthState {
    user: User;
}

export interface LoadingState {
    visibility: boolean;
}

export interface ProductsState {
    products: Array<Product>;
    refreshing: boolean;
    page: number;
}
export interface CartState {
    products: Array<CartItem>;
    total: number;
}
