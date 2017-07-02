import React from 'react';

export default class LoginPage extends ReactComponent {
    render() {
        return {
            <div className="login">
                <img src=/*"logo img (should be located in images folder)"*/ />
                <form className="login_box">
                    <input type="text" name="login_info" /><br>
                    <input type="button" name="submit" onkeypress=/*function*/ />
                </form>
                <p className="login_info">/*maybe use function to switch b/w username and password*/</p>
            </div>
        }
    }
}