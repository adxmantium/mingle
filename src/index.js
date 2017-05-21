// /mingle/src/index.js

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, BrowserRouter, IndexRoute } from 'react-router-dom'

//store
import App from './App'
import Login from './login'
import store from './store'

render((

	<Provider store={ store }>
		<BrowserRouter>
			<Route path="/" component={ Login } />
	    </BrowserRouter>
    </Provider>

), document.getElementById('_Mingle'));