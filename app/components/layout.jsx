import React from 'react';
import LoginPage from './loginpage.jsx';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class Layout extends React.Component {
    render() {
        return (
            <Router>
                <div className="page-wrapper">
                    <ul className = "nav nav-pills nav-stacked">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/history">History</Link>
                        </li>
                    </ul>
                    <hr/>
                    <div className="container-fluid">
                        <LoginPage/>
                    </div>
                    <footer></footer>
                    <Route exact path="/" component={Home}/>
                    <Route path="/history" component={History}/>
                </div>
            </Router>
        )
    }
}

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const History = () => (
    <div>
        <h2>Four score and seven years ago...</h2>
    </div>
);