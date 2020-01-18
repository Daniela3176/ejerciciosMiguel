import React from 'react';
import Repo from '../components/Repos';

export default class Repositories extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            repos: []
        };
    }

    async componentDidMount() {
        if(this.props.searched !== "") {
        const url = "https://api.github.com/users/" + this.props.searched +"/repos";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ repos: data });
        let newRepo = this.state.repos;
        this.setState({ repos: newRepo.sort((a, b) => b.stargazers_count - a.stargazers_count) });
        }
    }

    render() {

        if (this.state.repos === undefined) {
            return <div>No Searches Found</div>
        }

        return (
            <div>
                <Repo repos = {this.state.repos} />
            </div>
        );
    }
}