import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './normalize.css';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Resume from './components/Resume/Resume.js';

ReactDOM.render(
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/resume" component={Resume} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  , document.querySelector('.container')
);
