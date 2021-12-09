import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import 'firebase/compat/auth';

const rootReducer = combineReducers({
  firestore: firestoreReducer
});

export default rootReducer;