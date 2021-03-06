import React from 'react';
import LoginPage from './loginpage.jsx';
import Profile from './profile.jsx';
import Stream from './stream.jsx';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import Auth from '../Auth/Auth.js';
const auth0 = new Auth();
import history from '../history.js';
import Dashboard from './dashboard.jsx';
import Historical from './historical.jsx';

export default class Layout extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Router history={history}>
                <div className="page-wrapper">
                    <div className="col-md-3 nav_bar">
                      <ul className="nav nav-pills nav-stacked">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/graphs">Graphs</Link></li>
                          <li><Link to="/login">Login</Link></li>
                          <li><Link to="/stream">Stream</Link></li>
                      </ul>
                    </div>
                    <hr/>
                    <div className="col-md-9 logo-area">
                      <div className="container-fluid col-md-3 logo-wrapper"><style>width: inherit</style>
                        <img src="http://2017.igem.org/wiki/images/1/1d/CornellOxyponicsLogo.png" className="logo"></img>
                      </div>
                    </div>
                    <div className="col-md-9 dashboard-area">
                        <div>
                            <Profile auth={auth0}>

                            </Profile>
                        </div>
                        <Route exact path="/" component={Dashboard}/>
                        <Route path="/graphs" component={Historical}/>
                        <Route path="/login" component={LoginPage} auth={auth0}/>
                        <Route path="/stream" component={Stream}/>
                        <Route path="/callback" render={(props) => (
                            handleAuthentication(props) ? (
                                <Redirect to="/home"/>
                            ) : (
                                <Redirect to="/300"/>
                            )
                        )}/>
                    </div>
                    <footer></footer>
                </div>
            </Router>
        )
    }
}


const handleAuthentication = (nextState, replace) => {
    if(/access_token|id_token|error/.test(nextState.location.hash)){
        auth0.handleAuthentication();
        return true; //TODO: callback??
        //history.push('/home');
    }
    return false;
};



const Callback = ({history}) => (
    <div>Loading...</div>
);
