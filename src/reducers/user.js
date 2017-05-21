// reducers.js

import _ from 'lodash'

let init = {};

export default function(state = init, action) {

    switch(action.type) {

    	case '_USER:LOGIN':
    	case '_USER:UPDATE':
    	case '_USER:LOGIN_ERR':
    	case '_USER:LOGIN_DONE':
    	case '_USER:LOGIN_PENDING':
    		return {...state, ...action.payload};

        default:
            return state;
            
    }

};