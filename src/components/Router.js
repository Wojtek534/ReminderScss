import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './view/home/HomePage';
import ElementPage from './view/elements/ElementPage';
import TablePage from './view/table/TablePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/element" component={ElementPage}/>
        <Route exact path="/table" component={TablePage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
