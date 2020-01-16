import React from 'react';
import '../sass/App.scss';
import Repositories from './Repositories';

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			search:"",
			repoName:"",
			clicked: false,
		};
	}

	async updateSearch(event) {
		await this.setState({search: event.target.value});
        this.setState({clicked: false});
	}

	onPress () {
		this.setState({repoName: this.state.search});
    	this.setState({clicked: true});
    };

	render() {
		if(!this.state.clicked){
			return (
      		<div className="header" >
  				<input type="text" onChange={this.updateSearch.bind(this)} />
  				<button onClick={() => this.onPress()} >Search</button>
  			</div>
  			)

    	}

		return (
			<div>
				<div className="header">
  					<input type="text" onChange={this.updateSearch.bind(this)} />
  					<button onClick={() => this.onPress()} >Search</button>
  				</div>
  				<div className="body">
  					<Repositories clicked={this.state.clicked} repoName={this.state.repoName} />
  				</div>
  			</div>
		);
	}
}

