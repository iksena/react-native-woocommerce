import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
    actionView: ViewStyle;
    rating: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  actionView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5
  },
  rating: {
    paddingVertical: 5
  }
});

export default styles;
