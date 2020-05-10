import React from 'react';
import {Text, View} from 'react-native';

import styles from './Root.component.styles';

interface Props {
    name: String
}

const _renderRoot = (name: String) => (
    <Text>Hello, {name}!</Text>
);

const Root: React.FC<Props> = (props): JSX.Element => {
    const {name} = props;

    return (
        <View style={styles.container}>
            {_renderRoot(name)}
        </View>
    );
};

export default Root;
