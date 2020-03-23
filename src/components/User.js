import React from 'react';

function User(props) {
	console.log('props', props.user);
	const user = props.user;
	console.log('user', user);
	return (
		<div>
			{user.map((user, index) => (
				<h1 key={index}>{user}</h1>
			))}
		</div>
	);
}

export default User;
