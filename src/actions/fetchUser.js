import superagent from 'superagent';
import User from '../components/User';

export const loadUser = () => (dispatch, getstate) => {
	superagent
		.get('http://localhost:4000/minister')
		.then(user => {
			console.log('thunk for userfetch', user.body.user);
			dispatch({ type: 'USER_FETCHED', payload: user.body.user });
		})
		.catch(console.error);
};
