import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div className={"loginContainer"}>
                <div>
                    <input type="text" placeholder="Hola"/>
                </div>
                <div>
                    <input type="text" />
                </div>
                <Link to="/chat">
                    <button className="button">Ir a chat</button>
                </Link>
            </div>
        );
    }
}