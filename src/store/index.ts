import { combineReducers } from 'redux';
import authReducer from '@store/auth/reducers';
import { AppState } from './types/app';
import { createStore } from 'redux';

const appReducer = combineReducers<AppState>({
  user: authReducer,
});

const store = createStore(appReducer);

export default store;
