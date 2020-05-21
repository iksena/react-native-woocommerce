import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
    container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    textAlign: 'center',
  }
});

export default styles;
