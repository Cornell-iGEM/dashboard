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
                <form className="login_box">
                    <input type="text" name="login_info"/><br/>
                    <span>{this.props.auth}</span>
                    <button onClick={this.login} type="button" name="submit" >hello </button>
                </form>
                <p className="login_info">/*maybe use function to switch b/w username and password*/</p>
            </div>
        )
    }
}