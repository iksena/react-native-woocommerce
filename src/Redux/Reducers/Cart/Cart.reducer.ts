import typeToReducer from 'type-to-reducer';
import { createAction } from 'redux-actions';

import { CartItem, CartState, Product, Reducers } from '../../../Models';

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const ADD_QUANTITY = 'ADD_QUANTITY';
const SUB_QUANTITY = 'SUB_QUANTITY';
const RESET_CART = 'RESET_CART';

export const constants = {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
  RESET_CART
};

export const initialState: CartState = {
  products: [],
  total: 0
};

const addToCart = createAction(ADD_TO_CART);
const removeFromCart = createAction(REMOVE_FROM_CART);
const addQuantity = createAction(ADD_QUANTITY);
const subQuantity = createAction(SUB_QUANTITY);
const resetCart = createAction(RESET_CART);

export const actions = {
  addToCart,
  removeFromCart,
  addQuantity,
  subQuantity,
  resetCart
};

const _findProductById = (state: CartState, productId: number): CartItem =>
  state.products.find((item) => item.id === productId) as CartItem;

const _updateProduct = (products: Array<CartItem>, product: CartItem): Array<CartItem> =>
  products.map((item) => {
    if (item.id === product.id) {
      return product;
    }

    return item;
  });

const _mapAddQuantityState = (state: CartState, existingProduct: CartItem): CartState => ({
  ...state,
  products: _updateProduct(state.products, {
    ...existingProduct,
    quantity: existingProduct.quantity + 1
  }),
  total: state.total + Number(existingProduct.price)
});

const _mapRemoveFromCartState = (state: CartState, existingProduct: CartItem): CartState => ({
  ...state,
  products: state.products.filter((item) => item.id !== existingProduct.id),
  total: state.total - (Number(existingProduct.price) * existingProduct.quantity)
});

const addQuantityHandler = (
    state: CartState,
    { payload: productId }: { payload: number }
): CartState => {
  const existingProduct = _findProductById(state, productId);

  if (existingProduct) {
    return _mapAddQuantityState(state, existingProduct);
  }

  return state;
};

const addToCartHandler = (
    state: CartState,
    { payload: product }: { payload: Product }
): CartState => {
  const existingProduct = _findProductById(state, product.id);

  if (existingProduct) {
    return _mapAddQuantityState(state, existingProduct);
  }

  return {
    ...state,
    products: [...state.products, {
      ...product,
      quantity: 1
    }],
    total: state.total + Number(product.price)
  };
};

const removeFromCartHandler = (
    state: CartState,
    { payload: productId }: { payload: number }
): CartState => {
  const existingProduct = _findProductById(state, productId);

  if (existingProduct) {
    return _mapRemoveFromCartState(state, existingProduct);
  }

  return state;
};

const subQuantityHandler = (
    state: CartState,
    { payload: productId }: { payload: number}
): CartState => {
  const existingProduct = _findProductById(state, productId);

  if (existingProduct) {
    if (existingProduct.quantity <= 1) {
      return _mapRemoveFromCartState(state, existingProduct);
    }

    return {
      ...state,
      products: _updateProduct(state.products, {
        ...existingProduct,
        quantity: existingProduct.quantity - 1
      }),
      total: state.total - Number(existingProduct.price)
    };
  }

  return state;
};

const resetCartHandler = (state: CartState): CartState => ({
  ...state,
  ...initialState
});

const reducerMap: Reducers = {
  [ADD_TO_CART]: addToCartHandler,
  [REMOVE_FROM_CART]: removeFromCartHandler,
  [ADD_QUANTITY]: addQuantityHandler,
  [SUB_QUANTITY]: subQuantityHandler,
  [RESET_CART]: resetCartHandler,
};

export default typeToReducer(reducerMap, initialState);
