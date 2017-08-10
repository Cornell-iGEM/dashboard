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
              <img src="/app/static/assets/images/logo.png" className="login-logo"></img>
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
