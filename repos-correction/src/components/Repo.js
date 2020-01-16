import React from 'react';
import '../sass/Repo.scss';

export default class Repo extends React.Component {

	render() {

		return (
			<div>
    			<div>
      				{this.props.repos.map(repo => (
       				    <div className="box" key={repo.id}>
        				<div>{repo.name}</div>
        				<div>ID: {repo.id}</div>
        				<div>Stars: {repo.stargazers_count}</div>
        				</div>
        			))}
    			</div>
    	    </div>
		);
	}
}