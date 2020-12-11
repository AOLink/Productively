import authReducer from './auth'

import projectReducer from './projectReducer'

import { combineReducers } from 'redux'

import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
   firebase: firebaseReducer

   // fbReducer syncs auth status on fb with our redux app in the state
   // and pop it on the "firebase: " object

})     

export default rootReducer  