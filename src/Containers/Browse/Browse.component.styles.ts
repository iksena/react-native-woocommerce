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
        flex: 0,
        minWidth: '40%'
    }

})

export default styles;
