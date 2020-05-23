import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import styles from './Cart.component.styles';
import { CartItem, CartState, Product } from '../../Models';
import ProductItem from '../../Components/ProductItem/ProductItem.component';
import { toAmount } from '../../Utils';

interface Props extends CartState {
    handleProductPress: (id: number) => void;
    handleCheckoutPress: () => void;
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    addQuantity: (id: number) => void;
    subQuantity: (id: number) => void;
    resetCart: () => void;
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
    total,
    handleCheckoutPress
  } = props;

  return (
    <>
      <View style={styles.cartOverview}>
        <View style={styles.leftCartOverview}>
          <Icon
            reverse
            name="trash-alt"
            type="font-awesome-5"
            onPress={(): void => resetCart()}
          />
          <Text style={styles.textTotal}>{`Total:\n${toAmount(total)}`}</Text>
        </View>
        <Button
          title="Checkout"
          onPress={(): void => handleCheckoutPress()}
        />
      </View>
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
