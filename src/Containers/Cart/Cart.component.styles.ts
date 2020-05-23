import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
    container: ViewStyle;
    cartOverview: ViewStyle;
    leftCartOverview: ViewStyle;
    textTotal: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    alignItems: 'center'
  },
  cartOverview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 10
  },
  leftCartOverview: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 5
  }
});

export default styles;
