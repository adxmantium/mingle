// mingle/src/App/index.js

import { connect } from 'react-redux'
import React, { Component } from 'react'

import { update } from './../actions/user'

class Login extends Component{
	constructor(props){
		super(props);
		this._login = this._login.bind(this);
	}

	_login(e){
		e.preventDefault();

		let { dispatch, _user } = this.props;

		dispatch( login(_user) );
	}

	render(){
		let { dispatch } = this.props;

		return (
			<form onSubmit={ this._login }>
				<input
					id=""
					type="email"
					name="email"
					placeholder="Enter email"
					onChange={ e => dispatch( update({email: e.target.value}) ) } />

				<button>Submit</button>
			</form>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps)(Login);