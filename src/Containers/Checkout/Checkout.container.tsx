import React from 'react';
import { useSelector } from 'react-redux';

import selectors from '../../Redux/Selectors';
import Checkout from './Checkout.component';
import { CartItem, CartState } from '../../Models';

const CheckoutContainer = (props: CartState): JSX.Element => {
  const products = useSelector(selectors.cart.getProducts);
  const total = useSelector(selectors.cart.getTotal);

  const handlers = {
    handleCheckoutSubmit: (userInfo: object): void => {
      const cartItems = products.map(({ id, quantity }: CartItem) => ({
        product_id: id,
        quantity
      }));
      const order = {
        billing: userInfo,
        shipping: userInfo,
        line_items: cartItems
      };

      console.log('order', order);
    }
  };

  return (
    <Checkout
      {...props}
      {...handlers}
      products={products}
      total={total}
    />
  );
};

export default CheckoutContainer;
