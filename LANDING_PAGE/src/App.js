import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import LandingPage from "./LandingPage";
import Events from "./Events.js";
import Mint from "./MintTicket.js";
import "./css/App.css";

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   { this.state.loading
      //     ? <div id="loader" className="text-center mt-5"><p>Loading...</p></div>
      //     : <div>
      //         <LandingPage />
      //       </div>
      //   }
      <div>
        <Router>
          <Switch>
            <Route>
              <Route path='/events' exact component={Events} />
              <Route path='/mint' exact component={Mint} />
              <Route path='/' exact component={LandingPage} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
