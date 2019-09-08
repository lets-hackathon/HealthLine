import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import Home from "./components/patient/Home";

import Blog from "./components/patient/Blog";
import Misc from "./components/patient/Misc";
import Profile from "./components/patient/Profile";
import RecordForm from "./components/patient/records/RecordForm";
import RecordRender from "./components/patient/records/RecordRender";
import ReminderForm from "./components/patient/reminders/ReminderForm";
import Reminder from "./components/patient/reminders/Reminders";
import SocialPresence from "./components/patient/SocialPresence";
import SymptomTracker from "./components/patient/SymptomTracker";
import setAuthToken from "./utils/setAuthToken";
import AuthState from "./context/auth/AuthState";
import ReminderState from "./context/reminder/ReminderState";

import "./App.css";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export default function App() {
  return (
    <ReminderState>
    <AuthState>
      {/* agar authenticated hai tabhi render navbar */}

      {/* <div id="App"> */}

      {/* <div id="page-wrap"> */}
      <Router>
        <Header />
        {/* <div className="container"> */}
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/recordform" component={RecordForm} />
          <Route exact path="/recordrender" component={RecordRender} />

          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/misc" component={Misc} />
          {/* <Route exact path='/record' component={Record}/> */}
          <Route exact path="/reminderform" component={ReminderForm} />
          <Route exact path="/reminder" component={Reminder} />
          <Route exact path="/socialpresence" component={SocialPresence} />
          <Route exact path="/symptomtracker" component={SymptomTracker} />
        </Switch>
        {/* </div> */}
      </Router>
      {/* </div> */}
      {/* </div> */}
      <Footer />
    </AuthState>
    </ReminderState>
  );
}
