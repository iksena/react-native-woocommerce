import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Card, Rating, Icon, Button } from 'react-native-elements';
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

const _renderCartDetail = (props: Props): JSX.Element => (
  <>
    <View style={styles.quantityView}>
      <Icon
        name='minus'
        type='font-awesome-5'
        onPress={(): void => props.subQuantity(props.product.id)}
      />
      <Text>Quantity: {props.quantity}</Text>
      <Icon
        name='plus'
        type='font-awesome-5'
        onPress={(): void => props.addQuantity(props.product.id)}
      />
    </View>
    <Button
      title="Remove"
      onPress={(): void => props.removeFromCart(props.product.id)}
    />
  </>
);

const _renderBrowseDetail = (props: Props): JSX.Element => (
  <>
    <Rating
      readonly
      imageSize={10}
      startingValue={Number(props.product.average_rating)}
    />
    <HTML
      html={props.product.description}
      textSelectable
      renderers={{
        p: (_: any, children: React.ReactNode): JSX.Element =>
          <Text numberOfLines={2}>{children}</Text>
      }}
    />
    <Button
      title="Add to cart"
      onPress={(): void => props.addToCart(props.product)}
    />
  </>
);

const ProductItem = (props: Props): JSX.Element => {
  const {
    product: {
      id,
      name,
      images: [image],
      price
    },
    handleProductPress,
    isInCart = false
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
        <Text>{toAmount(price)}</Text>
        {isInCart ?
            _renderCartDetail(props) :
            _renderBrowseDetail(props)
        }
      </Card>
    </TouchableOpacity>
  );
};

export default ProductItem;
