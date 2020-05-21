import React from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { Card, Rating } from 'react-native-elements';
// @ts-ignore
import HTML from 'react-native-render-html';

import styles from './Browse.component.styles';
import { Product, ProductsState } from '../../Models';
import { toAmount } from '../../Utils';

interface Props extends ProductsState {
    onRefresh: () => void;
    onEndReached: () => void;
    handleProductPress: (id: number) => void;
}

const _renderProduct = (handlePress: (id: number) => void) =>
  ({
    item: {
      id,
      name,
      images: [image],
      price,
      average_rating: rating,
      description
    }
  }: { item: Product }): JSX.Element => (
    <TouchableOpacity onPress={(): void => handlePress(id)}>
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
            p: (_: any, children: React.ReactNode) =>
              <Text numberOfLines={2}>{children}</Text>
          }}
        />
      </Card>
    </TouchableOpacity>
  );

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
