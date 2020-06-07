import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import News from './News';


class NewsContainer extends React.Component{

  render(){
    return <News news={this.props.newsPage} /> 
  }   
}

let mapStateToProps = (state) => ({
  newsPage: state.newsPage
});

export default compose(
  connect(mapStateToProps, {}),
)(NewsContainer);