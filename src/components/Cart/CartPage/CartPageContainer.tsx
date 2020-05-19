import React from 'react'
import CartPage from './CartPage'
import { connect } from 'react-redux'
import { AppStateType } from '../../../redux/redux-store'
import { deleteItemAC } from '../../../redux/cart-redux'

let mapStateToProps = (state: AppStateType) => {
  return{
    cart: state.cart
  }
}

const CartPageContainer = connect(mapStateToProps, {deleteItemAC})(CartPage);

export default CartPageContainer;