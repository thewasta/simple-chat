import React from 'react';
import {render} from 'react-dom';

window.$ = window.jQuery = require("jquery");
import App from './Components/Index';

render(<App/>, document.getElementById('root'));