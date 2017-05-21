// reducers.js

import _ from 'lodash'

let init = {};

export default function(state = init, action) {

    switch(action.type) {

    	case '_USER:LOGIN':
    	case '_USER:UPDATE':
    		return {...state, ...action.payload};

        default:
            return state;
            
    }

};