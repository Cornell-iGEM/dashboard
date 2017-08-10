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
            <div className="login">
              <button onClick={this.login} type="button" name="submit" className="btn">Login</button>
                {/* <form className="login_area">
                    <input type="text" name="login_info"/><br/>
                    <span>{this.props.auth}</span>
                    <button onClick={this.login} type="button" name="submit" className="btn">Login</button>
                </form> */}
                {/* <form>
                  <div className="form-group">
                    <input type="text" className="form-control" id="username" placeholder="Username"></input>
                  </div>

                  <div className="form-group">
                    <input type="password" className="form-control" id="password" placeholder="Password"></input>
                  </div>
                </form> */}
            </div>
        )
    }
}
