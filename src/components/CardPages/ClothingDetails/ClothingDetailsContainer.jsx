import React from 'react';
import ClothingDetails from './ClothingDetails';
import { connect } from 'react-redux';
import { setItemAC } from '../../../redux/cart-redux';
import { withRouter } from 'react-router-dom';

let mapStateToProps = (state) => {
  return{
    mensProduct: state.mensPage,
    womensProduct: state.womensPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return{
    setItem: (img, name, size, color, price, id) => {
      dispatch(setItemAC(img, name, size, color, price, id));
    }
  }
} 

let WithUrlDataContainerComponent = withRouter(ClothingDetails)

const ClothingDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);

export default ClothingDetailsContainer;