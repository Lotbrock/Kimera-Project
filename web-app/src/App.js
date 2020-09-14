import React from 'react';
import NavBar from './modules/NavBar.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './modules/Home.js'
import Default from './modules/Default.js'
import KimeraInfo from './modules/KimeraInfo.js'

function App() {

  return (
  <BrowserRouter>
    <div className="App">
<div>
    <NavBar/>
</div>
    <div>
                <Switch>
                    <Route path={"/home"}
                           component={Home}
                    />
                    <Route path={"/info"}
                           component={KimeraInfo}
                    />
                    <Route component={Default}
                    />
                </Switch>
          </div>
    </div>

    </BrowserRouter>
  );
}

export default App;
