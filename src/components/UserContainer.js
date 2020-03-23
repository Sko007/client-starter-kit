import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User';
import { loadUser } from '../actions/fetchUser';

class UserContainer extends Component {
	componentDidMount() {
		this.props.loadUser();
	}

	render() {
		if (!this.props.user) {
			return null;
		}
		console.log('check user in Compoennt', this.props.user);
		return (
			<div>
				{this.props.loading ? (
					<User user={this.props.user} />
				) : (
					'Loading'
				)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log('check the state', state.user.list);
	return {
		user: state.user.list,
		loading: state.user.isFetched
	};
};

export default connect(mapStateToProps, { loadUser })(UserContainer);
