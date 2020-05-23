import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
    container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    alignItems: 'center'
  }
});

export default styles;
