
import {combineReducers} from 'redux';
import addToCart from './cart';
 const rootReducer = combineReducers ({
     product : addToCart,
 })
 export default rootReducer;

