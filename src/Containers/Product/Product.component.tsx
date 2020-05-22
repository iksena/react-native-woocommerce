import React, { PureComponent } from 'react';
import { Dimensions, Modal, Text, TouchableOpacity, View } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Carousel, {
  CarouselStatic,
  ParallaxImage,
  ParallaxImageProps
} from 'react-native-snap-carousel';
// @ts-ignore
import HTML from 'react-native-render-html';
import { Rating } from 'react-native-elements';

import { Image, Product } from '../../Models';
import styles from './Product.component.styles';
import { toAmount } from '../../Utils';

const { width: screenWidth } = Dimensions.get('window');

interface Props {
    product: Product;
    handleShowImages: () => void;
    imagesShown: boolean;
}

class ProductComponent extends PureComponent<Props> {
    private carousel: CarouselStatic<object> | null;

    constructor(props: Props) {
      super(props);
      this.carousel = null;
    }

    _setCarousel = (carousel: null): void => {
      this.carousel = carousel;
    }

    _mapImages = (images: Array<Image>): Array<{ url: string }> =>
      images.map((image) => ({ url: image.src }));

    _renderImageItem = (handleShowImages: () => void) => (
        { item }: { item: { url: string } },
        parallaxProps: ParallaxImageProps,
    ): JSX.Element => (
      <TouchableOpacity
        style={styles.item}
        onPress={handleShowImages}
      >
        <ParallaxImage
          source={{ uri: item.url }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          {...parallaxProps}
        />
      </TouchableOpacity>
    );

    _renderImages = (
        images: Array<Image>,
        handleShowImages: () => void,
    ): JSX.Element => (
      <ImageViewer
        imageUrls={this._mapImages(images)}
        enableSwipeDown
        onSwipeDown={handleShowImages}
        index={this.carousel?.currentIndex}
      />
    );

    render(): JSX.Element {
      const {
        product: { name, images, description, price, average_rating: rating },
        imagesShown,
        handleShowImages,
      } = this.props;

      return (
        <View style={styles.wrapper}>
          <Carousel
            ref={this._setCarousel}
            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 60}
            data={this._mapImages(images)}
            renderItem={this._renderImageItem(handleShowImages)}
            hasParallaxImages
          />
          <View style={styles.detail}>
            <Text style={styles.textTitle}>{name}</Text>
            <Text style={styles.textPrice}>{toAmount(price)}</Text>
            <HTML
              html={description}
              textSelectable
            />
            <View style={styles.rating}>
              <Text style={styles.textSubHeading}>Rating:</Text>
              <Text style={styles.textRating}>{rating}</Text>
              <Rating
                readonly
                imageSize={20}
                startingValue={Number(rating)}
              />
            </View>
          </View>
          <Modal visible={imagesShown} transparent>
            {this._renderImages(images, handleShowImages)}
          </Modal>
        </View>
      );
    };
}

export default ProductComponent;
