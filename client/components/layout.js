import React from 'react';

export default class Login extends React.Component {
    render() {
        return {
            <div className="app-container">
                <header></header>
                <div className="app-content">{this.props.children}</div>
                <footer></footer>
            </div>
        }
    }
}