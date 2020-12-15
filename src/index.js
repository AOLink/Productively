import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/root'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import firebase from './config/fbConfig'

import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
//import { reduxFirestore, getFirestore,  } from 'redux-firestore'

import { ReactReduxFirebaseProvider, getFirebase, reactReduxFirebase} from 'react-redux-firebase'
//import { reactReduxFirebase, getFirebase,  } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'

// const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore }))); 
  
import 'firebase/firestore';

const rrfConfig = {
    userProfile:'projects',
    useFirestoreForProfile: true

}

  const store = createStore(rootReducer,
  compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore })),
  reduxFirestore(firebase),
 
  reduxFirestore(fbConfig),
  //reactReduxFirebase(fbConfig, { attachAuthIsReady: true})

  )
  );

  /*
store.firebaseAuthIsReady.then(() => {

})
*/ 
const rffProps = {
  firebase,
  useFirestoreForProfile: true,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}




ReactDOM.render(
  <React.StrictMode> 
   <Provider store={store}>
     <ReactReduxFirebaseProvider {...rffProps}>
      
     <App />
     </ReactReduxFirebaseProvider>

     </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
