import React from 'react';
import Main from './components/main/main.js';
import Host from './components/host/host';
import Map from './components/map/map';
import Mode from './components/host_mode/Mode.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={['/', '/main']} exact>
            <Main />
          </Route>

          <Route path="/host">
            <Host />
          </Route>

          <Route path="/mode">
            <Mode />
          </Route>

          <Route path="/map">
            <Map />
          </Route>
        </Switch>
      </BrowserRouter>
    </>

  );
}

export default App;
