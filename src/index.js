import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';

let menu =[
  {
    link: '/articles',
    label: 'Articles'
  },
  {
    link: '/contacts',
    label: 'Contacts'
  },
  {
    link: '/posts',
    label: 'Posts'
  }
];

let initialState = [
  'Smells likes spirit',
  'Entry Sandman'
];

//reducer playlist
let playlist=(state=initialState, action) => {
  if(action.type==='ADD_TRACK'){
    return [...state, action.payload];
  } return state
};

const store = createStore(playlist);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();


// import {createStore} from 'redux';
//
// //reducer playlist
//
// let playlist=(state=[], action) => {
//   if(action.type==='ADD_TRACK'){
//     return [...state, action.payload];
//   } return state
// };
//
// const store = createStore(playlist);
// const addTrackBtn = document.querySelector('.add-track');
// const list =document.querySelector('.list');
// const trackInput = document.querySelector('.track-input');
//
// store.subscribe(()=> {
//   console.log('subscribe', store.getState());
//
//   list.innerHTML='';
//   trackInput.value = '';
//   store.getState().forEach(track=> {
//     let listItem = document.createElement('li');
//     listItem.textContent = track;
//     list.appendChild(listItem)
//     // list.appendChild()
//   })
// });
//
//
// // store.dispatch({type: 'ADD_TRACK', payload: 'Smells like spirit'});
//
//
//
//
// addTrackBtn.addEventListener('click', ()=>{
//   const trackName = trackInput.value;
//   console.log('trackName', trackName);
//   store.dispatch({type: 'ADD_TRACK', payload: trackName});
// });