import React from 'react';
import { Text, View } from 'react-native';

import styles from './Root.component.styles';

interface Props {
    name: string;
}

const _renderRoot = (name: string) => (
  <Text>Hello, {name}!</Text>
);

const Root = (props: Props): JSX.Element => {
  const { name } = props;

  return (
    <View style={styles.container}>
      {_renderRoot(name)}
    </View>
  );
};

export default Root;
