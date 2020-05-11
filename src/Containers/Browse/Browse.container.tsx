import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {actions} from '../../Redux/Reducers/Products/Products.reducer';
import selector from '../../Redux/Selectors';
import Browse from './Browse.component';
import {ProductsState} from "../../Models";

const BrowseContainer = (props: ProductsState) => {
    const products = useSelector(state => selector.products.getProducts(state));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.productsQuery());
    }, []);

    return (
        <Browse
            {...props}
            products={products}
        />
    );
};

export default BrowseContainer;
