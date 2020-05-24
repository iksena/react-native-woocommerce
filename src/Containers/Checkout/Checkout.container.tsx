import React from 'react';
import { Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import selectors from '../../Redux/Selectors';
import Checkout from './Checkout.component';
import { CartItem, CartState } from '../../Models';
import { actions } from '../../Redux/Reducers/Checkout/Chekout.reducer';

const CheckoutContainer = (props: CartState): JSX.Element => {
  const products = useSelector(selectors.cart.getProducts);
  const total = useSelector(selectors.cart.getTotal);
  const dispatch = useDispatch();

  const handleCheckoutSubmit = (userInfo: object): Action => {
    const order = {
      billing: userInfo,
      shipping: userInfo,
      line_items: products.map(({ id, quantity }: CartItem) => ({
        product_id: id,
        quantity
      }))
    };

    return dispatch(actions.checkoutCommand(order));
  };

  return (
    <Checkout
      {...props}
      handleCheckoutSubmit={handleCheckoutSubmit}
      products={products}
      total={total}
    />
  );
};

export default CheckoutContainer;
