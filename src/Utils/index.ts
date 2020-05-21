import { showMessage } from 'react-native-flash-message';

export const isNonEmptyArray = (array: Array<any>): boolean =>
  Array.isArray(array) && array.length > 0;

export const handleError = (
    { message = 'Something went wrong' }: { message: string }
): void =>
  showMessage({
    message,
    type: 'danger'
  });

export const toAmount = (amount: number): string =>
  new Intl.NumberFormat(
      'id-ID',
      { style: 'currency', currency: 'IDR' }
  ).format(amount);
