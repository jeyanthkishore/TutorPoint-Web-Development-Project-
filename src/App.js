import './App.css';
import Register from "./register";
import Login from "./login";
import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import PasswordReset from './password-reset';
import HomePage from './homepage';
import TutorTableContainer from './TutorTableContainer';
import WorkshopContainer from './containers/WorkshopContainer';
import TutorForm from './TutorForm';

function App() {
  return (
    <div id="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/register" component={Register} ></Route>
          <Route exact path="/homepage" component={HomePage} ></Route>
          <Route exact path="/tutorList" component={TutorTableContainer} ></Route>
          <Route exact path="/workshops" component={WorkshopContainer} ></Route>
          <Route exact path="/becomeTutor" component={TutorForm} ></Route>
          <Route exact ppath="/password-rest" component={PasswordReset}></Route>

      </Switch>
      </Router>
    </div>
  );
}

export default App;
