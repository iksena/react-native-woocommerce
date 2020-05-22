import React from 'react';
import { FlatList, Text } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './Cart.component.styles';
import { CartItem, CartState, Product } from '../../Models';
import ProductItem from '../../Components/ProductItem/ProductItem.component';
import { toAmount } from '../../Utils';

interface Props extends CartState {
    handleProductPress: (id: number) => void;
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    addQuantity: (id: number) => void;
    subQuantity: (id: number) => void;
    resetCart: () => void;
    total: number;
}

const _renderProduct = (props: Props) =>
  ({ item }: { item: CartItem }): JSX.Element =>
    <ProductItem
      {...props}
      product={item}
      isInCart
      quantity={item.quantity}
    />;

const Browse = (props: Props): JSX.Element => {
  const {
    products,
    resetCart,
    total
  } = props;

  return (
    <>
      <Text>{toAmount(total)}</Text>
      <Button
        title="Clear cart"
        onPress={(): void => resetCart()}
      />
      <FlatList
        contentContainerStyle={styles.container}
        data={products}
        renderItem={_renderProduct(props)}
        keyExtractor={(item): string => `${item.id}`}
        numColumns={2}
      />
    </>
  );
};

export default Browse;
