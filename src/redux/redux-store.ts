import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import mensReducer from './mens-reducer'
import womensReducer from './womens-reducer'
import cartReducer from './cart-redux'

let rootReducer = combineReducers({
    mensPage: mensReducer,
    womensPage: womensReducer,
    cart: cartReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store