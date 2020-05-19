import React from 'react';
import Cart from './Cart';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';


let mapStateToProps = (state: AppStateType) => {
  return{
    cart: state.cart
  }
}

const CartContainer = connect(mapStateToProps)(Cart);

export default CartContainer;