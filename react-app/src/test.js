import React from 'react';
import Hello from './user';
import Home from './home'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

function Test() {
  return (
    <BrowserRouter>

      <Link to='/'>HOME</Link> <br />
      <Link to='/hello/value1/value2'>HELLO</Link>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/hello/:key1/:key2' component={Hello} />
      </Switch>

    </BrowserRouter>
  );
}

export default Test;