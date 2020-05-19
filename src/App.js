import React, { Suspense } from 'react';
import './App.css';
import BottomNavbar from './components/BottomNavbar/BottomNavbar';
import TopNavbar from './components/TopNavbar/TopNavbar';
import HomePage from './components/HomePage/HomePage';
import FooterPage from './components/Footer/Footer';
import { Route, Redirect } from 'react-router-dom';
import AllContainer from './components/CardPages/AllCard/AllContainer';
import ClothingDetailsContainer from './components/CardPages/ClothingDetails/ClothingDetailsContainer';
import CartContainer from './components/Cart/CartIcon/CartContainer';
import CartPageContainer from './components/Cart/CartPage/CartPageContainer';
import TopNavbarMobile from './components/TopNavbar/TopNavbarMobile';
import Contact from './components/Contact/Contact';

const ClothingCardContainer = React.lazy(() => import ('./components/CardPages/ClothingCard/ClothingCardContainer'));

export default function App() {

  console.log(window.innerWidth);

  return (
    <div>

      {window.innerWidth > 680 ?
      <TopNavbar />
      :
      <TopNavbarMobile />
      }

      <BottomNavbar />

      <CartContainer />

      <Route path='/home' render={() => <HomePage />}/>
      <Route path='/:sex/all' render={() => <AllContainer />}/>
      <Route path='/:sex/clothes/detail/:type/:name/:id' render={() => <ClothingDetailsContainer />}/>
      <Route exact path='/:sex/clothes/:type' render={() => {
        return(
          <Suspense fallback={
            <div className="text-center m-5">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>  
          }>
            <ClothingCardContainer />
          </Suspense>
        )
      }}/>
      <Route exact path='/shop-cart' render={() => <CartPageContainer />}/> 
      <Route exact path='/contact' render={() => <Contact />}/> 
      <Route path='/' exact render={ () => <Redirect to={'/home'}/> }/>

      <FooterPage />
    </div>
  );
}
