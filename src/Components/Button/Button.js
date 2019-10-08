import React, {Component} from 'react';
import './Button.css';

export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className={"button"} data-content={this.props.button}>
            </button>
        );
    }
}