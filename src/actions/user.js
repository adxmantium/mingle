// mingle/src/actions/user.js

import axios from 'axios'

export const update = (val) => {
	return {
		type: '_USER:UPDATE',
		payload: val,
	}
}

export const login = (cred) => {
	return {
		type: '_USER:LOGIN',
		payload: {}
	}
}