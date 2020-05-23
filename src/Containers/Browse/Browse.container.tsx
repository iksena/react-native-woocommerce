import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Action } from 'redux';

import { actions } from '../../Redux/Reducers/Products/Products.reducer';
import { actions as cartActions } from '../../Redux/Reducers/Cart/Cart.reducer';
import selectors from '../../Redux/Selectors';
import Browse from './Browse.component';
import { Product, ProductsState } from '../../Models';
import Routes from '../../Navigation/Routes';

const BrowseContainer = (props: ProductsState): JSX.Element => {
  const products = useSelector(selectors.products.getProducts);
  const refreshing = useSelector(selectors.products.isRefreshing);
  const page = useSelector(selectors.products.getPage);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handlers = {
    onRefresh: (): Action => dispatch(actions.refetchProducts({ page })),
    onEndReached: (): Action => dispatch(actions.productsEndReached({ page })),
    handleProductPress: (id: number): void => navigation.navigate(Routes.Product, { id }),
    addToCart: (product: Product): Action => {
      navigation.navigate(Routes.Orders, { screen: Routes.Cart });

      return dispatch(cartActions.addToCart(product));
    },
    removeFromCart: (productId: number): Action => dispatch(cartActions.removeFromCart(productId)),
    addQuantity: (productId: number): Action => dispatch(cartActions.addQuantity(productId)),
    subQuantity: (productId: number): Action => dispatch(cartActions.subQuantity(productId))
  };

  useEffect(() => {
    dispatch(actions.productsQuery({ page }));
  }, []);

  return (
    <Browse
      {...props}
      {...handlers}
      products={products}
      refreshing={refreshing}
      page={page}
    />
  );
};

export default BrowseContainer;
