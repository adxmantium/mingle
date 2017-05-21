// reducers.js

import _ from 'lodash'

let init = {};

export default function(state = init, action) {

    switch(action.type) {

    	case '_USER:LOGIN':
    		return {...state};

        default:
            return state;
            
    }

};