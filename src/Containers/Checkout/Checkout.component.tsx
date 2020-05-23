import React from 'react';
import { ScrollView, View } from 'react-native';
import { Formik } from 'formik';
import { Button, Input } from 'react-native-elements';

import { CartState } from '../../Models';

interface Props extends CartState {
    handleCheckoutSubmit: (userInfo: object) => void;
}

const _renderForm = ({ handleCheckoutSubmit }: Props): JSX.Element => (
  <Formik
    initialValues={{
      first_name: '',
      last_name: '',
      address_1: '',
      address_2: '',
      city: '',
      state: '',
      postcode: '',
      country: '',
      email: '',
      phone: '',
    }}
    onSubmit={(values): void => handleCheckoutSubmit(values)}
  >
    {({
      handleChange,
      handleBlur,
      handleSubmit,
      values
    }) => (
      <View>
        <Input
          placeholder="First Name"
          onChangeText={handleChange('first_name')}
          onBlur={handleBlur('first_name')}
          value={values.first_name}/>
        <Input
          placeholder="Last Name"
          onChangeText={handleChange('last_name')}
          onBlur={handleBlur('last_name')}
          value={values.last_name}/>
        <Input
          placeholder="Address 1"
          onChangeText={handleChange('address_1')}
          onBlur={handleBlur('address_1')}
          value={values.address_1}/>
        <Input
          placeholder="Address 2"
          onChangeText={handleChange('address_2')}
          onBlur={handleBlur('address_2')}
          value={values.address_2}/>
        <Input
          placeholder="City"
          onChangeText={handleChange('city')}
          onBlur={handleBlur('city')}
          value={values.city}/>
        <Input
          placeholder="State"
          onChangeText={handleChange('state')}
          onBlur={handleBlur('state')}
          value={values.state}/>
        <Input
          placeholder="Post Code"
          onChangeText={handleChange('postcode')}
          onBlur={handleBlur('postcode')}
          value={values.postcode}/>
        <Input
          placeholder="Country"
          onChangeText={handleChange('country')}
          onBlur={handleBlur('country')}
          value={values.country}/>
        <Input
          placeholder="Email"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}/>
        <Input
          placeholder="Phone"
          onChangeText={handleChange('phone')}
          onBlur={handleBlur('phone')}
          value={values.phone}/>
        <Button
          // @ts-ignore
          onPress={handleSubmit}
          title="Proceed to payment"
        />
      </View>
    )}
  </Formik>
);

const Checkout = (props: Props): JSX.Element => (
  <ScrollView>
    {_renderForm(props)}
  </ScrollView>
);

export default Checkout;
