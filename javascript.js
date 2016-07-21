import React from 'react';

const todos = [
{
	task: 'make React tutorial';
	isCompleted: false
}
];

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1> React To Do App</h1>
			</div>
			);
	}
}