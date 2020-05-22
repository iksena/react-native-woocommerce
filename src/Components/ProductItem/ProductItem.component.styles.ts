import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
    card: ViewStyle;
    quantityView: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  card: {
    flex: 0,
    maxWidth: 180
  },
  quantityView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export default styles;
