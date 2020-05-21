import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';

import selectors from '../../Redux/Selectors';
import ProductComponent from './Product.component';
import { Product, ProductsState } from '../../Models';

const _getProductById = (products: Array<Product>, id: number): Product =>
    products.find((product) => product.id === id) as Product;

const ProductContainer = (props: ProductsState): JSX.Element => {
  const products = useSelector(selectors.products.getProducts);
  const [imagesShown, showImages] = useState(false);
  const route = useRoute();
  const handlers = {
    handleShowImages: (): void =>
      showImages((prevState) => !prevState)
  };

  return (
    <ProductComponent
      {...props}
      {...handlers}
      // @ts-ignore
      product={_getProductById(products, route.params.id)}
      imagesShown={imagesShown}
    />
  );
};

export default ProductContainer;
