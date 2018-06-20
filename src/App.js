import React, { Component } from 'react';
import { connect } from 'react-redux';

// import './App.css';

class App extends Component {
  addTrack=()=>{
    console.log('add track', this.trackInput.value);
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = '';
  };


  render() {
    console.log(this.props.testStore);

    return (
      <div className="App">
          <input type="text" ref={(input)=> {this.trackInput=input}}/>
          <button onClick={this.addTrack}>Add track</button>
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
  dispatch=>({
    onAddTrack:(trackName)=>{
      dispatch({type: 'ADD_TRACK', payload: trackName})
    }
  })
)(App);
