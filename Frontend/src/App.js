import React from 'react';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';
import { Offline, Online } from "react-detect-offline";
import Notfound from './pages/Notfound';
import Home from './pages/Home';
import Workshops from './pages/Workshops';
import Register from './pages/Register';
import Login from './pages/Login';
import StayTuned from './pages/StayTuned';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Technical from './pages/Technical';
import OfflinePage from './pages/OfflinePage';
import Profile from './pages/Profile';
import Ticket from './pages/Ticket';
import NonTechnical from './pages/NonTechnical';
import SessionExpired from './pages/SessionExpired';

function App() {
  return (
	<React.Fragment>
		<Offline>
            <OfflinePage />
        </Offline>
		<Online>
			<Switch>
				<Route exact path = '/' component = {Home}/>
				<Route exact path = '/events' component = {StayTuned}/>
				<Route exact path = '/events/technical' component = {StayTuned}/>
				<Route exact path = '/events/non-technical' component = {StayTuned}/>
				<Route exact path = '/workshops' component = {StayTuned}/>
				<Route exact path = '/checkout/:id' component = {StayTuned}/>
				<Route exact path = '/login' component = {StayTuned}/>
				<Route exact path = '/register' component = {StayTuned}/>
				<Route exact path = '/account' component = {StayTuned}/>
				<Route exact path = '/stay-tuned' component = {StayTuned}/>
				<Route exact path = '/contact' component = {StayTuned}/>
				<Route exact path = '/not-found' component = {Notfound}/>
				<Route exact path = '/session-expired' component ={StayTuned}/>
				<Redirect to = '/not-found'/>
			</Switch>
		</Online>
	</React.Fragment>
  );
}

export default withRouter(App);
