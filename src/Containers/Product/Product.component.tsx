import React, {PureComponent} from 'react';
import {Dimensions, Modal, Text, TouchableOpacity, View} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Carousel, {
    CarouselStatic,
    ParallaxImage,
    ParallaxImageProps
} from 'react-native-snap-carousel';

import {Image, Product} from '../../Models';
import styles from './Product.component.styles';

const {width: screenWidth} = Dimensions.get('window')

interface Props {
    product: Product,
    handleShowImages: () => void,
    imagesShown: boolean
}

class ProductComponent extends PureComponent<Props> {
    private carousel: CarouselStatic<any> | null;

    constructor(props: Props) {
        super(props);
        this.carousel = null;
    }

    _setCarousel = (c: null) => {
        this.carousel = c;
    }

    _mapImages = (images: Array<Image>) => images.map((image) => ({url: image.src}));

    _renderImageItem = (handleShowImages: () => void) => (
        {item, index}: { item: { url: string }, index: number },
        parallaxProps: ParallaxImageProps,
    ) => {
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={handleShowImages}
            >
                <ParallaxImage
                    source={{uri: item.url}}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
            </TouchableOpacity>
        );
    };

    _renderImages = (
        images: Array<Image>,
        handleShowImages: () => void
    ) => (
        <ImageViewer
            imageUrls={this._mapImages(images)}
            enableSwipeDown
            onSwipeDown={handleShowImages}
            index={this.carousel?.currentIndex}
        />
    );

    render() {
        const {product: {name, images}, imagesShown, handleShowImages} = this.props;

        return (
            <View>
                <Text>{name}</Text>
                <Carousel
                    ref={this._setCarousel}
                    sliderWidth={screenWidth}
                    sliderHeight={screenWidth}
                    itemWidth={screenWidth - 60}
                    data={this._mapImages(images)}
                    renderItem={this._renderImageItem(handleShowImages)}
                    hasParallaxImages
                />
                <Modal visible={imagesShown} transparent>
                    {this._renderImages(images, handleShowImages)}
                </Modal>
            </View>
        );
    };
}

export default ProductComponent;
