'use strict';

let babel = require('babel-register')({
    presets: ['es2015', 'react']
});

require('./server/index');