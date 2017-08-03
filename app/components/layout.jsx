import React from 'react';
import LoginPage from './loginpage.jsx';
import Profile from './profile.jsx';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import Auth from '../Auth/Auth.js';
const auth0 = new Auth();
import history from '../history.js';
import Dashboard from './dashboard.jsx';

export default class Layout extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Router history={history}>
                <div className="page-wrapper">
                    <div className="col-md-3">
                      <ul className="nav nav-pills nav-stacked">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/history">History</Link></li>
                        <li><Link to="/login">Login</Link></li>
                      </ul>
                    </div>
                    <hr/>
                    <div className="col-md-9">
                        <div>
                            <Profile auth={auth0}>

                            </Profile>
                        </div>
                        <Route exact path="/" component={Dashboard}/>
                        <Route path="/history" component={History}/>
                        <Route path="/login" component={LoginPage} auth={auth0}/>
                        <Route path="/callback" render={(props) => (
                            handleAuthentication(props) ? (
                                <Redirect to="/home"/>
                            ) : (
                                <Redirect to="/300"/>
                            )
                            )}
                        />

                    </div>
                    <footer></footer>
                </div>
            </Router>
        )
    }
}

// const Home = () => (
//     <div>
//         {/* <h2>Home</h2> */}
//         <div className="dashboard">
//           <Dashboard />
//         </div>
//     </div>
// );

const History = () => (
    <div>
        <h2>Four score and seven years ago...</h2>
    </div>
);

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
