import { createStore } from 'redux';

import counterReducer from '../reducers/counterReducer';

const store = createStore(counterReducer); //store is nothing but global object which takes reducer as an argument

export default store;