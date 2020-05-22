import React from 'react';
import { FlatList } from 'react-native';

import styles from './Browse.component.styles';
import { Product, ProductsState } from '../../Models';
import ProductItem from '../../Components/ProductItem/ProductItem.component';

interface Props extends ProductsState {
    onRefresh: () => void;
    onEndReached: () => void;
    handleProductPress: (id: number) => void;
}

const _renderProduct = (handlePress: (id: number) => void) =>
  ({ item }: { item: Product }): JSX.Element =>
    <ProductItem handlePress={handlePress} product={item}/>;

const Browse = (props: Props): JSX.Element => {
  const {
    products,
    refreshing,
    onRefresh,
    onEndReached,
    handleProductPress
  } = props;

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={products}
      renderItem={_renderProduct(handleProductPress)}
      keyExtractor={(item): string => `${item.id}`}
      refreshing={refreshing}
      onEndReached={onEndReached}
      onRefresh={onRefresh}
      numColumns={2}
    />
  );
};

export default Browse;
