import { createStore } from 'redux';
// src/redux/store.ts
import rootReducer from './reducer';

const store = createStore(rootReducer);

export default store;
