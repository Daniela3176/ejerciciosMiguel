import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import App from './App';

export default class Home extends React.Component {

     _App = () => {
     ReactDOM.render(<App/>, document.getElementById('root'));
    };

  render(){

  return (
    <div className="home">
        <img src={process.env.PUBLIC_URL + 'PayPal.png'} className="logo" alt="logo" />
        <div className="welcome">Search for a repository by clicking on the button.</div>
        <button className="botn" onClick={() => this._App()}>
        Repositories
        </button>
    </div>
  );
}
}

