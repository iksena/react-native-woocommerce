import React from 'react';
import {useSelector} from 'react-redux';

import selector from '../../Redux/Selectors';
import Root from './Root.component';

export interface Props {
    name: String
}

export const RootContainer = (props: Props) => {
    const name = useSelector(state => selector.auth.getName(state));

    return (
        <Root
            {...props}
            name={name}
        />
    );
};

export default RootContainer;
