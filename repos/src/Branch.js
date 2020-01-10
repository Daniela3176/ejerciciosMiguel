import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';

export default class Branch extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loading:true,
      branches: []
    };
  }


  async componentDidMount(){
    const url= "https://api.github.com/repos/paypal/" + this.props.repo.name + "/branches";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({branches:data, loading:false});
  }

  _App = () => {
     ReactDOM.render(<App/>, document.getElementById('root'));
    };

  _Home = () => {
     ReactDOM.render(<Home/>, document.getElementById('root'));
    };


  render(){
  return (
    <div className="screen">
    <div className="header">
    <div><button className="botnBack" onClick={() => this._App()}>Back</button></div>
    <div><button className="botnBack" onClick={() => this._Home()}>Logout</button></div>
    </div>
    <div className="body">
      {this.state.branches.map(branch => (
        <div className="rec" key={branch.name}>
        <div className="title">{branch.name}</div>
        </div>
        ))}
    </div>
    </div>
  );
}
}

