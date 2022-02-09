import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import 'tachyons'
 


class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
		console.log('constructor')
	}

	componentDidMount(){
		console.log('componentDidMount')
		fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json())
		.then(users=> this.setState({robots: users}))

}




	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render(){
		const {robots,searchfield} = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		});
		console.log('render')

		return !robots.length ? 
			<h1>Loading</h1> :
		(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}
}

export default App;