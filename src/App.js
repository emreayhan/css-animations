import React from 'react';
import { Route, Switch , NavLink} from "react-router-dom";
import Header from './components/Header/Header'
import LoaderRing from './components/LoaderRing/LoaderRing'
import ShiningText from './components/ShiningText/ShiningText'
import BackgroundScrolling from './components/BackgroundScrolling/BackgroundScrolling'
import GhostText from './components/GhostText/GhostText'

function App() {
  return (
    <div className="App">
       <Header/>
        <Switch>
          <Route exact path="/" component={ShiningText} />
          <Route exact path="/loaderRing" component={LoaderRing} />
          <Route exact path="/backgroundScrolling" component={BackgroundScrolling} />
          <Route exact path="/ghostText" component={GhostText} />
        </Switch>
    </div>
  );
}

export default App;
