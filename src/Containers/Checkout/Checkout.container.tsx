import React from 'react';
import { Linking } from 'react-native';
import { useSelector } from 'react-redux';

import selectors from '../../Redux/Selectors';
import Checkout from './Checkout.component';
import { CartItem, CartState } from '../../Models';
import WooCommerce from '../../Services/WooCommerce';
import config from '../../Config';
import { handleError } from '../../Utils';

const CheckoutContainer = (props: CartState): JSX.Element => {
  const products = useSelector(selectors.cart.getProducts);
  const total = useSelector(selectors.cart.getTotal);

  const handleCheckoutSubmit = async (userInfo: object) => {
    const order = {
      billing: userInfo,
      shipping: userInfo,
      line_items: products.map(({ id, quantity }: CartItem) => ({
        product_id: id,
        quantity
      }))
    };

    try {
      const { data: { id, order_key } } = await WooCommerce.post('/orders', order);
      return Linking.openURL(
          `${config.WC_BASE_URL}/checkout/order-pay/${id}?pay_for_order=true&key=${order_key}`
      );
    } catch (error) {
      return handleError(error);
    }
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
