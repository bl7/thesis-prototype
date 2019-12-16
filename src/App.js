import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./store";
import AppNavBar from "./components/layout/AppNavBar";
// import Dashboard from "./components/layout/Dashboard";
import Status from "./components/layout/Status";
import Student from "./components/layout/Student";
import "./App.css";
import Tableau from "./components/layout/Tableau";

function App() {
  return (
    // <Provider store={store}>
    <Router>
      <AppNavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Status} />
          <Route exact path="/tableau" component={Tableau} />
          <Route exact path="/student" component={Student} />
        </Switch>
      </div>
    </Router>
    // </Provider>
  );
}

export default App;
