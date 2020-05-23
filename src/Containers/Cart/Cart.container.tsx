import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Action } from 'redux';

import { actions } from '../../Redux/Reducers/Cart/Cart.reducer';
import selectors from '../../Redux/Selectors';
import Cart from './Cart.component';
import { CartState, Product } from '../../Models';
import Routes from '../../Navigation/Routes';

const CartContainer = (props: CartState): JSX.Element => {
  const products = useSelector(selectors.cart.getProducts);
  const total = useSelector(selectors.cart.getTotal);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handlers = {
    handleProductPress: (id: number): void => navigation.navigate(Routes.Product, { id }),
    handleCheckoutPress: (): void => navigation.navigate(Routes.Checkout),
    addToCart: (product: Product): Action => dispatch(actions.addToCart(product)),
    removeFromCart: (productId: number): Action => dispatch(actions.removeFromCart(productId)),
    addQuantity: (productId: number): Action => dispatch(actions.addQuantity(productId)),
    subQuantity: (productId: number): Action => dispatch(actions.subQuantity(productId)),
    resetCart: (): Action => dispatch(actions.resetCart())
  };

  return (
    <Cart
      {...props}
      {...handlers}
      products={products}
      total={total}
    />
  );
};

export default CartContainer;
