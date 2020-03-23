import { combineReducers } from 'redux';
import { userReducer } from './loadUserReducer';

export default combineReducers({
	user: userReducer
});
