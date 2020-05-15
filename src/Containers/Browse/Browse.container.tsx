import React, {useEffect} from 'react';
import {Dispatch} from "redux";
import {useDispatch, useSelector} from 'react-redux';

import {actions} from '../../Redux/Reducers/Products/Products.reducer';
import selectors from '../../Redux/Selectors';
import Browse from './Browse.component';
import {ProductsState} from "../../Models";

const handlers = (dispatch: Dispatch, page: number) => ({
    onRefresh: () => dispatch(actions.refetchProducts({page})),
    onEndReached: () => dispatch(actions.productsEndReached({page}))
})

const BrowseContainer = (props: ProductsState) => {
    const products = useSelector(selectors.products.getProducts);
    const refreshing = useSelector(selectors.products.isRefreshing);
    const page = useSelector(selectors.products.getPage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.productsQuery({page}));
    }, []);

    return (
        <Browse
            {...props}
            {...handlers(dispatch, page)}
            products={products}
            refreshing={refreshing}
            page={page}
        />
    );
};

export default BrowseContainer;
