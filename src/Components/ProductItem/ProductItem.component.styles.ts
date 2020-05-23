import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
    quantityView: ViewStyle;
    browseView: ViewStyle;
    rating: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  quantityView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  browseView: {
    marginVertical: 5
  },
  rating: {
    paddingVertical: 5
  }
});

export default styles;
