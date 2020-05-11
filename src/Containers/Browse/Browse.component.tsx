import React from 'react';
import {Text, View} from 'react-native';

import styles from './Browse.component.styles';
import {Product, ProductsState} from "../../Models";

interface Props extends ProductsState {
}

const _renderProducts = (products: Array<Product>) =>
    products.map((product) => <Text>{product.name}</Text>);

const Browse = (props: Props) => {
    const {products} = props;

    return (
        <View style={styles.container}>
            {_renderProducts(products)}
        </View>
    );
};

export default Browse;
