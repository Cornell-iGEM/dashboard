import React from 'react';
import Auth from '../Auth/Auth.js';

const auth = new Auth();

export default class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }
    login(e){
        auth.login();
    }

    render() {
        return (
            <div className="login-area">
              <div className="login-logo-area text-center">
                <img src="http://2017.igem.org/wiki/images/1/1d/CornellOxyponicsLogo.png" className="login-logo"></img>
              </div>
              <button onClick={this.login} type="button" name="submit" className="btn">Login</button>
                {/* <form className="login_area">
                    <input type="text" name="login_info"/><br/>
                    <span>{this.props.auth}</span>
                    <button onClick={this.login} type="button" name="submit" className="btn">Login</button>
                </form> */}
            </div>
        )
    }
}
