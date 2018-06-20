import React, { Component } from 'react';
import { connect } from 'react-redux';

// import './App.css';

class App extends Component {
  render() {
    console.log(this.props.testStore);
    return (
      <div className="App">
          <input type="text"/>
          <button>Add track</button>
          <ul>
            {this.props.testStore.map((track, index)=> {
              return(
                <li key={index}>{track}</li>
              )
            })}
          </ul>
      </div>
    );
  }
}

export default connect(
  state=>({
    testStore: state
  }),    //map state to props
  dispatch=>({})
)(App);
