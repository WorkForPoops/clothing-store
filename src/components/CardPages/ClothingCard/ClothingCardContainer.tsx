import React from 'react';
import ClothingCard from './ClothingCard';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AppStateType } from '../../../redux/redux-store';


let mapStateToProps = (state: AppStateType) => {
  return{
    mensProduct: state.mensPage,
    womensProduct: state.womensPage
  }
}

let WithUrlDataContainerComponent = withRouter(ClothingCard)

const ClothingCardContainer = connect(mapStateToProps)(WithUrlDataContainerComponent);

export default ClothingCardContainer;