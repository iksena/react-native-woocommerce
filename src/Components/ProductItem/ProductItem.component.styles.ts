import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
    card: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  card: {
    flex: 0,
    maxWidth: 180
  }
});

export default styles;
