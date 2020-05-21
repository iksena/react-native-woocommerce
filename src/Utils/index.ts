import { showMessage } from 'react-native-flash-message';

export const isNonEmptyArray = (array: Array<any>) => {
  return Array.isArray(array) && array.length > 0;
};

export const handleError = ({ message = 'Something went wrong' }: { message: string }) =>
  showMessage({
    message,
    type: 'danger'
  });
