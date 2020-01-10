import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Home from './Home';
import Branch from './Branch';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading:true,
      repos: [],
      repo: []
    };
  }


  async componentDidMount(){
    const url= "https://api.github.com/users/paypal/repos";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({repos:data});
    let newRepo = this.state.repos;
    this.setState({repos: newRepo.sort((a,b) => b.stargazers_count - a.stargazers_count)});
    this.setState({loading:false});
  }

  async _onPress (repositorio) {
        await this.setState({repo:repositorio});
        this._Branch();
    };

     _Branch = () => {
     ReactDOM.render(<Branch repo={this.state.repo}/>, document.getElementById('root'));
    };

    _Home = () => {
     ReactDOM.render(<Home/>, document.getElementById('root'));
    };

  render(){

    if(this.state.loading){
      return <div>loading...</div>
    }
    if(!this.state.repos.length){
      return <div>No Data</div>
    }

  return (
    <div className="screen">
    <div className="header2">
    <button className="botnBack" onClick={() => this._Home()}>Logout</button>
    </div>
    <div className="body">
      {this.state.repos.map(repo => (
        <div className="rec" key={repo.id}>
        <div className="title">{repo.name}</div>
        <div>ID: {repo.id}</div>
        <div>Stars: {repo.stargazers_count}</div>
        <button className="botn" onClick={key => this._onPress(repo)}>
        Branches
        </button>
        </div>
        ))}
    </div>
    </div>
  );
}
}
