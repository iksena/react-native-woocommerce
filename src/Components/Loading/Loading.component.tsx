import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Overlay } from 'react-native-elements';
import { useSelector } from 'react-redux';

import selectors from '../../Redux/Selectors';

const Loading = (): JSX.Element => {
  const isLoading = useSelector(selectors.loading.getVisibility);
  const isRenderable = useSelector(selectors.app.getRenderableState);

  return (
    <Overlay isVisible={isLoading && !isRenderable}>
      <ActivityIndicator size="large" color="black"/>
    </Overlay>
  );
};

export default Loading;
