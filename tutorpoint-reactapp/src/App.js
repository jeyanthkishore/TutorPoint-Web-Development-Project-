import "./App.css";
import Register from "./components/js/register";
import Login from "./components/js/login";
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import PasswordReset from "./components/js/passwordReset";
import HomePage from "./components/homepage";
import TutorTableContainer from "./TutorTableContainer";
import WorkshopContainer from "./containers/WorkshopContainer";
import TutorForm from "./components/TutorForm";
import Feedback from "./components/Feedback";
import ManageTutorApplication from "./components/ManageTutorApplication";
import TutorApplicationStatus from "./components/TutorApplicationStatus";
import PasswordChange from "./components/js/passwordChange.jsx";
import DetailChange from "./components/js/detailchange.jsx";
import HelpPage from "./components/js/helppage.jsx";
import SecurityCode from "./components/js/securityCode";
import AddWorkshop from "./AddWorkshop.jsx";
import RegisteredWorkshops from "./RegisteredWorkshops";
import Appointments from "./Appointments";

function App() {
  return (
    <div id="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/homepage" component={HomePage}></Route>
          <Route
            exact
            path="/tutorList"
            component={TutorTableContainer}
          ></Route>
          <Route exact path="/workshops" component={WorkshopContainer}></Route>
          <Route exact path="/feedback" component={Feedback}></Route>
          <Route exact path="/becomeTutor" component={TutorForm}></Route>
          <Route exact path="/password-reset" component={PasswordReset}></Route>
          <Route
            exact
            path="/password-change"
            component={PasswordChange}
          ></Route>
          <Route exact path="/helppage" component={HelpPage}></Route>
          <Route exact path="/details-change" component={DetailChange}></Route>
          <Route exact path="/securityCode" component={SecurityCode}></Route>
          <Route exact path="/addworkshop" component={AddWorkshop}></Route>
          <Route
            exact
            path="/registeredWorkshops"
            component={RegisteredWorkshops}
          ></Route>
          <Route exact path="/appointments" component={Appointments}></Route>
          <Route
            exact
            path="/manage-tutor-application"
            component={ManageTutorApplication}
          ></Route>
          <Route
            exact
            path="/tutor-application-status"
            component={TutorApplicationStatus}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
