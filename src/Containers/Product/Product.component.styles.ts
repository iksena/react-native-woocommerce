import {
  Dimensions,
  ImageStyle,
  Platform,
  StyleSheet,
  ViewStyle
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

interface Styles {
  wrapper: ViewStyle;
  detail: ViewStyle;
  textTitle: ViewStyle;
  rating: ViewStyle;
  textPrice: ViewStyle;
  textSubHeading: ViewStyle;
  textRating: ViewStyle;
  item: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
}

const styles = StyleSheet.create<Styles>({
  wrapper: {
    paddingTop: 5,
  },
  detail: {
    marginTop: 10,
    marginHorizontal: 5
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  rating: { flexDirection: 'row', alignItems: 'center' },
  textPrice: { fontSize: 18, fontWeight: 'bold', color: '#006db3' },
  textSubHeading: { fontSize: 18, fontWeight: 'bold', margin: 5 },
  textRating: { fontSize: 18, margin: 5 },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    height: screenWidth - 60,
    marginBottom: Platform.select({ ios: 0, android: 1 }),
    backgroundColor: 'white',
    borderRadius: 5,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});

export default styles;
