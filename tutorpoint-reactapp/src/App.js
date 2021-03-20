import "./App.css";
import Register from "./register";
import Login from "./login";
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import PasswordReset from "./password-reset";
import HomePage from "./homepage";
import TutorTableContainer from "./TutorTableContainer";
import WorkshopContainer from "./containers/WorkshopContainer";
import TutorForm from "./TutorForm";
import Feedback from "./Feedback";
import ManageTutorApplication from "./ManageTutorApplication.jsx";
import TutorApplicationStatus from "./TutorApplicationStatus";
import PasswordChange from "./password-change.jsx"
import DetailChange from "./detailchange.jsx"
import HelpPage from "./helppage.jsx"
import SecurityCode from "./securityCode";
import AddWorkshop from "./AddWorkshop.jsx";
import RegisteredWorkshops from "./RegisteredWorkshops";

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
          <Route exact path="/password-change" component={PasswordChange}></Route>
          <Route exact path="/helppage" component={HelpPage}></Route>
          <Route exact path="/details-change" component={DetailChange}></Route>
          <Route exact path="/securityCode" component={SecurityCode}></Route>
          <Route exact path="/addworkshop" component={AddWorkshop}></Route>
          <Route exact path="/registeredWorkshops" component={RegisteredWorkshops}></Route>
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
