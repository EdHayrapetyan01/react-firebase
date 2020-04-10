import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC3gg7_lNwunqCIzm9wVsqMvkiQNJI5Vg4",
    authDomain: "clientmoneytransfer.firebaseapp.com",
    databaseURL: "https://clientmoneytransfer.firebaseio.com",
    projectId: "clientmoneytransfer",
    storageBucket: "clientmoneytransfer.appspot.com",
    messagingSenderId: "545775615302",
    appId: "1:545775615302:web:244f159c8f302d7714b947" 
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

// Create initial state
const initialState = { };

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;