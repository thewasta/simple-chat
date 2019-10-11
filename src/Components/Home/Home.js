import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Home.scss';
import Input from '../Input/Input';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'loginContainer'}>
                <div className={'box'}>
                    <h2>Iniciar Sesión</h2>
                    <Link to="/chat"/>
                    <form method="POST">
                        <Input type="text" innerHtml="Nombre"/>
                        <Input type="password" innerHtml="Contraseña"/>
                        <Input type="submit"/>
                    </form>
                </div>
            </div>
        );
    }
}