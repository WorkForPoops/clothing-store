import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import NewsContainer from './components/News/NewsContainer';

class App extends React.Component {

  // componentDidMount() {
  //   this.props.initializeApp();
  // }

  

  render() {
    return (
      <div>
        <Navbar />
        <NewsContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) =>({

})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, ))(App);

const MainApp = (props) => {
  return(
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
  )
}

export default MainApp;

