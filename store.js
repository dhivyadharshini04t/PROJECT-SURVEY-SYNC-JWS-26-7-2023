// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import formDataReducer from './reducers';

const rootReducer = combineReducers({
  formData: formDataReducer,
  // Add other reducers if you have any
});

const store = createStore(rootReducer);

export default store;
