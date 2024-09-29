import React from 'react';
import ReactDOM from 'react-dom';

const parent = React.createElement('p', {}, 'Hello World!');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent)