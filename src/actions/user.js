// mingle/src/actions/user.js

import axios from 'axios'

export const update = (val) => {
	return {
		type: '_USER:UPDATE',
		payload: val,
	}
}

export const login = (email) => {
	return (dispatch) => {
		dispatch({
	 		type: '_USER:LOGIN_PENDING',
	 		payload: {login_pending: true},
	 	});

		axios.post('/login', email)
			 .then((res) => {
			 	console.log('res: ', res.data);
			 	dispatch({
					type: '_USER:LOGIN_DONE',
					payload: {login_pending: false}
				});
			 })
			 .catch((err) => {
			 	console.log('error: ', err);
			 	dispatch({
			 		type: '_USER:LOGIN_ERR',
			 		payload: {login_pending: true},
			 	});
			 });
	}
}