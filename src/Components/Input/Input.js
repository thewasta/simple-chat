import React, {Component} from 'react';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            innerHtml: ''
        };
    }

    createElement() {
        if (this.props.type !== 'submit') {
            return (<div>
                <input type={this.props.type} required/>
                <label>{this.props.innerHtml}</label>
            </div>);
        }
        return (
            <input type="submit" value="Entrar"/>
        );
    }

    render() {
        return (
            this.createElement()
        );
    }
}