import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import Repositories from './containers/Repositories';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typed: "",
      isClicked: false,
    };
  }

  async updateSearch(event) {
    await this.setState({ typed: event.target.value });
    this.setState({isClicked: false});
  }

  async changeState() {
    await this.props.setName(this.state.typed)
    console.log(this.props.searched);
    this.setState({isClicked: true});
  }


  render() {
    if(!this.state.isClicked){
    return (
      <div>
        <div className="header">
          <input type="text" onChange={this.updateSearch.bind(this)} />
          <button onClick={() => this.changeState()}>Search</button>
        </div>
      </div>
    );
    }

    return (
      <div>
        <div className="header">
          <input type="text" onChange={this.updateSearch.bind(this)} />
          <button onClick={() => this.changeState()}>Search</button>
        </div>
        <div className="body">
          <Repositories searched={this.props.searched} />
        </div>
      </div>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    searched: state.searched
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "CHANGE_NAME",
        payload: name
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
