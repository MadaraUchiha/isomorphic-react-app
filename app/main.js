import React from 'react';
import ReactDOM from 'react-dom';
import State from './components/state';

if (typeof window !== 'undefined') {
    let text = window.location.search.replace('?text=', ''); // I am a lazy fuck.
    ReactDOM.render(<State text={text} />, document.getElementById('main'));
}