import React from 'react';
import { FlatList } from 'react-native';

import styles from './Browse.component.styles';
import { Product, ProductsState } from '../../Models';
import ProductItem from '../../Components/ProductItem/ProductItem.component';

interface Props extends ProductsState {
    onRefresh: () => void;
    onEndReached: () => void;
    handleProductPress: (id: number) => void;
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    addQuantity: (id: number) => void;
    subQuantity: (id: number) => void;
}

const _renderProduct = (props: Props) =>
  ({ item }: { item: Product }): JSX.Element =>
    <ProductItem
      {...props}
      product={item}
    />;

const Browse = (props: Props): JSX.Element => {
  const {
    products,
    refreshing,
    onRefresh,
    onEndReached
  } = props;

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={products}
      renderItem={_renderProduct(props)}
      keyExtractor={(item): string => `${item.id}`}
      refreshing={refreshing}
      onEndReached={onEndReached}
      onRefresh={onRefresh}
      numColumns={2}
    />
  );
};

export default Browse;
