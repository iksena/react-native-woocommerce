import {Dimensions, ImageStyle, Platform, StyleSheet, ViewStyle} from "react-native";

const {width: screenWidth} = Dimensions.get('window')

interface Styles {
    item: ViewStyle,
    imageContainer: ViewStyle,
    image: ImageStyle,
}

const styles = StyleSheet.create<Styles>({
    item: {
        width: screenWidth - 60,
        height: screenWidth - 60,
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ios: 0, android: 1}),
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
});

export default styles;
