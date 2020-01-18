import React from 'react';

export default class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            typed: "",
            users: [],
            suggestions: [],
        };
    }

    async componentDidMount() {
            const url = "https://api.github.com/users";
            const response = await fetch(url);
            const data = await response.json();
            this.setState({ users: data });
            let newUser = this.state.users;
            this.setState({ users: newUser.sort((a, b) => a.login > b.login) });
            console.log(this.state.users);
    }

    async updateSearch(event) {
        await this.setState({ typed: event.target.value })
        let suggest = [];
        if (this.state.typed !== "") {
            for (let user of this.state.users) {
                if(user.login.startsWith(this.state.typed)) {
                    suggest.push(user.login);
                }
            }
        }
        await this.setState({suggestions: suggest});
        console.log(this.state.suggestions);
    }

    render() {

        return (
            <div>
                <input type="text" onChange={this.updateSearch.bind(this)} />
            </div>
        );
    }
}