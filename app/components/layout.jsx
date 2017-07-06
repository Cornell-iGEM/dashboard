import React from 'react';
import LoginPage from './loginpage.jsx'

export default class Login extends React.Component {
    render() {
        return (
            <div className="app-container">
                <header>
                    <nav className = "navbar navbar-default">
                        Navbar!
                    </nav>
                </header>
                <div className="app-content">
                    <LoginPage/>
                </div>
                <footer></footer>
            </div>
        )
    }
}