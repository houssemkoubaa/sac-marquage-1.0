import { legacy_createStore as createStore, configureStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
//this import is pointing to the file index.js in the folder reducers

// createstore : responsible for creating  the store
// applyMiddleware : for thunk : a piece of middleware we need to it in
// rootReducer : it's gonna look for a file called index.js inside of a folder called reducers
// we have to create teh rootRuducer via creating the folder reducers

const initialState = {};  // empty object

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    // inside the applyMiddleware we are gonna put any middleware we put in the const var
);

export default store;