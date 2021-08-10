import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';

import ReactDOM from 'react-dom';
import App from './App';

import {state, addPost, RootStateType, updateNewPostText} from "./components/redax/state";

export let rerenderEntireTree = (state: RootStateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <App  state={state}  addPost={addPost} updateNewPostText={updateNewPostText}></App>
        </React.StrictMode>,
        document.getElementById('root')
    );

}





reportWebVitals();
