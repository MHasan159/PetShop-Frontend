import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  productListReducer,
  productDetailsReducer,
  productSaveReducer,
  productDeleteReducer,
  productReviewSaveReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userSigninReducer, userRegisterReducer, userUpdateReducer } from './reducers/userReducers';
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderDeleteReducer,
  myOrderListReducer,
  orderListReducer,
  payOrderReducer,
} from './reducers/orderReducers';

const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const userInfo = JSON.parse(localStorage.getItem('userInfo')) || '';

const initalState = { cart: { cartItems, shipping: {}, payment: {} }, userSignin: { userInfo } };

const store = createStore(
  combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
    productReviewSave: productReviewSaveReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    userUpdate: userUpdateReducer,
    orderCreate: orderCreateReducer,
    payOrder: payOrderReducer,
    orderDetails: orderDetailsReducer,
    orderDelete: orderDeleteReducer,
    myOrderList: myOrderListReducer,
    orderList: orderListReducer,
  }),
  initalState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
