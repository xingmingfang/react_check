import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './views/ListItem';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<List />, document.getElementById('root'));
registerServiceWorker();
