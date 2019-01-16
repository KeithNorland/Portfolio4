import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Portfolio from './components/portfolio';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';
import Contact from './components/contact';
import Resume from './components/resume';
import Projects from './components/projects';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Portfolio}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/projects" component={Projects}/>
        </Switch>

      </BrowserRouter>
    </Provider>
    , document.querySelector('.portfolio'));
}

document.addEventListener('DOMContentLoaded', main);
