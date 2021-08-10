import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';



import {state} from "./components/redax/state";
import {rerenderEntireTree} from "./render";



rerenderEntireTree(state);



reportWebVitals();
