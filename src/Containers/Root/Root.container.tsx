import React from 'react';
import { useSelector } from 'react-redux';

import selector from '../../Redux/Selectors';
import Root from './Root.component';

export const RootContainer = (props: object): JSX.Element => {
  const name = useSelector((state) => selector.auth.getName(state));

  return (
    <Root
      {...props}
      name={name}
    />
  );
};

export default RootContainer;
