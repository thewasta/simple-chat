import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home/Home';
import Chat from './Chat/Chat';
import io from 'socket.io-client';
import './Index.scss';

export default class Index extends Component {
    componentDidMount() {
        console.log($)
        this.socket = io();
    }

    render() {
        return (
            <Router>
                <Route path="/" exact component={Home}/>
                <Route path="/chat" exact component={Chat}/>
            </Router>
        );
    }

}