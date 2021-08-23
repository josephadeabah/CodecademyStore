import {createStore, combineReducers} from 'redux';

import {inventoryReducer} from '../features/inventory/inventorySlice.js';
import {cartReducer} from '../features/cart/cartSlice.js';
import {currencyFilterReducer} from '../features/currencyFilter/currencyFilterSlice.js';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice.js';

const reducers = {
    inventory: inventoryReducer,
    cart: cartReducer,
    currencyFilter: currencyFilterReducer,
    searchTerm: searchTermReducer
}

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer);