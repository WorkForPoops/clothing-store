import React from 'react';
import All from './All';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AppStateType } from '../../../redux/redux-store';


let mapStateToProps = (state: AppStateType) => {
  return{
    mensProduct: state.mensPage.mensProduct,
    womensProduct: state.womensPage.womensProduct
  }
}


let WithUrlDataContainerComponent = withRouter(All)

const AllContainer = connect(mapStateToProps)(WithUrlDataContainerComponent);

export default AllContainer;