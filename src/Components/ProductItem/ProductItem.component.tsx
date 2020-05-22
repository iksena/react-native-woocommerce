import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Card, Rating } from 'react-native-elements';
// @ts-ignore
import HTML from 'react-native-render-html';

import styles from './ProductItem.component.styles';
import { Product } from '../../Models';
import { toAmount } from '../../Utils';

interface Props {
    product: Product;
    handlePress: (id: number) => void;
}

const ProductItem = (props: Props): JSX.Element => {
  const {
    id,
    name,
    images: [image],
    price,
    average_rating: rating,
    description
  } = props.product;

  return (
    <TouchableOpacity onPress={(): void => props.handlePress(id)}>
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
      </Card>
    </TouchableOpacity>
  );
};

export default ProductItem;
