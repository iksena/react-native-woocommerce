import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Card, Rating, Button } from 'react-native-elements';
// @ts-ignore
import HTML from 'react-native-render-html';

import styles from './ProductItem.component.styles';
import { Product } from '../../Models';
import { toAmount } from '../../Utils';

interface Props {
    product: Product;
    handleProductPress: (id: number) => void;
    isInCart?: boolean;
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    addQuantity: (id: number) => void;
    subQuantity: (id: number) => void;
    quantity?: number;
}

const ProductItem = (props: Props): JSX.Element => {
  const {
    product: {
      id,
      name,
      images: [image],
      price,
      average_rating: rating,
      description
    },
    handleProductPress,
    addToCart,
    removeFromCart,
    isInCart = false,
    quantity = 0
  } = props;


  return (
    <TouchableOpacity onPress={(): void => handleProductPress(id)}>
      <Card
        title={name}
        // @ts-ignore
        titleNumberOfLines={2}
        image={{ uri: image.src }}
        containerStyle={styles.card}
      >
        <Rating
          readonly
          imageSize={10}
          startingValue={Number(rating)}
        />
        <Text>{toAmount(price)}</Text>
        <HTML
          html={description}
          textSelectable
          renderers={{
            p: (_: any, children: React.ReactNode): JSX.Element =>
              <Text numberOfLines={2}>{children}</Text>
          }}
        />
        {isInCart && <Text>Quantity: {quantity}</Text>}
        <Button
          title={isInCart ? 'Remove from cart' : 'Add to cart'}
          onPress={(): void => isInCart ? removeFromCart(id) : addToCart(props.product)}
        />
      </Card>
    </TouchableOpacity>
  );
};

export default ProductItem;
