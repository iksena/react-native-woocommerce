import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {actions} from '../../Redux/Reducers/Products/Products.reducer';
import selectors from '../../Redux/Selectors';
import Browse from './Browse.component';
import {ProductsState} from "../../Models";
import {useNavigation} from '@react-navigation/native';
import Routes from "../../Navigation/Routes";

const BrowseContainer = (props: ProductsState) => {
    const products = useSelector(selectors.products.getProducts);
    const refreshing = useSelector(selectors.products.isRefreshing);
    const page = useSelector(selectors.products.getPage);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handlers = {
        onRefresh: () => dispatch(actions.refetchProducts({page})),
        onEndReached: () => dispatch(actions.productsEndReached({page})),
        handleProductPress: (id: number) => navigation.navigate(Routes.Product, {id})
    }

    useEffect(() => {
        dispatch(actions.productsQuery({page}));
    }, []);

    return (
        <Browse
            {...props}
            {...handlers}
            products={products}
            refreshing={refreshing}
            page={page}
        />
    );
};

export default BrowseContainer;
