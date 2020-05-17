import React from 'react';
import {FlatList, Text} from 'react-native';

import styles from './Browse.component.styles';
import {Product, ProductsState} from "../../Models";
import {Card} from "react-native-elements";

interface Props extends ProductsState {
    onRefresh: () => void,
    onEndReached: () => void
}

const _renderProduct = ({item: {name, images: [image], price}}: { item: Product }) => (
    <Card
        title={name}
        // @ts-ignore
        titleNumberOfLines={2}
        image={{uri: image.src}}
        containerStyle={styles.card}
    >
        <Text>{price}</Text>
    </Card>
)

const Browse = (props: Props) => {
    const {products, refreshing, onRefresh, onEndReached} = props;

    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={products}
            renderItem={_renderProduct}
            keyExtractor={(item) => `${item.id}`}
            refreshing={refreshing}
            onEndReached={onEndReached}
            onRefresh={onRefresh}
            numColumns={2}
        />
    );
};

export default Browse;
