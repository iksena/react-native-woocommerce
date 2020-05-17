import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
    container: ViewStyle;
    card: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    card: {
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 5,
        marginRight:10,
        width: '45%'
    }

})

export default styles;
