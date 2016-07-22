import React from 'react';

const todos = [
{
	task: 'make React tutorial';
	isCompleted: false
}
{
	task: 'eat dinner'
	isCompleted: true
}
];

export default class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			todos
		};

	};
	render() {
		return (
			<div>
				<h1> React To Do App</h1>
				<Todolist />
			</div>
			);
	}
}