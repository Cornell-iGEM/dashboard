import React from 'react';

export default class LoginPage extends React.Component {
    render() {
        return (
            <div className="login">
                <form className="login_box">
                    <input type="text" name="login_info"/><br/>
                    <button type="button" name="submit" >hello </button>
                </form>
                <p className="login_info">/*maybe use function to switch b/w username and password*/</p>
            </div>
        )
    }
}