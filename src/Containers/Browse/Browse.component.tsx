import React from 'react';
import {FlatList, Text} from 'react-native';
import {Card, Rating} from 'react-native-elements';

import styles from './Browse.component.styles';
import {Product, ProductsState} from '../../Models';

interface Props extends ProductsState {
    onRefresh: () => void,
    onEndReached: () => void
}

const _renderProduct = ({item: {name, images: [image], price, average_rating: rating}}: { item: Product }) => (
    <Card
        title={name}
        // @ts-ignore
        titleNumberOfLines={2}
        image={{uri: image.src}}
        containerStyle={styles.card}
    >
        <Text>{price}</Text>
        <Rating
            readonly
            imageSize={10}
            startingValue={Number(rating)}
        />
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
