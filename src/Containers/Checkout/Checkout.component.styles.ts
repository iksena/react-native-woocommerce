import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
    checkoutContainer: ViewStyle;
    textHeading: TextStyle;
    textEmpty: TextStyle;
    orderItem: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  checkoutContainer: {
    marginHorizontal: 5
  },
  textHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10
  },
  orderItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2
  },
  textEmpty: {
    textAlign: 'center',
    marginTop: 16
  }
});

export default styles;
