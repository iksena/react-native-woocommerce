import React from 'react';
import {Text, View} from 'react-native';

import styles from './Browse.component.styles.js';

const _renderProducts = (products) => products.map((product) => <Text>{product.name}</Text>);

const Browse = (props) => {
  const {products} = props;

  return (
    <View style={styles.container}>
      {_renderProducts(products)}
    </View>
  );
};

export default Browse;
