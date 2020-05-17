import React from 'react';
import {Modal, Text, View} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {Image, Product} from "../../Models";

interface Props {
    product: Product,
    handleShowImages: () => void,
    imagesShown: boolean
}

const _renderImages = (
    images: Array<Image>,
    handleShowImages: () => void
) => (
    <ImageViewer
        imageUrls={images.map(image => ({url: image.src}))}
        enableSwipeDown
        onSwipeDown={handleShowImages}
    />);

const ProductComponent = (props: Props) => {
    const {product: {name, images}, imagesShown, handleShowImages} = props;

    return (
        <View>
            <Text>{name}</Text>
            <Modal visible={imagesShown} transparent={true}>
                {_renderImages(images, handleShowImages)}
            </Modal>
        </View>
    );
};

export default ProductComponent;
