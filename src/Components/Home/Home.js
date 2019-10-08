import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                HOME PAGE
                <Link to="/chat">
                    <button>Ir a chat</button>
                </Link>
            </div>
        );
    }
}