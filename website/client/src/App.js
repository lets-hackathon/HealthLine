import React,{Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import  SideBar from './components/layout/SideBar';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';


import Login from './components/auth/Login';
import Register from './components/auth/Register';

import Home from './components/patient/Home';

import Blog from './components/patient/Blog';
import Misc from './components/patient/Misc';
import Profile from './components/patient/Profile';
import Record from './components/patient/Record';
import Reminder from './components/patient/Reminder';
import SocialPresence from './components/patient/SocialPresence';
import SymptomTracker from './components/patient/SymptomTracker';

import AuthState from './context/auth/AuthState';

import './App.css';

export default function App() {
  return (
    <AuthState>
<Header/>
    {/* <div id="App"> */}

      {/* <div id="page-wrap"> */}
      <Router>
 {/* <div className="container"> */}
 	<Switch> 	
   <Route exact path='/home' component={Home}/>

   <Route exact path='/register' component={Register}/>
  <Route exact path='/login' component={Login}/>
 	<Route exact path='/' component={Profile}/>
	<Route exact path='/blog' component={Blog}/> 
 	<Route exact path='/misc' component={Misc}/>
 	<Route exact path='/record' component={Record}/>
 <Route exact path='/reminder' component={Reminder}/>
 <Route exact path='/socialpresence' component={SocialPresence}/>
<Route exact path='/symptomtracker' component={SymptomTracker}/>
 	</Switch>
 	{/* </div> */}
 </Router>
    {/* </div> */}
    {/* </div> */}
    <Footer/>

    </AuthState>

  );
}
