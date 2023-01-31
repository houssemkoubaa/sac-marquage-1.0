import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import Alerts from "./layout/Alerts";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import {
  HashRouter as Router,
  Route,
  Switch,
  redirect,
  Routes,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

import Login from "./accounts/Login";
import Register from "./accounts/Register";
// connect redux to react is through the provider , we need to wrap around it everything

import PrivateRoute from "./commun/PrivateRoute";

//Alert options is an object
const alertOptions = {
  timeout: 3000,
  position: "top center",
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div className="container">
                <Routes>
                  <Route exact path="/" element={<PrivateRoute />}>
                    <Route exact path="/" element={<Dashboard />} />
                  </Route>
                  <Route path={"/register"} element={<Register />}></Route>
                  <Route path={"/login"} element={<Login />}></Route>
                </Routes>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

// the provider takes in the store as a prop

// --watch in package.json in dev is for when u change smth in ur app or components , you don't have
// to do npm run dev again each time to reload/update main.js , --watch will take care of it
// and u ll just have to ctrl+r
