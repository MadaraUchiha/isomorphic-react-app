'use strict';

import express from 'express';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import MainElement from '../app/components/state';
import hb from 'express-handlebars';
import path from 'path';

var app = express();

app.engine('handlebars', hb());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use('/assets', express.static(path.join(__dirname, '..', 'public')));

app.get('/', (request, response) => {

    let text = request.query.text || "Hello World! Add a ?text=something in the URL!";

    let markup = ReactDOMServer.renderToString(<MainElement text={text} />);

    response.render('index', {markup});
});

app.listen(8080);