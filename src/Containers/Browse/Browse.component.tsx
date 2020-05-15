import React from 'react';
import {FlatList, Text} from 'react-native';

import styles from './Browse.component.styles';
import {Product, ProductsState} from "../../Models";
import {Card} from "react-native-elements";

interface Props extends ProductsState {
    onRefresh: () => void,
    onEndReached: () => void
}

const _renderProduct = ({item: {name, images, price}}: { item: Product }) => (
    <Card
        title={name}
        image={{uri: images[0].src}}
    >
        <Text>{price}</Text>
    </Card>
)

const Browse = (props: Props) => {
    const {products, refreshing, onRefresh, onEndReached} = props;

    return (
        <FlatList
            data={products}
            renderItem={_renderProduct}
            keyExtractor={item => item.id}
            refreshing={refreshing}
            onEndReached={onEndReached}
            onRefresh={onRefresh}
            style={styles.container}
        />
    );
};

export default Browse;
