import React from 'react';
import NavBar from './modules/NavBar.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './modules/Home.js'
import Default from './modules/Default.js'
import Footer from './modules/Footer.js'
import KimeraInfo from './modules/KimeraInfo.js'
import Video from "./modules/Video";

function App() {

    return (
        <BrowserRouter>
        <div className="page-container">
        <div className="content-wrap">
                <div>
                    <NavBar/>
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
                         <Route path={"/historia"}
                              component={Home}
                         />
                        <Route component={Default}
                        />
                    </Switch>
                </div>
          </div>
         <div>
         <Footer/>
         </div>
         </div>
        </BrowserRouter>
    );
}

export default App;
