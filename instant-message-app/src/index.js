import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import LoginComponent from './login/login';
import SignupComponent from './signup/signup'
import DashboardComponent from './dashboard/dashboard'

const firebase = require("firebase")
require("firebase/firestore")

firebase.initializeApp({
    apiKey: "AIzaSyD5zWrjHLMkUlYHFTp62mvJK4aRKE6a8IU",
    authDomain: "instant-message-1c600.firebaseapp.com",
    databaseURL: "https://instant-message-1c600.firebaseio.com",
    projectId: "instant-message-1c600",
    storageBucket: "instant-message-1c600.appspot.com",
    messagingSenderId: "282653535131",
    appId: "1:282653535131:web:ebc861b5fc9adee9cd8f3e"
})

const routing = (
    <Router>
        <div id='routing-container'>
            <Route path='/login' component={LoginComponent}></Route>
            <Route path='/signup' component={SignupComponent}></Route>
            <Route path='/dashboard' component={DashboardComponent}></Route>
        </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
