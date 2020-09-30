import React from 'react';
import NavBar from './modules/NavBar.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './modules/Home.js'
import Default from './modules/Default.js'
import KimeraInfo from './modules/KimeraInfo.js'
import Video from "./modules/Video";

function App() {

    return (
        <BrowserRouter>
                <div>
                    <NavBar/>
                </div>
            <div >
            </div>
                <div >
                    <Switch>
                        <Route path={"/home"}
                               component={Home}
                        />
                        <Route path={"/info"}
                               component={KimeraInfo}
                        />

                        <Route path={"/video"}
                               component={Video}
                        />
                        <Route component={Default}
                        />
                    </Switch>
                </div>
        </BrowserRouter>
    );
}

export default App;
